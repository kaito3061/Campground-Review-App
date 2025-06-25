const mongoose = require('mongoose');
const { Schema } = mongoose;
const passportLocalMongoose = require('passport-local-mongoose');
const express = require('express');
const router = express.Router();


const userSchema = new Schema({
    email: {
        type: String,
        required: true,
        unique: true
    }
});
 
userSchema.plugin(passportLocalMongoose,{
    errorMessages:{
        UserExistsError:'そのユーザー名はすでに使われています',
        MissingPasswordError:'パスワードを入力してください',
        AttemptTooSoonError:'アカウントがロックされています。時間を空けて再度試してくだい',
        TooManyAttemotsError:'ログインの失敗が続いたため、アカウントをロックしました',
        NoSaltValueStoredError:'認証ができませんでした',
        IncorrectPasswordError:'パスワードまたはユーザー名が間違っています',
        IncorrectUssernameError:'パスワードまたはユーザー名が間違っています'

    } 
});




module.exports = mongoose.model('User',userSchema);
