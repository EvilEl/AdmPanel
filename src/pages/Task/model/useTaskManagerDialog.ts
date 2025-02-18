import { createGlobalState } from "@vueuse/core";
import { ref } from "vue";

const useTaskManagerDialog = createGlobalState(() => {
  const isDialog = ref(false);

  function closeDialog() {
    isDialog.value = false;
  }

  function openDialog() {
    isDialog.value = true;
  }

  return {
    isDialog,
    closeDialog,
    openDialog,
  };
});

export { useTaskManagerDialog };
