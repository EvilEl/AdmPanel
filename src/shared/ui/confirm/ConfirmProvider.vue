<script setup lang="ts">
import Dialog from "@/features/dialog";
import { VCardText, VCardActions, VSpacer, VBtn } from "vuetify/components";
import { ref } from "vue";

let resolver: ((value: boolean | PromiseLike<boolean>) => void) | null = null;

const isVisible = ref(false);
const title = ref("");
const msg = ref("");

function handleCancel() {
  if (resolver) {
    resolver(false);
  }
  isVisible.value = false;
}

function handleConfirm() {
  if (resolver) {
    resolver(true);
  }
  isVisible.value = false;
}

function open({ title: t, message }): Promise<boolean> {
  title.value = t;
  msg.value = message;

  return new Promise<boolean>((resolve) => {
    isVisible.value = true;
    resolver = resolve;
  });
}

defineExpose({ open });
</script>

<template>
  <slot />
  <Dialog
    v-model:is-dialog="isVisible"
    :options="{
      title: title,
    }"
    max-width="25rem"
  >
    <v-card-text>
      <v-card-text>{{ msg }}</v-card-text>
    </v-card-text>
    <template #buttons>
      <v-card-actions>
        <v-spacer />
        <v-btn
          color="grey"
          @click="handleCancel"
        >
          Отмена
        </v-btn>
        <v-btn
          color="primary"
          @click="handleConfirm"
        >
          ОК
        </v-btn>
      </v-card-actions>
    </template>
  </Dialog>
</template>
