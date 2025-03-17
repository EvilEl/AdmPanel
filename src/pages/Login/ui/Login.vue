<script setup lang="ts">
  import {ref }from 'vue'
  import { useField, useForm } from 'vee-validate'
  import {VTextField, VBtn} from  "vuetify/components";

  const { handleSubmit } = useForm({
    validationSchema: {
      password (value) {
        if (value?.length >= 2) return true
        return 'Name needs to be at least 2 characters.'
      },
      email (value) {
        if (/^[a-z.-]+@[a-z.-]+\.[a-z]+$/i.test(value)) return true

        return 'Must be a valid e-mail.'
      },
    },
  })

  const password = useField('password')
  const email = useField('email')
  const show1 = ref(false)
  const submit = handleSubmit(values => {
    alert(JSON.stringify(values, null, 2))
  })
</script>

<template>
  <form @submit.prevent="submit">
    <v-text-field
      v-model="password.value.value"
      :append-inner-icon="show1 ? 'mdi-eye' : 'mdi-eye-off'"
      :type="show1 ? 'text' : 'password'"
      :error-messages="password.errorMessage.value"
      name="input-10-1"
      label="Пароль"
      @click:append-inner="show1 = !show1"
    />

    <v-text-field
      v-model="email.value.value"
      :error-messages="email.errorMessage.value"
      label="Почта"
    />

    <v-btn
      class="me-4"
      type="submit"
    >
      Войти
    </v-btn>
  </form>
</template>

<style scoped></style>
