import { beforeEach, describe, expect, it } from 'vitest'
import { useTaskManagerDialog } from './useTaskManagerDialog'

describe('task-manager-dialog', () => {
  beforeEach(() => {
    // Гарантируем сброс состояния перед каждым тестом
    const { closeDialog } = useTaskManagerDialog()
    closeDialog()
  })

  it('open dialog', () => {
    const { isDialog, openDialog } = useTaskManagerDialog()
    openDialog(null)
    expect(isDialog.value).toBe(true)
  })

  it('title modal not selected task', () => {
    const { titleModal, openDialog } = useTaskManagerDialog()
    openDialog(null)
    expect(titleModal.value).toBe('Создать задачу')
  })

  it('title modal selected task', () => {
    const { titleModal, openDialog } = useTaskManagerDialog()
    openDialog({
      description: 'desc',
      id: 1,
      status: 'completed',
      title: 'title',
    })
    expect(titleModal.value).toBe('Редактировать задачу')
  })

  it('close dialog', () => {
    const { isDialog, closeDialog } = useTaskManagerDialog()
    isDialog.value = true
    closeDialog()
    expect(isDialog.value).toBe(false)
  })
})
