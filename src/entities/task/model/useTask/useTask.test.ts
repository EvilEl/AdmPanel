import { beforeEach, describe, expect, it } from "vitest";
import { useTask } from "./useTask";
import { ITask, StatusTask } from "..";
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

  it("computed count-task", () => {
    expect(task.countTask.value).toBe(0);
    task.tasks.value.push(payload);
    expect(task.countTask.value).toBe(1);
  });

  it("computed count-completed-tasks", () => {
    expect(task.countCompletedTasks.value).toBe(0);
    task.completedTasks.value.push(payload);
    expect(task.countCompletedTasks.value).toBe(1);
  });

  it("computed count-in-progress-tasks", () => {
    expect(task.countInProgressTasks.value).toBe(0);
    task.inProgressTasks.value.push(payload);
    expect(task.countInProgressTasks.value).toBe(1);
  });

  it("watch tasks", async () => {
    expect(task.tasks.value).toHaveLength(0);
    task.tasks.value.push(payload);
    await nextTick();
    expect(task.inProgressTasks.value).toHaveLength(1);
  });

  it('on edit task',()=>{
    const payload:ITask  = {
      'title':'Task',
      'description':'desc',
      'id':1,
      'status':'completed'
    }
    task.tasks.value.push(payload)
    expect(task.tasks.value).toContainEqual(payload)
    const editPayload = {
      ...payload,
      'description':'edit'
    }
    task.editTask(editPayload)
    expect(task.tasks.value).toContainEqual(editPayload)

  })

  it("add-task", () => {
    expect(task.tasks.value).toHaveLength(0);
    const payload = {
      title: "test",
      description: "test",
    };
    task.addTask(payload);
    expect(task.tasks.value).toHaveLength(1);
  });
});
