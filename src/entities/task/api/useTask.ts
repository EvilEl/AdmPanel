import { computed, ref } from "vue";
import { createGlobalState } from "@vueuse/core";
import { ITask, ITaskPayload, StatusTask } from "../model";

const useTask = createGlobalState(() => {
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

  // function removeTask() {}

  const inProgressTasks = computed(() =>
    tasks.value.filter((task) => task.status === StatusTask["inProgress"])
  );
  const completedTasks = computed(() =>
    tasks.value.filter((task) => task.status === StatusTask["completed"])
  );

  function addTask(data: ITaskPayload): void {
    //@TODO добавить api
    // const newTask = app.post() data
    const newTask = {
      ...data,
      id: Math.random() * 100 + 1000,
      status: StatusTask["inProgress"],
    };
    tasks.value.push(newTask);
  }

  return {
    tasks,
    inProgressTasks,
    completedTasks,
    addTask,
  };
});

export default useTask;
