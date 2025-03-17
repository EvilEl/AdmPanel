import { useField, useForm } from "vee-validate";

export function useRecoveryPassword() {
  const { handleSubmit } = useForm({
    validationSchema: {
      email(value: string) {
        if (/^[a-z.-]+@[a-z.-]+\.[a-z]+$/i.test(value)) return true;
        return "Должен быть действительный адрес электронной почты.";
      },
    },
  });

  const email = useField("email");


  const submit = handleSubmit((values) => {
    alert(JSON.stringify(values, null, 2));
  });


  return {
    email,
    submit
  }
}
