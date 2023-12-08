<script setup lang="ts">

</script>

<template>
  <section class="game-add">
    <form class="game-add__form">
      <label for="game-title">Название игры:</label>
      <input type="text" id="game-title" name="game-title" required>

      <label for="game-description">Описание игры:</label>
      <textarea id="game-description" name="game-description" rows="4" required></textarea>

      <button type="submit">Добавить игру</button>
    </form>
  </section>
</template>

<style scoped>

</style>