import { describe, expect, test, beforeEach } from "vitest";
import { useTaskManagerDialog } from "./useTaskManagerDialog";

describe("task-manager-dialog", () => {
  beforeEach(() => {
    // Гарантируем сброс состояния перед каждым тестом
    const { closeDialog } = useTaskManagerDialog();
    closeDialog();
  });

  test("open dialog", () => {
    const { isDialog, openDialog } = useTaskManagerDialog();
    openDialog();
    expect(isDialog.value).toBe(true);
  });

  test("close dialog", () => {
    const { isDialog, closeDialog } = useTaskManagerDialog();
    isDialog.value = true;
    closeDialog();
    expect(isDialog.value).toBe(false);
  });
});
