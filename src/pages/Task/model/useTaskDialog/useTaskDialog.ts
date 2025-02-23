import { ref } from "vue"

export function useTaskDialog(){
  const isTaskDialog = ref<boolean>(false)

  function openTaskDialog(){
    isTaskDialog.value = true
  }
  function closeTaskDialog(){
    isTaskDialog.value = false
  }

  return {
    isTaskDialog,
    openTaskDialog,
    closeTaskDialog,
  }
}
