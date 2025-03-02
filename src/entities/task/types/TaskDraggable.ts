import { StatusTask } from "./StatusTask";

enum operationDraggable {
  "added" = "added",
  "removed" = "removed",
  "moved" = "moved",
}

type TaskDraggable = {
  element: {
    title: string;
    id: number;
    description: string;
    status: StatusTask;
  };
  newIndex: number;
  oldIndex: number;
};

type TaskDraggableMoved = Record<operationDraggable.moved, TaskDraggable>;

type TaskDraggableAdded = Record<
  operationDraggable.added,
  Omit<TaskDraggable, "oldIndex">
>;
type TaskDraggableRemoved = Record<
  operationDraggable.removed,
  Omit<TaskDraggable, "newIndex">
>;

type TaskDraggableAction =
  | TaskDraggableMoved
  | TaskDraggableAdded
  | TaskDraggableRemoved;

export type { TaskDraggableAction };
