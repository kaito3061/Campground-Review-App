if (process.env.NODE_ENV !== 'production') {
    require('dotenv').config();
}

const express = require('express');
const path = require('path');
const mongoose = require('mongoose');
const ejsMate = require('ejs-mate');
const session = require('express-session');
const flash = require('connect-flash');
const ExpressError = require('./utils/ExpressError');
const Campground = require('./models/campground');
const methodOverride = require('method-override');
const { error } = require('console');
const { title } = require('process');
const app = express();
const passport = require('passport');
const LocalStrategy = require('passport-local');
const User = require('./models/user');
const helmet = require('helmet');//ヘルメッと

//const mongoSanitize = require('express-mongo-sanitize');//これ


const userRoutes = require('./routes/users');
const campgroundRoutes = require('./routes/campgrounds');
const reviewRoutes = require('./routes/reviews');
const MongoStore = require('connect-mongo')(session);
// const dbUrl = 'mongodb://localhost:27017/yelp-Camp';
const dbUrl = process.env.DB_URL || 'mongodb://localhost:27017/yelp-Camp';
//dbUrl
//'mongodb://localhost:27017/yelp-Camp'
mongoose.connect(dbUrl, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false
})
    .then(() => {
        console.log('MongoDBコネクションOK！');
    })
    .catch((err) => {
        console.log('MongoDBコネクションerror');
        console.log(err);
    });

app.engine('ejs', ejsMate);
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.use(express.urlencoded({ extended: true }));
app.use(methodOverride('_method'));
app.use(express.static(path.join(__dirname, 'public')));

//app.use(mongoSanitize());//これ

// const store = MongoStore.create({
//     mongoUrl: dbUrl,
//     crypt: {
//         secret: 'mysecret'
//     },
//     touchAfter: 24 * 3600
// });

const secret = process.env.SECRET || 'mysecret';

const store = new MongoStore({
    url: dbUrl,
    secret,
    touchAfter: 24 * 3600
});


// // 修正後（v4以降用の書き方）
// const store = new MongoStore({
//   mongoUrl:dbUrl,
//   touchAfter: 24 * 60 * 60
// });


store.on('error', e => {
    console.log('セッションストアエラー', e);
})

const sessionConfig = {
    store,
    name: 'session',
    secret,
    resave: false,


    saveUninitialized: true, // 


    cookie: {
        HttpOnly: true,
        //secure:true,
        maxage: 1000 * 60 * 60 * 24 * 7
    }
};
app.use(session(sessionConfig));



app.use(passport.initialize());
app.use(passport.session());

// app.use((req, res, next) => {
//   res.locals.currentUser = req.user;
//   res.locals.success = req.flash('success');
//   res.locals.error = req.flash('error');
//   next();
// });
passport.use(new LocalStrategy(User.authenticate()));
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

app.use(flash());

//app.use(helmet());

app.use(helmet({
    contentSecurityPolicy: false
}));


// const scriptSrcUrls = [
//     'https://api.mapbox.com',
//     'https://cdn.jsdelivr.net'
// ];
// const styleSrcUrls = [
//     'https://api.mapbox.com',
//     'https://cdn.jsdelivr.net'
// ];
// const connectSrcUrls = [
//     'https://api.mapbox.com',
//     'https://*.tiles.mapbox.com',
//     'https://events.mapbox.com'
// ];
// const fontSrcUrls = [];
// const imgSrcUrls = [
//     `https://res.cloudinary.com/${process.env.CLOUDINARY_CLOUD_NAME}/`,
//     'https://images.unsplash.com'
// ];

// app.use(helmet.contentSecurityPolicy({
//     directives: {
//         defaultSrc: [],
//         connectSrc: ["'self'", ...connectSrcUrls],
//         scriptSrc: ["'unsafe-inline'", "'self'", ...scriptSrcUrls],
//         styleSrc: ["'self'", "'unsafe-inline'", ...styleSrcUrls],
//         workerSrc: ["'self'", "blob:"],
//         childSrc: ["blob:"],
//         objectSrc: [],
//         imgSrc: ["'self'", 'blob:', 'data:', ...imgSrcUrls],
//         fontSrc: ["'self'", ...fontSrcUrls]
//     }
// }));



app.use((req, res, next) => {
    res.locals.currentUser = req.user;
    res.locals.success = req.flash('success');
    res.locals.error = req.flash('error');
    next();
})




app.get('/', (req, res) => {
    res.render('home');
});

app.use('/', userRoutes);
app.use('/campgrounds', campgroundRoutes);
app.use('/campgrounds/:id/reviews', reviewRoutes);




app.all('/{*any}', (req, res, next) => {
    next(new ExpressError('ページが見つかりませんでした', 404));
});



app.use((err, req, res, next) => {
    const { statusCode = 500 } = err;
    if (!err.message) {
        err.message = "問題が起きました";
    }
    res.status(statusCode).render('error', { err });
});
const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`ポート${port}でリクエストを待受中・・・・`)
});


