<script setup lang="ts">
let name = ref('')
onMounted(() => {
  name.value = localStorage.getItem('name')
})
</script>

<template>
<header class="header">
    <div class="container">
      <div class="header__inner">
        <div class="header__logo">
          <img src="@/assets/icons/logo.png" alt="">
        </div>
        <nav class="header__nav">
          <ul class="header__list">
            <li class="header__item">
              <nuxt-link to="/">Главная</nuxt-link>
            </li>
            <li class="header__item">
              <nuxt-link to="/game/add">Добавить игру</nuxt-link>
            </li>
            <li v-if="name" class="header__item">
              <p>{{ name }}</p>
            </li>
            <li v-else class="header__item">
              <nuxt-link to="/login">Войти</nuxt-link>
            </li>
          </ul>
        </nav>
      </div>
    </div>
</header>
</template>

<style scoped lang="scss">
.header {
  width: 100%;
  padding: 20px 0;
  position: fixed;
  background: #092635;
  z-index: 10;
  color: #fff;
  &__inner {
    display: flex;
    gap: 30px;
    align-items: center;
    justify-content: space-between;
  }

  &__logo {
  }

  &__nav {
  }

  &__list {
    display: flex;
    width: 50vw;
    gap: 20px;
    justify-content: space-between;
  }

  &__item {
    position: relative;
    &::before {
      content: '';
      position: absolute;
      bottom: 0;
      left: 0;
      width: 0;
      height: 2px;
      background-color: #fff;
      transition: all .3s ease;
    }
    &:hover {
      &::before {
        width: 100%;
      }
    }
  }
}
</style>