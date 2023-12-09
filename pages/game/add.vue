<script setup lang="ts">
const data = ref({
  title: '',
  description: '',
})
let token = ref(0)
const router = useRouter()
onMounted(() => {
  token.value = localStorage.getItem('token')
  if (!token.value) {
    router.push('/login')
  }
  console.log(token.value)
})
async function addGame() {
  try {
    const { data: res } = await useFetch('/api/games/create', {
      method: 'post',
      body: data.value,
      user_id: 4,
    })
    if (res) {
      router.push('/')
    }
  } catch (error) {
    console.log(error)
  }
}
</script>

<template>
  <section class="game-add">
    <form @submit.prevent="addGame" class="login-form">
      <div class="login-form__wrapper">
        <p>Название игры: {{token}}</p>
        <label for="title" class="login-form__label">
          <input v-model="data.title" id="title" class="login-form__input"/>
        </label>
      </div>
      <div class="login-form__wrapper">
        <p>Описание игры:</p>
        <label for="desc" class="login-form__label">
          <textarea v-model="data.description" id="desc" class="login-form__input"/>
        </label>
      </div>
      <button class="login-form__btn">Создать</button>
    </form>
  </section>
</template>

<style scoped>
.game-add {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
}
.login {
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0;

  &-form {
    border-radius: 20px;
    padding: 20px;
    box-shadow: 10px 10px 20px rgba(0, 0, 0, 0.3);
    max-width: 500px;
    width: 100%;

    &__wrapper {
      display: flex;
      flex-direction: column;
      gap: 10px;
      margin-bottom: 20px;
      p {
        font-size: 20px;
      }
    }

    &__label {
      background: rgba(100, 100, 100, 0.1);
      padding: 10px;
      border-radius: 10px;
    }

    &__input {
      background: none;
      color: #000000;
      outline: none;
      width: 100%;
      &::placeholder {
        color: #000;
      }
    }

    &__btn {
      border-radius: 10px;
      padding: 10px;
      width: 100%;
      background: #092635;
      color: #fff;
    }

    &__link {
      color: #092635;
      text-align: center;
      cursor: pointer;
      text-decoration: underline;
      margin-top: 10px;
      width: 100%;
    }
  }
}
</style>