<script setup lang="ts">
import type { IPropsDialog } from "./model";
import {
  VDialog,
  VBtn,
  VCard,
  VSpacer,
  VCardText,
  VCardActions,
} from "vuetify/components";

withDefaults(defineProps<IPropsDialog>(), {
  options: () => ({
    width: "auto",
    maxWidth: 500,
    minWidth: 500,
    title: "Заголовок",
  }),
  isDialog: false,
});
const isDialog = defineModel("isDialog", {
  type: Boolean,
  default: false,
});
</script>

<template>
  <v-dialog
    v-model="isDialog"
    :max-width="options.maxWidth"
    :min-width="options.minWidth"
    :width="options.width"
  >
    <template #default="{ isActive }">
      <v-card :title="options.title">
        <slot name="default">
          <v-card-text>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </v-card-text>
        </slot>

        <v-card-actions>
          <slot name="buttons">
            <v-spacer />
            <v-btn
              text="Закрыть"
              @click="isActive.value = false"
            />
          </slot>
        </v-card-actions>
      </v-card>
    </template>
  </v-dialog>
</template>

<style scoped></style>
