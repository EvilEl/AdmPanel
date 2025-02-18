import useTask from "@/entities/task/api/useTask";
import { useField, useForm } from "vee-validate";
import { ref } from "vue";
import { useTaskManagerDialog } from "@/pages/Task/model";

export function useTaskPayload() {
  const valid = ref(false);

  const { addTask } = useTask();
  const { closeDialog } = useTaskManagerDialog();
  const { handleSubmit } = useForm();
  const { value: title, errorMessage: errorMessageTitle } =
    useField<string>("title");
  const { value: description, errorMessage: errorMessageDescription } =
    useField<string>("description");

  function submit() {
    //TODO не работает handleSubmit из за того что используется schema разобраться почему
    handleSubmit((values) => {
      console.log("values", values);
    });

    addTask({
      title: title.value,
      description: description.value,
    });

    //TODO мб не нужно после добавления закрывать а просто сбросить поля
    closeDialog();
  }

  return {
    valid,
    title,
    description,
    errorMessageTitle,
    errorMessageDescription,
    submit,
  };
}
