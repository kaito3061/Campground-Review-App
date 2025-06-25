const express = require('express');
const router = express.Router();
const passport = require('passport');
const { storeReturnTo } = require('../middleware');
const users = require('../controllers/users');


router.route('/register')
.get(users.renderRegister)// ユーザー登録ページの表示
.post(users.register)// ユーザー登録処理


router.route('/login')
.get(users.renderLogin)// ログインページの表示
.post(storeReturnTo, //  ログイン処理
    passport.authenticate('local', {
        failureFlash: true,
        failureRedirect: '/login'
    }), users.login);

router.get('/logout', users.logout);// ログアウト処理

module.exports = router;
