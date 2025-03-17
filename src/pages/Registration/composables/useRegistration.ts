import { ref } from "vue";
import { useField, useForm } from "vee-validate";

export function useRegistration() {
  const { handleSubmit } = useForm({
    validationSchema: {
      firstName(value: string) {
        if (value?.length >= 2) return true;
        return "Имя должно состоять не менее чем из 2 символов";
      },
      lastName(value: string) {
        if (value?.length >= 2) return true;
        return "Фамилия должно состоять не менее чем из 2 символов.";
      },
      password(value: string) {
        if (value?.length >= 2) return true;
        return "Пароль должно состоять не менее чем из 2 символов.";
      },
      email(value: string) {
        if (/^[a-z.-]+@[a-z.-]+\.[a-z]+$/i.test(value)) return true;
        return "Должен быть действительный адрес электронной почты.";
      },
    },
  });

  const password = useField("password");
  const email = useField("email");
  const firstName = useField("firstName");
  const lastName = useField("lastName");

  const show1 = ref(false);
  const submit = handleSubmit((values) => {
    alert(JSON.stringify(values, null, 2));
  });

  return {
    password,
    email,
    firstName,
    lastName,
    show1,
    submit,
  };
}
