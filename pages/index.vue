<template>
  <div class="container">
    <div>
      <logo />
      <h1 class="title">
        cafe-gokko-light
      </h1>
      <h2 class="subtitle">
        My amazing Nuxt.js project
      </h2>
      <div class="links">
        <a
          href="http://localhost:55334/menu"
          target="_blank"
          class="button--green"
        >
          注文画面
        </a>
        <a
          href="http://localhost:55334/drinkRegistration"
          target="_blank"
          class="button--grey"
        >
          ドリンクメニュー登録
        </a>
        <a
          href="http://localhost:55334/foodRegistration"
          target="_blank"
          class="button--grey"
        >
          フードメニュー登録
        </a>
        <a
          href="http://localhost:55334/otherRegistration"
          target="_blank"
          class="button--grey"
        >
          セットメニュー登録
        </a>
      </div>
    </div>
  </div>
</template>

<script>
import Logo from '~/components/Logo.vue'

export default {
  components: {
    Logo
  }
}
</script>

<style>
.container {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.title {
  font-family: 'Quicksand', 'Source Sans Pro', -apple-system, BlinkMacSystemFont,
    'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
}
</style>
