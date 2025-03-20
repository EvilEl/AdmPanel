<script setup lang="ts">
import { VBtn, VTextField } from 'vuetify/components'
import { useRecoveryPassword } from '../composables'

const { email, submit } = useRecoveryPassword()
</script>

<template>
  <form @submit.prevent="submit">
    <VTextField
      v-model="email.value.value"
      color="primary"
      variant="underlined"
      :error-messages="email.errorMessage.value"
      label="Почта"
    />
    <VBtn class="me-4" type="submit">
      Восстановить пароль
    </VBtn>
  </form>
</template>

<style scoped></style>
