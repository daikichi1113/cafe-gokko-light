<template>
  <div class="container">
    <div class="header">
      <h2>オーダーシステム</h2>
      <ul>
        <li>drink</li>
        <li>food</li>
        <li>set</li>
      </ul>
    </div>
    <div class="menuList">
      <div class="drink">
        <h3>ドリンクメニュー</h3>
        <ul>
          <li>
            <img src="~/assets/hotcoffe.jpg" width="200" height="200">
            <p>ホットコーヒー</p>
            <p>300円</p>
          </li>
          <li>
            <img src="~/assets/icecoffe.jpg" width="200" height="200">
            <p>アイスコーヒー</p>
            <p>300円</p>
          </li>
          <li>
            <img src="~/assets/milk.jpg" width="200" height="200">
            <p>ミルク</p>
            <p>200円</p>
          </li>
          <li>
            <img src="~/assets/juise.jpg" width="200" height="200">
            <p>ジュース</p>
            <p>200円</p>
          </li>
        </ul>
      </div>
      <div class="food">
        <h3>フードメニュー</h3>
        <ul>
          <li>
            <img src="~/assets/sandwich.jpg" width="200" height="200">
            <p>サンドイッチ</p>
            <p>400円</p>
          </li>
          <li>
            <img src="~/assets/hotsand.jpg" width="200" height="200">
            <p>ホットサンド</p>
            <p>400円</p>
          </li>
          <li>
            <img src="~/assets/curry.jpg" width="200" height="200">
            <p>カレーライス</p>
            <p>500円</p>
          </li>
          <li>
            <img src="~/assets/pasta.jpg" width="200" height="200">
            <p>スパゲッティ</p>
            <p>500円</p>
          </li>
        </ul>
      </div>
      <div class="set">
        <h3>セットメニュー</h3>
        <ul>
          <li>
            <img src="~/assets/morningA.jpg" width="200" height="200">
            <p>モーニングA</p>
            <p>500円</p>
          </li>
          <li>
            <img src="~/assets/morningB.jpg" width="200" height="200">
            <p>モーニングB</p>
            <p>500円</p>
          </li>
          <li>
            <img src="~/assets/desertA.jpg" width="200" height="200">
            <p>デザートA</p>
            <p>500円</p>
          </li>
          <li>
            <img src="~/assets/desertB.jpg" width="200" height="200">
            <p>デザートB</p>
            <p>500円</p>
          </li>
        </ul>
      </div>
    </div>
    <div class="footer">
      <h2>オーダーリスト</h2>
      <div class="order">
        <ul>
          <li>
            <p>ホットコーヒー</p>
            <button>+</button>
            <button>-</button>
            <p>注文数:１</p>
            <input type="submit" value="削除">
          </li>
          <li>
            <p>アイスコーヒー</p>
            <button>+</button>
            <button>-</button>
            <p>注文数:１</p>
            <input type="submit" value="削除">
          </li>
        </ul>
      </div>
      <div class="orderBtn">
        <input type="submit" value="オーダーする">
        <input type="submit" value="取り消し">
      </div>
    </div>
  </div>
</template>

<script>
  export default {
  
  }
</script>

<style>
* {
  box-sizing: border-box;
}

html, body,
ul, ol, li,
h1, h2, h3, h4, h5, h6, p,
form, input, div {
  margin: 0;
  padding: 0;
  color: gray;
}

ul {
  list-style: none;
}

a {
  text-decoration: none;
  color: gray;
}

img {
  object-fit: cover;
  width: 200;
  height: 200;
}

img:hover {
  filter: brightness(0.7);
}

.container {
  margin: 0 auto;
}

.header {
  margin: 0 auto;
  padding: 15px 0;
  text-align: center;
  display: flex;
  justify-content: space-between;
  position: fixed;
  top: 0px;
  left: 0px;
  width: 100%;
  background-color: #e4e2e2;
}

.header h2 {
  font-size: 20px;
  line-height: 20px;
  display: inline-block;
  padding-left: 80px;
}

.header ul {
  display: flex;
  justify-content: space-around;
  list-style: none;
  font-size: 20px;
  padding-right: 80px;
}

.header li {
  padding: 0 30px;
  color: gray;
  line-height: 20px;
}

.menuList {
  margin: 0 auto;
  text-align: center;
  width: 90%;
  margin-top: 70px;
  overflow: scroll;
  padding-bottom: 150px;
}

.menuList h3 {
  font-size: 20px;
  margin: 10px 0 20px 0;
}

.drink, .food, .set {
  margin-bottom: 20px;
}

.drink ul, .food ul, .set ul {
  display: flex;
  justify-content: space-around;
}

.footer {
  text-align: center;
  font-size: 15px;
  padding: 10px 0 10px 0;
  position: fixed;
  bottom: 0px;
  left: 0px;
  width: 100%;
  background-color: #e4e2e2;
}

.footer h2 {
  margin-bottom: 5px;
  font-size: 15px;
}

.order {
  font-size: 15px;
  font-family: bold;
  height: 60px;
  width: 50%;
  overflow: scroll;
  display: inline-block;
  border-top: 0.5px solid gray;
  border-bottom: 0.5px solid gray;
  padding: 5px 0;
}

.order li {
  display: flex;
  justify-content: center;
  margin-bottom: 5px
}

.order button {
  margin: 0 10px;
}

.order p {
  margin: 0 10px;
}

.order input {
  font-size: 20px;
  padding-top: 10px;
}

.orderBtn {
  margin: 10px;
}

.orderBtn input {
  font-size: 20px;
  padding: 20px 40px;
  margin: 0 15px;
}

</style>