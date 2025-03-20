<script setup lang="ts">
import { RoutesName } from '@/shared/constants'
import { VBtn, VTextField } from 'vuetify/components'
import { useLogin } from '../composables'

const { password, email, show1, submit } = useLogin()
</script>

<template>
  <form @submit.prevent="submit">
    <div class="d-flex align-center justify-end">
      <router-link :to="{ name: RoutesName.PASSWORD_RECOVERY }">
        <a class="text-caption text-decoration-none text-blue">
          Забыли пароль?</a>
      </router-link>
    </div>
    <VTextField
      v-model="password.value.value"
      :append-inner-icon="show1 ? 'mdi-eye' : 'mdi-eye-off'"
      :type="show1 ? 'text' : 'password'"
      :error-messages="password.errorMessage.value"
      label="Пароль"
      color="primary"
      variant="underlined"
      @click:append-inner="show1 = !show1"
    />

    <VTextField
      v-model="email.value.value"
      color="primary"
      variant="underlined"
      :error-messages="email.errorMessage.value"
      label="Почта"
    />

    <VBtn class="me-4" type="submit">
      Войти
    </VBtn>
  </form>
</template>

<style scoped></style>
