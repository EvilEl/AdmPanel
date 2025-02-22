import { computed, ref, watch } from "vue";
import { createGlobalState } from "@vueuse/core";
import { ITask, ITaskPayload, StatusTask, TaskDraggableAction } from "..";

export const useTask = createGlobalState(() => {
  const tasks = ref<ITask[]>([
    {
      title: "John",
      id: 1,
      description: "dasdasd",
      status: StatusTask["inProgress"],
    },
    {
      title: "Jean",
      id: 3,
      description: "dasdasd",
      status: StatusTask["inProgress"],
    },
  ]);

  const inProgressTasks = ref<ITask[]>([]);
  const completedTasks = ref<ITask[]>([]);

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

  function moveTask(e: TaskDraggableAction): void {
    if ("added" in e) {
      console.log(e.added);
    } else if ("moved" in e) {
      console.log(e.moved);
    } else {
      console.log(e.removed);
    }
  }

  return {
    tasks,
    inProgressTasks,
    completedTasks,
    countCompletedTasks,
    countInProgressTasks,
    countTask,
    addTask,
    moveTask,
  };
});
