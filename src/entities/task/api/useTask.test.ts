import { beforeEach, describe, expect, test } from "vitest";
import useTask from "./useTask";
import { StatusTask } from "../model";
import { nextTick } from "vue";

describe("useTask", () => {
  let task: ReturnType<typeof useTask>;
  const payload = {
    title: "test",
    description: "test",
    id: 1,
    status: StatusTask["inProgress"],
  };

  beforeEach(() => {
    task = useTask();
    task.tasks.value = [];
    task.inProgressTasks.value = [];
    task.completedTasks.value = [];
  });

  test("computed count-task", () => {
    expect(task.countTask.value).toBe(0);
    task.tasks.value.push(payload);
    expect(task.countTask.value).toBe(1);
  });

  test("computed count-completed-tasks", () => {
    expect(task.countCompletedTasks.value).toBe(0);
    task.completedTasks.value.push(payload);
    expect(task.countCompletedTasks.value).toBe(1);
  });

  test("computed count-in-progress-tasks", () => {
    expect(task.countInProgressTasks.value).toBe(0);
    task.inProgressTasks.value.push(payload);
    expect(task.countInProgressTasks.value).toBe(1);
  });

  test("watch tasks", async () => {
    expect(task.tasks.value).toHaveLength(0);
    task.tasks.value.push(payload);
    await nextTick();
    expect(task.inProgressTasks.value).toHaveLength(1);
  });

  test("add-task", () => {
    expect(task.tasks.value).toHaveLength(0);
    const payload = {
      title: "test",
      description: "test",
    };
    task.addTask(payload);
    expect(task.inProgressTasks.value).toHaveLength(1);
  });
});
