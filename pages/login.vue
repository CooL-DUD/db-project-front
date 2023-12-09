<script setup lang="ts">
const router = useRouter()
const login = ref(true)
definePageMeta({
  layout: 'custom',
})
const data = ref({
  name: '',
  surname: '',
  email: '',
  password: '',
})
async function register() {
  try {
    const { data: res } = await useFetch('/api/user/create', {
      method: 'post',
      body: data.value,
    })
    if (res) {
      console.log(res)
      await localStorage.setItem('name', data.value.name)
      await localStorage.setItem('token', res.token)
      router.push('/')
    }
  } catch (error) {
    console.log(error)
  }
}
async function auth() {
  try {
    const { data: res } = await useFetch('/api/auth', {
      method: 'post',
      body: data.value,
    })
    if (res) {
      localStorage.setItem('name', res.value.body.name)
      localStorage.setItem('token', res.value.body.token)
      router.push('/')
    }
  } catch (error) {
    console.log(error)
  }
}
</script>

<template>
  <section class="login">
    <form v-if="login" @submit.prevent="auth" class="login-form">
      <div class="login-form__wrapper">
        <p>Введите свою почту</p>
        <label for="email" class="login-form__label">
          <input v-model="data.email" type="email" id="email" class="login-form__input" placeholder="example@gmail.com"/>
        </label>
      </div>
      <div class="login-form__wrapper">
        <p>Введите пароль</p>
        <label for="password" class="login-form__label">
          <input v-model="data.password" type="password" id="password" class="login-form__input" placeholder="Введите пароль"/>
        </label>
      </div>
      <button class="login-form__btn">Войти</button>
      <p @click="login = false" class="login-form__link">Зарегистрироваться</p>
    </form>
    <form v-else @submit.prevent="register" class="login-form">
      <div class="login-form__wrapper">
        <p>Введите свое имя</p>
        <label for="name" class="login-form__label">
          <input v-model="data.name" type="text" id="name" class="login-form__input" placeholder="Имя"/>
        </label>
      </div>
      <div class="login-form__wrapper">
        <p>Введите свою фамилию</p>
        <label for="surname" class="login-form__label">
          <input v-model="data.surname" type="text" id="surname" class="login-form__input" placeholder="Фамилия"/>
        </label>
      </div>
      <div class="login-form__wrapper">
        <p>Введите свою почту</p>
        <label for="email" class="login-form__label">
          <input v-model="data.email" type="email" id="email" class="login-form__input" placeholder="example@gmail.com"/>
        </label>
      </div>
      <div class="login-form__wrapper">
        <p>Придумайте пароль</p>
        <label for="password" class="login-form__label">
          <input v-model="data.password" type="password" id="password" class="login-form__input" placeholder="Новый пароль"/>
        </label>
      </div>
      <div class="login-form__wrapper">
        <p>Повторите пароль</p>
        <label for="confirm" class="login-form__label">
          <input type="password" id="confirm" class="login-form__input" placeholder="Повторите пароль"/>
        </label>
      </div>
      <button class="login-form__btn">Зарегистрироваться</button>
      <p @click="login = true" class="login-form__link">Войти</p>
    </form>
  </section>
</template>

<style lang="scss">
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