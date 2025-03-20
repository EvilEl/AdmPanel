import { useTask } from '@/entities/task/model/useTask'
import { ref } from 'vue'
import type { ITask } from '@/entities/task/model'

export function useTaskDialog() {
  const isTaskDialog = ref<boolean>(false)
  const { selectedTask } = useTask()

  function openTaskDialog(task: ITask | null) {
    selectedTask.value = task
    isTaskDialog.value = true
  }
  function closeTaskDialog() {
    selectedTask.value = null
    isTaskDialog.value = false
  }

  return {
    isTaskDialog,
    openTaskDialog,
    closeTaskDialog,
  }
}
