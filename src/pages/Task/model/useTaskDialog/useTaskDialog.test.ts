import { beforeEach, describe, expect, it } from "vitest";
import { useTaskDialog } from "./useTaskDialog";
describe('useTaskDialog',()=>{
  beforeEach(()=>{
    const { closeTaskDialog } = useTaskDialog();
    closeTaskDialog()
  })

  it('open dialog',()=>{
    const { openTaskDialog,isTaskDialog } = useTaskDialog();
    expect(isTaskDialog.value).toBe(false)
    openTaskDialog(null)
    expect(isTaskDialog.value).toBe(true)

  })

  it('close dialog',()=>{
    const { closeTaskDialog,isTaskDialog,openTaskDialog } = useTaskDialog();
    openTaskDialog(null)
    expect(isTaskDialog.value).toBe(true)
    closeTaskDialog()
    expect(isTaskDialog.value).toBe(false)
  })
})
