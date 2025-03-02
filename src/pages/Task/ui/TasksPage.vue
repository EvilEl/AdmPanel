<script setup lang="ts">
import TaskManager from "./TaskManager";
import ConfirmProviderSymbol from "@/shared/ui/confirm/injectKeys";
import { provide, ref } from "vue";
import ConfirmProvider from "@/shared/ui/confirm/ConfirmProvider.vue";

const confirmProviderRef = ref<InstanceType<typeof ConfirmProvider> | null>(
  null,
);
provide(ConfirmProviderSymbol, confirmProviderRef);
</script>
<template>
  <ConfirmProvider ref="confirmProviderRef">
    <TaskManager />
  </ConfirmProvider>
</template>
<style scoped></style>
