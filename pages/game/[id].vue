<script setup lang="ts">

</script>

<template>
  <section class="game">
    <div class="game-info">
      <div class="game-info__img">
        <img src="@/assets/img/game-main.png" alt="">
      </div>
      <div class="container">
        <h1 class="game-info__title">Hyper Light Drifter</h1>
        <p class="game-info__rating">Рейтинг: 9,6</p>
        <p class="game-info__desc">Отголоски темного и жестокого прошлого звучат по всей дикой земле, пропитанной
          сокровищами и кровью. Hyper Light Drifter - приключенческая RPG в духе лучшей 16-битной классики, с
          модернизированной механикой и дизайном в гораздо большем масштабе.

          Бродяги этого мира - собиратели забытых знаний, утерянных технологий и разрушенных историй. Нашего Бродягу
          преследует неутолимая болезнь, и он путешествует все дальше в земли Погребенного Времени, надеясь найти способ
          успокоить порочную болезнь.

          • От каждого персонажа до едва заметных фоновых элементов - все с любовью анимировано вручную.
          • Легко подобрать, трудно освоить; враги злобны и многочисленны, опасности легко раздавят ваше хрупкое тело, а
          дружелюбные лица остаются редкостью.
          • Улучшайте оружие, изучайте новые навыки, открывайте снаряжение и путешествуйте по темному, детализированному
          миру с множеством разветвленных путей и секретов.</p>
      </div>
    </div>
    <div class="game-gallery">

    </div>
  </section>
</template>

<style scoped lang="scss">
.game {
  &-info {
    &__img {
      width: 100%;
      max-height: 500px;
      overflow: hidden;
      display: flex;
      align-items: center;
      justify-content: center;
    }

    &__title {
      font-size: 24px;
      font-weight: 700;
      margin: 20px 0;
    }

    &__rating {
      font-size: 20px;
      font-weight: 700;
    }

    &__desc {
      margin: 20px 0;
    }
  }

  &-gallery {
  }
}
</style>