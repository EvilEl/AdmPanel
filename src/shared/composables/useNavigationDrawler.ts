import { createGlobalState } from '@vueuse/core'
import { ref } from 'vue'

export const useNavigationDrawler = createGlobalState(() => {
  const isOpen = ref(false)

  return {
    isOpen,
  }
})
