import { createGlobalState } from '@vueuse/core'
import { ref } from 'vue'

export const useConfirm = createGlobalState(() => {
  let resolver: ((value: boolean | PromiseLike<boolean>) => void) | null = null

  const isVisible = ref(false)
  const title = ref('')
  const msg = ref('')

  function handleCancel() {
    if (resolver) {
      resolver(false)
    }
    isVisible.value = false
  }

  function handleConfirm() {
    if (resolver) {
      resolver(true)
    }
    isVisible.value = false
  }

  function open({ title: t, message }): Promise<boolean> {
    title.value = t
    msg.value = message
    return new Promise<boolean>((resolve) => {
      isVisible.value = true
      resolver = resolve
    })
  }

  return {
    handleCancel,
    handleConfirm,
    open,
    msg,
    isVisible,
    title,
  }
})
