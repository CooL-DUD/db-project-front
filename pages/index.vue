<script setup>
const games = ref([
  {
    title: 'Hyper Light Drifter',
    desc: 'Игра в жанре экшн RPG с красивым пиксельным стилем.',
    img: '@/assets/img/game-main.png',
  },
  {
    title: 'The Witcher 3: Wild Hunt',
    desc: 'Открытый мир, фэнтезийная вселенная, монстры и приключения.',
    img: '@/assets/img/witcher3-main.png',
  },
  {
    title: 'Stardew Valley',
    desc: 'Фермерский симулятор с возможностью развития и общения с персонажами.',
    img: '@/assets/img/stardewvalley-main.png',
  },
  {
    title: 'Celeste',
    desc: 'Платформер с красивым сюжетом и музыкой.',
    img: '@/assets/img/celeste-main.png',
  },
  {
    title: 'Rocket League',
    desc: 'Футбол с автомобилями, веселая и динамичная игра.',
    img: '@/assets/img/rocketleague-main.png',
  },
  {
    title: 'Assassin\'s Creed: Odyssey',
    desc: 'Эпическое приключение в древней Греции, полное сражений и загадок.',
    img: '@/assets/img/acodyssey-main.png',
  },
  {
    title: 'Minecraft',
    desc: 'Строительство и выживание в блочном мире.',
    img: '@/assets/img/minecraft-main.png',
  },
  {
    title: 'Red Dead Redemption 2',
    desc: 'Ковбойская эпопея в открытом мире с потрясающей графикой.',
    img: '@/assets/img/rdr2-main.png',
  },
  {
    title: 'Overwatch',
    desc: 'Командный шутер с уникальными героями и яркими боями.',
    img: '@/assets/img/overwatch-main.png',
  },
  {
    title: 'The Legend of Zelda: Breath of the Wild',
    desc: 'Путешествие в открытом мире с приключениями и головоломками.',
    img: '@/assets/img/zelda-main.png',
  },
]
)
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
          <p class="games-item__desc">{{ item.desc }}</p>
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