<script setup lang="ts">
  import {ref }from 'vue'
  import { useField, useForm } from 'vee-validate'
  import {VTextField, VBtn} from  "vuetify/components";

  const { handleSubmit } = useForm({
    validationSchema: {
      firstName(value:string){
        if (value?.length >= 2) return true
        return 'Имя должно состоять не менее чем из 2 символов'
      },
      lastName(value:string){
        if (value?.length >= 2) return true
        return 'Фамилия должно состоять не менее чем из 2 символов.'
      },
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

  const password = useField('password')
  const email = useField('email')
  const firstName = useField('firstName')
  const lastName = useField('lastName')

  const show1 = ref(false)
  const submit = handleSubmit(values => {
    alert(JSON.stringify(values, null, 2))
  })
</script>

<template>
  <form @submit.prevent="submit">
    <v-text-field
      v-model="firstName.value.value"
      :error-messages="firstName.errorMessage.value"
      color="primary"
      label="Имя"
      variant="underlined"
    />

    <v-text-field
      v-model="lastName.value.value"
      :error-messages="lastName.errorMessage.value"
      color="primary"
      label="Фамилия"
      variant="underlined"
    />

    <v-text-field
      v-model="email.value.value"
      :error-messages="email.errorMessage.value"
      color="primary"
      label="Почта"
      variant="underlined"
    />

    <v-text-field
      v-model="password.value.value"
      :error-messages="password.errorMessage.value"
      color="primary"
      label="Пароль"
      variant="underlined"
      :append-inner-icon="show1 ? 'mdi-eye' : 'mdi-eye-off'"
      @click:append-inner="show1 = !show1"
    />

    <v-btn
      class="me-4"
      type="submit"
    >
      Регистрация
    </v-btn>
  </form>
</template>

<style scoped></style>
