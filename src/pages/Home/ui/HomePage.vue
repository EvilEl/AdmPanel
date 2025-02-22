<script setup lang="ts">
import { VCard, VCardText } from "vuetify/components";
import { useTask } from "@/entities/task/model/useTask";
const { countCompletedTasks, countTask } = useTask();
</script>
<template>
  <v-card width="300">
    <template #title>
      <span class="font-weight-black">Задачи</span>
    </template>
    <v-card-text class="bg-surface-light pt-4">
      Общее количество задач: {{ countTask }} Выполнены задачи :
      {{ countCompletedTasks }}
    </v-card-text>
  </v-card>
</template>
<style scoped></style>
