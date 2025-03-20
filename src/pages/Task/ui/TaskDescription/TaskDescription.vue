<script setup lang="ts">
import type { ITask } from '@/entities/task/model'

defineProps<{
  task: ITask
}>()
</script>

<template>
  <div class="ps-6 pe-6">
    {{ task.description }}
  </div>
</template>

<style lang="scss" scoped></style>
