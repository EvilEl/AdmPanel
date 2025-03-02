import { ComponentPublicInstance } from "vue";

export function globalErrorHandler(
  err: unknown,
  instance: ComponentPublicInstance | null,
  info: string,
) {
  if (err instanceof Error) {
    console.log("error", err.message);
  }
  console.log("globalErrorHandler", err, instance, info);
}
