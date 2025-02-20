<script setup lang="ts">
import draggable from "vuedraggable";
import { VBtn } from "vuetify/components";
import Dialog from "@/features/dialog";
import useTask from "@/entities/task/api/useTask";
import TaskPayload from "../TaskPayload";
import { useTaskManagerDialog } from "@/pages/Task/model";

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
      <div class="task-manager__draggable">
        В процессе: {{ countInProgressTasks }}
        <draggable
          v-model="inProgressTasks"
          class="task-manager__list-group"
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
      </div>
      <div class="task-manager__draggable">
        Выполнены: {{ countCompletedTasks }} / {{ countTask }}
        <draggable
          v-model="completedTasks"
          class="task-manager__list-group"
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
  </div>
</template>

<style scoped>
@import "./TaskManager.module.css";
</style>
