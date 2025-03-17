<script setup lang="ts">
  import { useField, useForm } from 'vee-validate'
  import {VTextField, VBtn} from  "vuetify/components";

  const { handleSubmit } = useForm({
    validationSchema: {
      password (value:string) {
        if (value?.length >= 2) return true
        return 'Пароль должно состоять не менее чем из 2 символов.'
      },
      email (value:string) {
        if (/^[a-z.-]+@[a-z.-]+\.[a-z]+$/i.test(value)) return true
        return 'Должен быть действительный адрес электронной почты.'
      },
    },
  })

  const email = useField('email')
  const submit = handleSubmit(values => {
    alert(JSON.stringify(values, null, 2))
  })
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
