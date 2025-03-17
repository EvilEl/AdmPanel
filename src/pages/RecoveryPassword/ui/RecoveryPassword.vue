<script setup lang="ts">
import { VTextField, VBtn } from "vuetify/components";
import { useRecoveryPassword } from '../composables'

const {email,submit} = useRecoveryPassword()
</script>

<template>
  <form @submit.prevent="submit">
    <v-text-field
      v-model="email.value.value"
      color="primary"
      variant="underlined"
      :error-messages="email.errorMessage.value"
      label="Почта"
    />
    <v-btn
      class="me-4"
      type="submit"
    >
      Восстановить пароль
    </v-btn>
  </form>
</template>

<style scoped></style>
