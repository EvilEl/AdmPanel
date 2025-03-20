<script setup lang="ts">
import { useTask } from '@/entities/task/model/useTask'
import { VCard, VCardText } from 'vuetify/components'

const { countCompletedTasks, countTask } = useTask()
</script>

<template>
  <VCard width="300">
    <template #title>
      <span class="font-weight-black">Задачи</span>
    </template>
    <VCardText class="bg-surface-light pt-4">
      Общее количество задач: {{ countTask }} Выполнены задачи :
      {{ countCompletedTasks }}
    </VCardText>
  </VCard>
</template>

<style scoped></style>
