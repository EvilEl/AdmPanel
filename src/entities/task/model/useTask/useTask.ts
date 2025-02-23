import { computed, ref, watch } from "vue";
import { createGlobalState } from "@vueuse/core";
import { ITask, idTask, ITaskPayload, StatusTask, TaskDraggableAction } from "../../types/";

export const useTask = createGlobalState(() => {
  const tasks = ref<ITask[]>([
    {
      title: "John",
      id: 1,
      description: "description 1",
      status: StatusTask["inProgress"],
    },
    {
      title: "Jean",
      id: 2,
      description: "description 2",
      status: StatusTask["inProgress"],
    },
  ]);

  const inProgressTasks = ref<ITask[]>([]);
  const completedTasks = ref<ITask[]>([]);
  const selectedTask = ref<ITask | null>(null)

  watch(
    tasks,
    () => {
      inProgressTasks.value = tasks.value.filter(
        (task) => task.status === StatusTask["inProgress"]
      );
      completedTasks.value = tasks.value.filter(
        (task) => task.status === StatusTask["completed"]
      );
    },
    { immediate: true, deep: true }
  );

  const countTask = computed<number>(() => tasks.value.length);
  const countCompletedTasks = computed<number>(
    () => completedTasks.value.length
  );
  const countInProgressTasks = computed<number>(
    () => inProgressTasks.value.length
  );

  function addTask(data: ITaskPayload): void {
    const newTask = {
      ...data,
      id: Math.random() * 100 + 1000,
      status: StatusTask["inProgress"],
    };
    tasks.value.push(newTask);
  }

  function editTask(data: ITask) {
    const task = tasks.value.find((task) => task.id === data.id);
    if (!task) {
      throw new Error("not found task");
    }
    const oldTask = { ...task };
    try {
      // api updateTask
      Object.assign(task, data);
    } catch (err) {
      console.log(err);
      Object.assign(task, oldTask);
    }
  }


   function removeTask(id:idTask){
    const findTask = tasks.value.find(task=> task.id === id )
    if(!findTask){
      throw new Error("not found task");
    }
    tasks.value = tasks.value.filter(task=> task.id !== id )
   }


  function moveTask(e: TaskDraggableAction): void {
    if ("added" in e) {
      e.added.element['status'] = StatusTask.inProgress === e.added.element['status']
      ? StatusTask.completed
      : StatusTask.inProgress
    } else if ("moved" in e) {
      console.log('e.moved',e.moved);
    } else {
      console.log('e.removed',e.removed);
    }
  }


  return {
    tasks,
    inProgressTasks,
    completedTasks,
    countCompletedTasks,
    countInProgressTasks,
    countTask,
    selectedTask,
    removeTask,
    addTask,
    moveTask,
    editTask,
  };
});
