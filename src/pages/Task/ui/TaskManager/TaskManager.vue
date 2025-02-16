<template>
  <div class="task-manager">
    <draggable
      v-model="myArray"
      group="people"
      class="list-group"
      ghost-class="ghost"
      @start="drag = true"
      @end="drag = false"
      item-key="id"
    >
      <template #item="{ element }">
        <div class="list-group-item">{{ element.name }}</div>
      </template>
    </draggable>
    <draggable
      v-model="myArray2"
      group="people"
      class="list-group"
      ghost-class="ghost"
      @start="drag = true"
      @end="drag = false"
      item-key="id"
    >
      <template #item="{ element }">
        <div class="list-group-item">{{ element.name }}</div>
      </template>
    </draggable>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import draggable from "vuedraggable";

const myArray = ref([
  {
    name: "John",
    id: 1,
  },
  {
    name: "Jean",
    id: 3,
  },
]);

const myArray2 = ref([
  {
    name: "Edgard",
    id: 6,
  },
  {
    name: "Juan",
    id: 5,
  },
  {
    name: "Gerard",
    id: 4,
  },
  {
    name: "Joao",
    id: 2,
  },
  {
    name: "Johnson",
    id: 7,
  },
]);
const drag = ref(false);
</script>

<style scoped>
@import "./TaskManager.module.css";
</style>
