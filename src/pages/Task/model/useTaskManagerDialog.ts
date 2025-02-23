import { ITask } from "@/entities/task/model";
import { useTask } from "@/entities/task/model/useTask";
import { createGlobalState } from "@vueuse/core";
import { ref } from "vue";

const useTaskManagerDialog = createGlobalState(() => {
  const isDialog = ref(false);
  const { selectedTask } = useTask()

  function closeDialog() {
    isDialog.value = false;
  }

  function openDialog(task:ITask | null) {
    selectedTask.value = task
    isDialog.value = true;
  }

  return {
    isDialog,
    closeDialog,
    openDialog,
  };
});

export { useTaskManagerDialog };
