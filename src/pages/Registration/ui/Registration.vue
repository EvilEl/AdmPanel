<script setup lang="ts">
import { VBtn, VTextField } from 'vuetify/components'
import { useRegistration } from '../composables'

const { password, email, firstName, lastName, show1, submit }
  = useRegistration()
</script>

<template>
  <form @submit.prevent="submit">
    <VTextField
      v-model="firstName.value.value"
      :error-messages="firstName.errorMessage.value"
      color="primary"
      label="Имя"
      variant="underlined"
    />

    <VTextField
      v-model="lastName.value.value"
      :error-messages="lastName.errorMessage.value"
      color="primary"
      label="Фамилия"
      variant="underlined"
    />

    <VTextField
      v-model="email.value.value"
      :error-messages="email.errorMessage.value"
      color="primary"
      label="Почта"
      variant="underlined"
    />

    <VTextField
      v-model="password.value.value"
      :error-messages="password.errorMessage.value"
      color="primary"
      label="Пароль"
      variant="underlined"
      :append-inner-icon="show1 ? 'mdi-eye' : 'mdi-eye-off'"
      @click:append-inner="show1 = !show1"
    />

    <VBtn class="me-4" type="submit">
      Регистрация
    </VBtn>
  </form>
</template>

<style scoped></style>
