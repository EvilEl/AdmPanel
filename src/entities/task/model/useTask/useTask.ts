import { useConfirm } from '@/shared/ui/confirm/composables/useConfirm'
import { createGlobalState } from '@vueuse/core'
import { computed, ref, watch } from 'vue'
import { StatusTask } from '../../types/'
import type {
  idTask,
  ITask,
  ITaskPayload,
  TaskDraggableAction,
} from '../../types/'

export const useTask = createGlobalState(() => {
  const { open } = useConfirm()

  const tasks = ref<ITask[]>([
    {
      title: 'John',
      id: 1,
      description: 'description 1',
      status: StatusTask.inProgress,
      createdDate: new Date(),
    },
    {
      title: 'Jean',
      id: 2,
      description: 'description 2',
      status: StatusTask.inProgress,
      createdDate: new Date(),
    },
  ])

  const inProgressTasks = ref<ITask[]>([])
  const completedTasks = ref<ITask[]>([])
  const selectedTask = ref<ITask | null>(null)
  const searchValue = ref<string>('')

  const foundedTasks = computed(() => tasks.value.filter(task => searchValue.value ? task.title.toLowerCase().includes(searchValue.value.toLowerCase()) : task))
  const countTask = computed<number>(() => tasks.value.length)
  const countCompletedTasks = computed<number>(
    () => completedTasks.value.length,
  )
  const countInProgressTasks = computed<number>(
    () => inProgressTasks.value.length,
  )

  watch(
    [tasks, searchValue],
    () => {
      inProgressTasks.value = foundedTasks.value.filter(
        task => task.status === StatusTask.inProgress,
      )
      completedTasks.value = foundedTasks.value.filter(
        task => task.status === StatusTask.completed,
      )
    },
    { immediate: true, deep: true },
  )

  function addTask(data: ITaskPayload): void {
    const newTask = {
      ...data,
      id: Math.random() * 100 + 1000,
      status: StatusTask.inProgress,
      createdDate: new Date(),
    }
    tasks.value.push(newTask)
  }

  function editTask(data: ITask) {
    const task = tasks.value.find(task => task.id === data.id)
    if (!task) {
      throw new Error('not found task')
    }
    const oldTask = { ...task }
    try {
      Object.assign(task, data)
    } catch (err) {
      console.log(err)
      Object.assign(task, oldTask)
    }
  }

  async function removeTask(id: idTask) {
    const res = await open({
      title: 'Удалить задачу',
      message: 'Вы точно решили удалить задачу?',
    })
    if (!res)
      return
    const findTask = tasks.value.find(task => task.id === id)
    if (!findTask) {
      throw new Error('not found task')
    }
    tasks.value = tasks.value.filter(task => task.id !== findTask.id)
  }

  function moveTask(e: TaskDraggableAction): void {
    if ('added' in e) {
      e.added.element.status
        = StatusTask.inProgress === e.added.element.status
          ? StatusTask.completed
          : StatusTask.inProgress
    } else if ('moved' in e) {
      console.log('e.moved', e.moved)
    } else {
      console.log('e.removed', e.removed)
    }
  }

  function removeCompletedTasks() {
    tasks.value = tasks.value.filter(item => item.status !== StatusTask.completed)
  }

  return {
    tasks,
    searchValue,
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
    removeCompletedTasks,
  }
})
