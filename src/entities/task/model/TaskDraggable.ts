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
    status: "";
  };
};

type TaskDraggableMoved = Record<
  operationDraggable.removed,
  TaskDraggable & {
    newIndex: number;
    oldIndex: number;
  }
>;

type TaskDraggableAdded = Record<
  operationDraggable.added,
  Omit<TaskDraggableMoved, "oldIndex">
>;
type TaskDraggableRemoved = Record<
  operationDraggable.moved,
  Omit<TaskDraggableMoved, "newIndex">
>;

type TaskDraggableAction =
  | TaskDraggableMoved
  | TaskDraggableAdded
  | TaskDraggableRemoved;

export type { TaskDraggableAction };
