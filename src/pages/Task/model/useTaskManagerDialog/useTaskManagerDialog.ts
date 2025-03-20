import { useTask } from '@/entities/task/model/useTask'
import { createGlobalState } from '@vueuse/core'
import { computed, ref } from 'vue'
import type { ITask } from '@/entities/task/model'

const useTaskManagerDialog = createGlobalState(() => {
  const isDialog = ref(false)
  const { selectedTask } = useTask()

  const titleModal = computed(() =>
    selectedTask.value ? 'Редактировать задачу' : 'Создать задачу',
  )

  function closeDialog() {
    selectedTask.value = null
    isDialog.value = false
  }

  function openDialog(task: ITask | null) {
    selectedTask.value = task
    isDialog.value = true
  }

  return {
    isDialog,
    titleModal,
    closeDialog,
    openDialog,
  }
})

export { useTaskManagerDialog }
