<template>
  <div class="container">
    <h2>セットメニュー登録画面</h2>
    <div class="form">
      <form v-on:submit.prevent="add">
        <div class="name">
          <p>メニュー名</p>
          <input v-model="name">
        </div>
        <div class="price">
          <p>金　　　額</p>
          <input v-model="price">
        </div>
        <button>メニュー登録</button>
      </form>
    </div>
    <div class="otherList">
      <ul>
        <li v-for="other in others" :key="other.id">
          {{ other.name }}／{{ other.price }}円
          <button v-on:click="remove(other.id)">削除</button>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
  export default {
    data: function() {
      return {
        name: '',
        price: ''
      }
    },
    created: function() {
      this.$store.dispatch('others/init')
    },
    methods: {
      add() {
        this.$store.dispatch('others/add', [this.name, this.price])
        this.name = ''
        this.price = ''
      },
      remove(id) {
        this.$store.dispatch('others/remove', id)
      }
    },
    computed: {
      others() {
        return this.$store.getters['others/orderdOthers']
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

.container {
  padding: 30px;
}

.form {
  border-bottom: 1px solid gray;
}

.name, .price {
  display: flex;
  justify-content: left;
}

.name p, .price p {
  margin: 5px 20px 5px 0;
}

.name input, .price input {
  margin: 5px 20px 5px 0;
}

button {
  margin: 10px 0;
}
</style>