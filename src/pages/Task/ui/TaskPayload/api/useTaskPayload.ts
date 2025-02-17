import { useField, useForm } from "vee-validate";
import { ref } from "vue";

export function useTaskPayload() {
  const valid = ref(false);

  const title = useField("title");
  const description = useField("title");

  const { handleSubmit } = useForm({
    validationSchema: {
      title(value: string) {
        if (value?.length >= 2) return true;

        return "Больше 2 символов";
      },
      description(value: string) {
        if (value?.length >= 2) return true;
        return "Больше 2 символов";
      },
    },
  });

  function submit() {
    handleSubmit((values) => {
      console.log(values);
    });
  }

  return {
    valid,
    title,
    description,
    submit,
  };
}
