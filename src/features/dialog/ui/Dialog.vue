<script setup lang="ts">
import {
  VBtn,
  VCard,
  VCardActions,
  VCardText,
  VDialog,
  VSpacer,
} from 'vuetify/components'
import type { IPropsDialog } from './model'

withDefaults(defineProps<IPropsDialog>(), {
  options: () => ({
    width: 'auto',
    maxWidth: 500,
    minWidth: 500,
    title: 'Заголовок',
  }),
  isDialog: false,
})
const isDialog = defineModel('isDialog', {
  type: Boolean,

  default: false,
})
</script>

<template>
  <VDialog
    v-model="isDialog"
    :max-width="options.maxWidth"
    :min-width="options.minWidth"
    :width="options.width"
  >
    <template #default="{ isActive }">
      <VCard :title="options.title">
        <slot name="default">
          <VCardText>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </VCardText>
        </slot>

        <VCardActions>
          <slot name="buttons">
            <VSpacer />
            <VBtn
              text="Закрыть" @click="isActive.value = false"
            />
          </slot>
        </VCardActions>
      </VCard>
    </template>
  </VDialog>
</template>

<style scoped></style>
