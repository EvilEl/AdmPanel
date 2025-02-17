import { StatusTask } from "./StatusTask";

interface ITask {
  id: number | string;
  title: string;
  description: string;
  status: keyof typeof StatusTask;
}

interface ITaskPayload extends Pick<ITask, "title" | "description"> {}

export type { ITask, ITaskPayload };
