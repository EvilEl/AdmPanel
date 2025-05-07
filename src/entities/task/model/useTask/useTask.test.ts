import { useConfirm } from '@/shared/ui/confirm/composables/useConfirm'
import { beforeEach, describe, expect, it } from 'vitest'
import { nextTick } from 'vue'
import { StatusTask } from '../../types'
import { useTask } from './useTask'

describe('useTask', () => {
  let task: ReturnType<typeof useTask>
  const payload = {
    title: 'test',
    description: 'test',
    id: 1,
    status: StatusTask.inProgress,
    createdDate: new Date(),
  }

  beforeEach(() => {
    task = useTask()
    task.tasks.value = []
    task.inProgressTasks.value = []
    task.completedTasks.value = []
  })

  it('computed count-task', () => {
    expect(task.countTask.value).toBe(0)
    task.tasks.value.push(payload)
    expect(task.countTask.value).toBe(1)
  })

  it('computed count-completed-tasks', () => {
    expect(task.countCompletedTasks.value).toBe(0)
    task.completedTasks.value.push(payload)
    expect(task.countCompletedTasks.value).toBe(1)
  })

  it('computed count-in-progress-tasks', () => {
    expect(task.countInProgressTasks.value).toBe(0)
    task.inProgressTasks.value.push(payload)
    expect(task.countInProgressTasks.value).toBe(1)
  })

  it('watch tasks', async () => {
    expect(task.tasks.value).toHaveLength(0)
    task.tasks.value.push(payload)
    await nextTick()
    expect(task.inProgressTasks.value).toHaveLength(1)
  })

  it('on edit task', () => {
    task.tasks.value.push(payload)
    expect(task.tasks.value).toContainEqual(payload)
    const editPayload = {
      ...payload,
      description: 'edit',
    }
    task.editTask(editPayload)
    expect(task.tasks.value).toContainEqual(editPayload)
  })

  it('on remove task', async () => {
    const { handleConfirm } = useConfirm()
    task.tasks.value.push(payload)
    expect(task.tasks.value).toContainEqual(payload)
    task.removeTask(payload.id)
    handleConfirm()
    await nextTick()
    expect(task.tasks.value).not.toContainEqual(payload)
  })

  it('add-task', () => {
    expect(task.tasks.value).toHaveLength(0)
    const payload = {
      title: 'test',
      description: 'test',
    }
    task.addTask(payload)
    expect(task.tasks.value).toHaveLength(1)
  })
})
