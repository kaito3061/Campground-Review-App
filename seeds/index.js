const mongoose = require('mongoose');
const cities = require('./cities');
const Campground = require('../models/campground');
const { descriptors, places } = require('./seedHelpers');

mongoose.connect('mongodb://localhost:27017/yelp-Camp', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true
})
    .then(() => {
        console.log('MongoDBコネクションOK！');
    })
    .catch((err) => {
        console.log('MongoDBコネクションerror');
        console.log(err);
    });

const sample = array => array[Math.floor(Math.random() * array.length)];





const seedDB = async () => {
    await Campground.deleteMany({});
    for (let i = 0; i < 50; i++) {
        const randomCityIndex = Math.floor(Math.random() * cities.length);
        const price = Math.floor(Math.random() * 2000) + 1000;
        const camp = new Campground({
            author: '68577759531dbb7a8b09c4ba',
            location: `${cities[randomCityIndex].prefecture}${cities[randomCityIndex].city}`,
            title: `${sample(descriptors)}・${sample(places)}`,
            // image: `https://picsum.photos/400?random=${Math.random()}`,
            description: "説明文は後で追加します",
            geometry:{
                type:'Point',
                coordinates:[
                    cities[randomCityIndex].longitude,
                    cities[randomCityIndex].latitude
                ]
            },
            price,
            images: [{
                url:'https://picsum.photos/400?random=0.22771877082525194' ,
                filename: `dummy`
            }]
        });
    await camp.save();
    }
}



seedDB().then(() => {
    mongoose.connection.close();
})