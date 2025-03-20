import type { StatusTask } from './StatusTask'

type idTask = number | string
interface ITask {
  id: idTask
  title: string
  description: string
  status: keyof typeof StatusTask
}

interface ITaskPayload extends Pick<ITask, 'title' | 'description'> {}

export type { idTask, ITask, ITaskPayload }
