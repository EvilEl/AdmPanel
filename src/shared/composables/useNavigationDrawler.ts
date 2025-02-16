import { ref } from "vue";
import { createGlobalState } from "@vueuse/core";

export const useNavigationDrawler = createGlobalState(() => {
  const isOpen = ref(false);

  return {
    isOpen,
  };
});
