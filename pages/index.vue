<script setup>
const { data: games } = await useFetch('/api/games/get')
</script>

<template>
  <section class="games">
    <div class="games-list">
      <nuxt-link to="/game/id" v-for="item in games" class="games-item">
        <div class="games-item__img">
          <img src="@/assets/img/game-main.png" alt="Hyper Light Drifter">
        </div>
        <div class="games-item__text">
          <div>
            <p class="games-item__title">{{ item.title }}</p>
            <p class="games-item__rating">Рейтинг: 9,6</p>
          </div>
          <p class="games-item__desc">{{ item.description }}</p>
        </div>
      </nuxt-link>
    </div>
  </section>
</template>

<style scoped lang="scss">
.games {
  &-list {
  }

  &-item {
    padding: 20px;
    display: flex;
    gap: 20px;
    &__img {
      max-width: 200px;
      max-height: 200px;
      overflow: hidden;
      border-radius: 15px;
      display: flex;
      align-items: center;
      justify-content: center;
    }

    &__title {
      font-size: 20px;
      font-weight: 700;
      position: relative;
      &::before {
        content: '';
        position: absolute;
        bottom: 0;
        left: 0;
        width: 0;
        height: 2px;
        background-color: #000;
        transition: all .3s ease;
      }
    }

    &__text {
      padding: 10px 0;
      width: 100%;
      div {
        display: flex;
        justify-content: space-between;
        gap: 30px;
      }
    }
    &:hover {
      ::before {
        width: 100%;
      }
    }
  }
}
</style>