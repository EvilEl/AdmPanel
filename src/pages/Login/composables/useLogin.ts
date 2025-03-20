import { useField, useForm } from 'vee-validate'
import { ref } from 'vue'

export function useLogin() {
  const { handleSubmit } = useForm({
    validationSchema: {
      password(value: string) {
        if (value?.length >= 2)
          return true
        return 'Пароль должно состоять не менее чем из 2 символов.'
      },
      email(value: string) {
        if (/^[a-z.-]+@[a-z.-]+\.[a-z]+$/i.test(value))
          return true
        return 'Должен быть действительный адрес электронной почты.'
      },
    },
  })

  const password = useField('password')
  const email = useField('email')
  const show1 = ref(false)
  const submit = handleSubmit((values) => {
    alert(JSON.stringify(values, null, 2))
  })

  return {
    password,
    email,
    show1,
    submit,
  }
}
