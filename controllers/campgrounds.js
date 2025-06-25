
const Campground = require('../models/campground');
const mbxGeocoding = require('@mapbox/mapbox-sdk/services/geocoding');

const { cloudinary } = require('../cloudinary/index');
const mapboxToken = process.env.MAPBOX_TOKEN;
const geocoder = mbxGeocoding({ accessToken: mapboxToken });




module.exports.index = async (req, res) => {
    const campgrounds = await Campground.find({});
    res.render('campgrounds/index', { campgrounds });
};

module.exports.renderNewForm = (req, res) => {
    res.render('campgrounds/new');
}
module.exports.showCampground = async (req, res) => {
    const campground = await Campground.findById(req.params.id)
        .populate({
            path: 'reviews',
            populate: {
                path: 'author'
            }
        }).populate('author');
    if (!campground) {
        req.flash('error', 'キャンプ場は見つかりませんでした');
        return res.redirect('/campgrounds');
    }
    res.render('campgrounds/show', { campground });
};
module.exports.createCampground = async (req, res, next) => {
    try {
        const geoData = await geocoder.forwardGeocode({
            query: req.body.campground.location,
            limit: 1
        }).send();
        const campground = new Campground(req.body.campground);
        campground.geometry = geoData.body.features[0].geometry;
        campground.author = req.user._id;
        campground.images = req.files.map(f => ({
            url: f.path,
            filename: f.filename,
        }));
        await campground.save();
        req.flash('success', '新しいキャンプ場を登録しました');
        res.redirect(`/campgrounds/${campground._id}`);
    } catch (e) {
        req.flash('error', e.message);
        console.log('error', e.message);
        res.redirect('/campgrounds/new');
    }
};

// module.exports.createCampground = async (req, res) => {

//         console.log('createCampground開始');
//         console.log('req.files:', req.files);

//         // if (!req.body.campground) throw new ExpressError('不正なキャンプ場のデータです', 400);
//         const campground = new Campground(req.body.campground);
//         campground.author = req.user._id;
//         campground.images = req.files.map(f => ({
//             url: f.path, filename: f.filename,
//         }));
//         await campground.save();
//         // console.log(campground);
//         req.flash('success', '新しいキャンプ場を登録しました');
//         res.redirect(`/campgrounds/${campground._id}`);


//         req.flash('error', e.message); // ← `e` がないとここで失敗
//         console.log('error', e.message); // ← ここでも undefined.message になって落ちる
//         res.redirect('/campgrounds'); // ← これも入れた方がいい

// };


module.exports.renderEditForm = async (req, res) => {
    const { id } = req.params;
    const campground = await Campground.findById(id);
    if (!campground) {
        req.flash('error', 'キャンプ場は見つかりませんでした');
        return res.redirect('/campgrounds');
    }

    res.render('campgrounds/edit', { campground });
};


module.exports.updateCampground = async (req, res) => {
    const { id } = req.params;
    const campground = await Campground.findByIdAndUpdate(id, { ...req.body.campground }, { new: true });
    const imgs = req.files.map(f => ({
        url: f.path, filename: f.filename,
    }));
    campground.images.push(...imgs);
    await campground.save();
    for (let filename of req.body.deleteImages) {
        await cloudinary.uploader.destroy(filename);
    }
    if (req.body.deleteOne({ $pull: { images: { filename: { $in: req.body.deleteImages } } } }))
        await req.flash('success', 'キャンプ場を更新しました');
    res.redirect(`/campgrounds/${campground._id}`);
};
module.exports.deleteCampground = async (req, res) => {
    const { id } = req.params;
    await Campground.findByIdAndDelete(id);
    req.flash('success', 'キャンプ場を削除しました');
    res.redirect('/campgrounds');
};