<template>
  <div class="container">
    <div class="menuList">
      <h3>ドリンクメニュー</h3>
      <div class="menu">
        <div class>
          <img src="~/assets/hotcoffe.jpg" width="200" height="200">
          <p>ホットコーヒー</p>
          <p>300円</p>
        </div>
        <div>
          <img src="~/assets/icecoffe.jpg" width="200" height="200">
          <p>アイスコーヒー</p>
          <p>300円</p>
        </div>
        <div>
          <img src="~/assets/milk.jpg" width="200" height="200">
          <p>ミルク</p>
          <p>200円</p>
        </div>
        <div>
          <img src="~/assets/juise.jpg" width="200" height="200">
          <p>ジュース</p>
          <p>200円</p>
        </div>
      </div>
      <form class="checkbox" v-on:submit.prevent="add">
        <label><input type="checkbox" value="ホットコーヒー 300" v-model="menu"></label>
        <label><input type="checkbox" value="アイスコーヒー 300" v-model="menu"></label>
        <label><input type="checkbox" value="ミルク 200" v-model="menu"></label>
        <label><input type="checkbox" value="ジュース 200" v-model="menu"></label>
      </form>
      <h3>フードメニュー</h3>
      <div class="menu">
        <div class>
          <img src="~/assets/sandwich.jpg" width="200" height="200">
          <p>サンドイッチ</p>
          <p>400円</p>
        </div>
        <div>
          <img src="~/assets/hotsand.jpg" width="200" height="200">
          <p>ホットサンド</p>
          <p>400円</p>
        </div>
        <div>
          <img src="~/assets/curry.jpg" width="200" height="200">
          <p>カレーライス</p>
          <p>500円</p>
        </div>
        <div>
          <img src="~/assets/pasta.jpg" width="200" height="200">
          <p>本日のパスタ</p>
          <p>500円</p>
        </div>
      </div>
      <form class="checkbox" v-on:submit.prevent="add">
        <label><input type="checkbox" value="サンドイッチ 400" v-model="menu"></label>
        <label><input type="checkbox" value="ホットサンド 400" v-model="menu"></label>
        <label><input type="checkbox" value="カレーライス 500" v-model="menu"></label>
        <label><input type="checkbox" value="本日のパスタ 500" v-model="menu"></label>
      </form>
      <h3>セットメニュー</h3>
      <div class="menu">
        <div class>
          <img src="~/assets/morningA.jpg" width="200" height="200">
          <p>モーニングA</p>
          <p>500円</p>
        </div>
        <div>
          <img src="~/assets/morningB.jpg" width="200" height="200">
          <p>モーニングB</p>
          <p>500円</p>
        </div>
        <div>
          <img src="~/assets/desertA.jpg" width="200" height="200">
          <p>デザートA</p>
          <p>500円</p>
        </div>
        <div>
          <img src="~/assets/desertB.jpg" width="200" height="200">
          <p>デザートB</p>
          <p>500円</p>
        </div>
      </div>
      <form class="checkbox" v-on:submit.prevent="add">
        <label><input type="checkbox" value="モーニングA 500"  v-model="menu"></label>
        <label><input type="checkbox" value="モーニングB 500" v-model="menu"></label>
        <label><input type="checkbox" value="デザートA 500" v-model="menu"></label>
        <label><input type="checkbox" value="デザートB 500" v-model="menu"></label>
      </form>
    </div>
    <div class="orderList">
      <h2>オーダーデータ</h2>
      <div class="order">
        <ul>
          <li　v-for="value in menu" :key="value">
            <p>{{ value }}円</p>
            <!-- <button v-on:click="$store.commit('counter/countUp')">+1</button>
            <button v-on:click="$store.commit('counter/countDown')">-1</button>
            <button v-on:click="$store.commit('counter/reset')">reset</button>
            <p>注文数：{{ $store.state.counter.counter }}</p> -->
            <!-- <p>小計： 円</p> -->
          </li>
        </ul>
      </div>
      <!-- <div class="totalPrice">
        <h2>合計： 円</h2>
      </div> -->
    </div>
  </div>
</template>

<script>
  import firebase from '@/plugins/firebase'

  export default {
    data: function() {
      return {
        menu: [],
      }
    },
    computed: {
      subTotal() {
        return 
      },
      totalPrice() {
        return
      }
    }
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
}

.container {
  margin: 0 auto;
}

.menuList {
  margin: 0 auto;
  text-align: center;
  width: 90%;
  margin-top: 10px;
  overflow: scroll;
  padding-bottom: 250px;
}

.menuList h3 {
  font-size: 20px;
  margin: 10px 0 20px 0;
}

.menu {
  display: flex;
  justify-content: space-around;
}

.checkbox {
  display: flex;
  justify-content: space-around;
}

.orderList {
  height: 230px;
  text-align: center;
  font-size: 15px;
  padding: 10px 0 10px 0;
  position: fixed;
  bottom: 0px;
  left: 0px;
  width: 100%;
  background-color: #e4e2e2f3;
}

.orderList h2 {
  margin-bottom: 10px;
  font-size: 15px;
}

.order {
  font-size: 15px;
  font-family: bold;
  height: 120px;
  width: 50%;
  overflow: scroll;
  display: inline-block;
  border-top: 0.5px solid gray;
  border-bottom: 0.5px solid gray;
  padding: 10px 50px;
  margin-bottom: 10px;
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