<script setup lang="ts">
import { computed } from 'vue'
import type { ITask } from '@/entities/task/model'

const props = defineProps<{
  task: ITask
}>()

const dateFormat = Intl.DateTimeFormat('ru', {
  year: 'numeric',
  month: 'numeric',
  day: 'numeric',
  hour: 'numeric',
  minute: 'numeric',
  second: 'numeric',
})

const date = computed(() => dateFormat.format(props.task.createdDate))
</script>

<template>
  <div class="ps-6 pe-6">
    <p class="mb-1">
      {{ task.description }}
    </p>
    <p>
      Дата создания - {{ date }}
    </p>
  </div>
</template>

<style lang="scss" scoped></style>
