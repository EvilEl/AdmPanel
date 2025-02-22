import { useTask } from "@/entities/task/model/useTask/useTask";
import {  useForm } from "vee-validate";
import {  ref,  } from "vue";
import { useTaskManagerDialog } from "@/pages/Task/model";
import { ITaskPayloadProps } from "../types";
import * as  yup from 'yup'


export function useTaskPayload(props: ITaskPayloadProps) {
  const valid = ref(false);

  const { addTask } = useTask();
  const { closeDialog } = useTaskManagerDialog();
  const { errors, defineField,submitForm } = useForm(
    {
      initialValues:{
        title:props.task.title,
        description:props.task.description
      },
      validationSchema: yup.object({
        title: yup.string().required(),
        description:yup.string().required()
      }),
    }
  );
  const [title] =
  defineField('title')

  const [description] =
  defineField('description')


  async function submit() {
    //TODO не работает handleSubmit из за того что используется schema разобраться почему
     await  submitForm()
     const hasErrors = !!Object.keys(errors.value).length
    if(hasErrors){
      return
    }

    addTask({
      title: title.value,
      description: description.value,
    });

  //   //TODO мб не нужно после добавления закрывать а просто сбросить поля
    closeDialog();
  }


  return {
    valid,
    title,
    description,
    errors,
    submit,
  };
}


