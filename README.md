# YelpCamp-キャンプ場レビューアプリ

このアプリは、MongoDBに保存されたキャンプ場の情報を表示し、検索・閲覧ができるWebアプリケーションです。  
ユーザーはキャンプ場の一覧を閲覧したり、新規登録や詳細確認、編集・削除などの操作が可能です。学習記録として載せています。

---
## 🏠ホーム画像 

![デモ-2](https://github.com/user-attachments/assets/b95d5f48-0915-4628-87b9-006df316ac97)

---


## 📺 デモ動画  

![Videotogif-2](https://github.com/user-attachments/assets/a9b768ff-295c-4a66-900b-b74aeeac7e49)

---

## 🔗 デプロイ先(推奨ブラウザ　Google Crhome）※Safariなどは文字化けの可能性があります。

- 🚀 本番環境: [https://nameless-waters-22856-b132721bcca3.herokuapp.com/campgrounds](https://nameless-waters-22856-b132721bcca3.herokuapp.com)
  
---


## 学習目的

Node.js、Express、MongoDBを活用したフルスタックWebアプリ開発のスキルアップを目的としています。

このプロジェクトを通して、以下の学習をしました。

- RESTful API設計とExpressによるサーバー構築  
- MongoDB/Mongooseを用いたデータベース操作  
- EJSテンプレートエンジンによる動的HTML生成  
- ユーザー認証・認可（ログイン機能）  
- ファイルアップロード（キャンプ場画像の管理）  
- フロントエンドとバックエンドの連携  

---

## 🚀 主な機能

- キャンプ場一覧の表示  
- キャンプ場の詳細ページ閲覧  
- 新規キャンプ場の登録（画像アップロード対応）  
- 登録済みキャンプ場の編集・削除  
- ユーザー登録・ログイン機能によるアクセス制御  


---

## 🛠 使用技術

| 分野         | 技術                                |
|--------------|-------------------------------------|
| フロントエンド | EJS, Bootstrap                      |
| バックエンド   | Node.js, Express                   |
| データベース   | MongoDB Atlas, Mongoose            |
| デプロイ       | Heroku                             |
| 認証・認可     | Passport.js (Local Strategy)       |
| 地図機能       | Mapbox                             |
| ファイル管理   | Cloudinary, Multer                 |
| バリデーション | Joi                                 |
| セッション管理 | express-session, connect-mongo     |


--
## 🛠 今後の実装予定・改善点

- フロントエンドをReactなどのモダンフレームワークにリファクタリング  
  → 特に**TypeScriptとReactを使った設計・実装のリファクタリング**を検討しています。型安全性を高め、コードの保守性と拡張性を強化したいと考えています。   
- モバイルレスポンシブ対応・UI/UXの向上  
- ユーザーのお気に入り登録機能






# English version
---

# YelpCamp - Campground Review and Search App

This is a full-stack web application that allows users to browse, search, register, and manage campgrounds using data stored in MongoDB.  
Users can view a list of campgrounds, see detailed information, create new entries, and edit or delete existing ones.  
※ This app was built as a learning record based on an online video course.

---

## 🏠 Home Page Screenshot

![demo-2](https://github.com/user-attachments/assets/b95d5f48-0915-4628-87b9-006df316ac97)

---

## 📺 Demo Video

![demo-gif](https://github.com/user-attachments/assets/a9b768ff-295c-4a66-900b-b74aeeac7e49)

---

## 🔗 Deployment URL

- 🚀 Live App: [https://nameless-waters-22856-b132721bcca3.herokuapp.com/campgrounds](https://nameless-waters-22856-b132721bcca3.herokuapp.com)

---

## 🎯 Purpose of Learning

The goal of this project was to deepen my understanding of full-stack web development using Node.js, Express, and MongoDB.

Through building this app, I gained experience in:

- Designing RESTful APIs and creating servers with Express  
- Using MongoDB and Mongoose for database operations  
- Generating dynamic HTML with the EJS template engine  
- Implementing user authentication and authorization  
- Handling file uploads (managing campground images)  
- Integrating frontend and backend systems effectively  

---

## 🚀 Key Features

- Browse a list of campgrounds  
- Search by campground name or features  
- View detailed campground pages  
- Add new campgrounds (with image upload)  
- Edit or delete registered campgrounds  
- User registration and login (access control by authentication)  

---

## 🛠 Technologies Used

| Category       | Technologies                         |
|----------------|--------------------------------------|
| Frontend       | EJS, Bootstrap                       |
| Backend        | Node.js, Express                     |
| Database       | MongoDB Atlas, Mongoose              |
| Deployment     | Heroku                               |
| Authentication | Passport.js (Local Strategy)         |
| Map Integration| Mapbox                               |
| File Upload    | Cloudinary, Multer                   |
| Validation     | Joi                                  |
| Session Mgmt   | express-session, connect-mongo       |

---

## 🔧 Future Improvements and Features

- Refactor frontend using modern frameworks like React  
  → Especially considering a **TypeScript + React-based refactor** to improve type safety, maintainability, and scalability  
- Improve UI/UX with responsive design for mobile devices  
- Add favorite/bookmark feature for logged-in users  

---




