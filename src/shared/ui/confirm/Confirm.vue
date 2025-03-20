<script setup lang="ts">
import Dialog from '@/features/dialog'
import { VBtn, VCardActions, VCardText, VSpacer } from 'vuetify/components'
import { useConfirm } from './composables/useConfirm'

const { isVisible, title, msg, handleCancel, handleConfirm } = useConfirm()
</script>

<template>
  <Dialog
    v-model:is-dialog="isVisible"
    :options="{
      title,
    }"

    max-width="25rem"
  >
    <VCardText>
      <VCardText>{{ msg }}</VCardText>
    </VCardText>
    <template #buttons>
      <VCardActions>
        <VSpacer />
        <VBtn color="grey" @click="handleCancel">
          Отмена
        </VBtn>
        <VBtn color="primary" @click="handleConfirm">
          ОК
        </VBtn>
      </VCardActions>
    </template>
  </Dialog>
</template>
