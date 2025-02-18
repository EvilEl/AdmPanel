<script setup lang="ts">
import draggable from "vuedraggable";
import { VBtn } from "vuetify/components";
import Dialog from "@/features/dialog";
import useTask from "@/entities/task/api/useTask";
import TaskPayload from "../TaskPayload";
import { useTaskManagerDialog } from "@/pages/Task/model";

const { inProgressTasks, completedTasks, moveTask } = useTask();
const { isDialog, openDialog } = useTaskManagerDialog();

//@TODO добавить логику добавление удаление смена позиции тасок
</script>

<template>
  <div class="task-manager">
    <v-btn
      class="task-manager__add"
      prepend-icon="mdi-plus-circle"
      variant="text"
      @click.stop="openDialog"
    >
      Задача
    </v-btn>
    <Dialog
      v-model:is-dialog="isDialog"
      :options="{ title: 'Добавить задачу', maxWidth: 500 }"
    >
      <TaskPayload />
    </Dialog>
    <div class="task-manager__content">
      <draggable
        :list="inProgressTasks"
        class="list-group"
        item-key="id"
        group="task"
        @change="moveTask"
      >
        >
        <template #item="{ element }">
          <div class="list-group-item">
            {{ element.title }}
          </div>
        </template>
      </draggable>
      <draggable
        :list="completedTasks"
        class="list-group"
        item-key="id"
        group="task"
        @change="moveTask"
      >
        <template #item="{ element }">
          <div class="list-group-item">{{ element.title }}</div>
        </template>
      </draggable>
    </div>
  </div>
</template>

<style scoped>
@import "./TaskManager.module.css";
</style>
