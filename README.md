# アプリ名
cafe-gokko-light

# 概要
ごっこ遊びが好きな娘のために作ったメニューオーダーアプリの試作品<br>
学習用としてメニュー注文ページとメニューの登録ページをそれぞれSPAで作成した

## メニュー注文ページについて
メニューのチェックボックスをクリックすると、オーダーリストにメニューが追加される。

## メニューの登録ページについて
ドリンク、フード、セットのそれぞれのページを用意。名前と値段をデータベースに登録できる。

# 言語
javascript

# フレームワーク
nuxt.js

# API
Firebase<br>
企画時はlarabelをサーバー側のAPIとして用いたSSRを予定していたがことが、理解度が低く連携がうまくいかなかったため、Firebaseを用いたSPAに切り替えた。

# データベース設計
## menuDataテーブル(注文用)
|Column|Type|Options|
|------|----|-------|
|name|string|null: false|
|price|integer|null: false|
|counter|integer|null: false|
|tableNumber|integer|null: false|

## drinkDataテーブル（登録用）
|Column|Type|Options|
|------|----|-------|
|name|string|null: false|
|price|integer|null: false|
|image|string|null: false|

## foodDataテーブル（登録用）
|Column|Type|Options|
|------|----|-------|
|name|string|null: false|
|price|integer|null: false|
|image|string|null: false|

## setDataテーブル（登録用）
|Column|Type|Options|
|------|----|-------|
|name|string|null: false|
|price|integer|null: false|
|image|string|null: false|

# 今後の修正点
## laravelとの連携
laravelの理解度が未熟であることから、しっかりと学習を深め連携できるようにする。<br>
外部APIとしてlaravelを用いることでデータベースのデータを引用しやすくする。

## メニュー注文ページへのDBデータの反映
getメソッドを用いてDBのデータを用いる予定であったが、うまく汲み上げることができなかった。この部分がうまくいけば、v-forでメニューを表示できるのでコードがすっきりする。

## チェックボックス
チェックボックスをクリックすることで注文するメニューを一覧表示することはできたが、valueの値を分けることができなかったため、小計・合計を表示することができなかった。<br>
ただし、DBデータを活用できた場合にチェックボックスを用いることができるかは要検討。

## オーダーリストのDBへの保存とオーダー受信ページの作成
今回は時間が足りずSPAとなってしまい、オーダー受信ページまで作成できなかった。しかし、この部分が肝であるため、なんとか作り上げたい。

## カウンター
数量のカウンターを実装したが、全ての値がセットされてしまうためコメントアウトで非実装とした。それぞれのカウンターを独立させたい。

### 正規版に向けて
今回はnuxtjsの基本を学習したのちにアプリ開発を行ったが、Javascript及びlaravelの理解度が低いと改めて実感した。そこで、Udemyのjavascriptとlaravelの学習教材を購入し、改めて理解を深めていきたい。

## Build Setup

```bash
# install dependencies
$ npm install

# serve with hot reload at localhost:3000
$ npm run dev

# build for production and launch server
$ npm run build
$ npm run start

# generate static project
$ npm run generate
```

For detailed explanation on how things work, check out [Nuxt.js docs](https://nuxtjs.org).
