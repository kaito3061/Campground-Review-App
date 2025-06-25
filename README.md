# キャンプ場検索アプリ

このアプリは、MongoDBに保存されたキャンプ場の情報を表示し、検索・閲覧ができるWebアプリケーションです。  
ユーザーはキャンプ場の一覧を閲覧したり、新規登録や詳細確認、編集・削除などの操作が可能です。※動画講座をベースとして作っているので学習記録として載せています。

---
## 🏠ホーム画像 

![デモ-2](https://github.com/user-attachments/assets/b95d5f48-0915-4628-87b9-006df316ac97)

---


## 📺 デモ動画  

![Videotogif-2](https://github.com/user-attachments/assets/a9b768ff-295c-4a66-900b-b74aeeac7e49)

---

## 🔗 デプロイ先

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
- キャンプ場名や特徴による検索機能  
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


