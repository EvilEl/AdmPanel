<script setup lang="ts">
import draggable from "vuedraggable";
import { VBtn } from "vuetify/components";
import Dialog from "@/features/dialog";
import { useTask } from "@/entities/task/model/useTask/useTask";
import TaskPayload from "../TaskPayload";
import { useTaskManagerDialog } from "@/pages/Task/model";
import style from "./TaskManager.module.css";

const {
  inProgressTasks,
  completedTasks,
  countCompletedTasks,
  countInProgressTasks,
  countTask,
  moveTask,
} = useTask();
const { isDialog, openDialog } = useTaskManagerDialog();
</script>

<template>
  <div :class="style['task-manager']">
    <v-btn
      :class="style['task-manager__add']"
      prepend-icon="mdi-plus-circle"
      variant="text"
      @click.stop="openDialog"
    >
      Задача
    </v-btn>
    <div :class="style['task-manager__content']">
      <div :class="style['task-manager__draggable']">
        В процессе: {{ countInProgressTasks }}
        <draggable
          v-model="inProgressTasks"
          :class="style['task-manager__list-group']"
          item-key="id"
          group="task"
          @change="moveTask"
        >
          >
          <template #item="{ element }">
            <div :class="style['list-group-item']">
              {{ element.title }}
            </div>
          </template>
        </draggable>
      </div>
      <div :class="style['task-manager__draggable']">
        Выполнены: {{ countCompletedTasks }} / {{ countTask }}
        <draggable
          v-model="completedTasks"
          :class="style['task-manager__list-group']"
          item-key="id"
          group="task"
          @change="moveTask"
        >
          <template #item="{ element }">
            <div :class="style['list-group-item']">
              {{ element.title }}
            </div>
          </template>
        </draggable>
      </div>
    </div>
  </div>
  <Dialog
    v-model:is-dialog="isDialog"
    :options="{ title: 'Добавить задачу', maxWidth: 500 }"
  >
    <TaskPayload />
  </Dialog>
</template>

<style scoped>
/* @import "./TaskManager.css"; */
</style>
