import {  computed, ref,  } from "vue";
import { useTask } from "@/entities/task/model/useTask/useTask";
import {  useForm } from "vee-validate";
import { useTaskManagerDialog } from "@/pages/Task/model";
import { ITaskPayloadProps } from "../types";
import * as  yup from 'yup'
import { ITask } from "@/entities/task/model";


export function useTaskPayload(props: ITaskPayloadProps) {
  const valid = ref(false);

  const { addTask,editTask } = useTask();
  const { closeDialog } = useTaskManagerDialog();
  const { errors, defineField,submitForm } = useForm(
    {
      initialValues:{
        title:props.task?.title ?? '',
        description:props.task?.description ?? ''
      },
      initialErrors: {
        title: '',
        description: '',
      },
      validationSchema: yup.object({
        title: yup.string().required('Обязательно для заполнения'),
        description:yup.string().required('Обязательно для заполнения')
      }),
    }
  );
  const [title] =
  defineField('title')

  const [description] =
  defineField('description')


  const textBtn = computed<string>(()=> isTask(props.task) ? 'Редактировать': 'Создать')


  function isTask(task:ITask | null): task is ITask{
   return !!task
  }

  async function submit() {
    await  submitForm()
    const hasErrors = !!Object.keys(errors.value).length
    if (hasErrors) {
      return
    }
    if(isTask(props.task)){
      editTask({
        ...props.task,
        title: title.value,
        description: description.value,
      })
    }else{
      addTask({
        title: title.value,
        description: description.value,
      });
    }
    //TODO мб не нужно после добавления закрывать а просто сбросить поля
    closeDialog();
  }


  return {
    valid,
    title,
    description,
    textBtn,
    errors,
    submit,
  };
}


