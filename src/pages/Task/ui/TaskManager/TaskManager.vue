<script setup lang="ts">
import draggable from "vuedraggable";
import { VBtn } from "vuetify/components";
import Dialog from "@/features/dialog";
import { useTask } from "@/entities/task/model/useTask/useTask";
import TaskPayload from "../TaskPayload";
import TaskDescription from "../TaskDescription";
import { useTaskManagerDialog } from "@/pages/Task/model/useTaskManagerDialog";
import { useTaskDialog } from "@/pages/Task/model/useTaskDialog";
import style from "./TaskManager.module.css";

const {
  inProgressTasks,
  completedTasks,
  countCompletedTasks,
  countInProgressTasks,
  countTask,
  selectedTask,
  removeTask,
  moveTask,
} = useTask();
const { isDialog, titleModal, openDialog } = useTaskManagerDialog();
const { isTaskDialog, openTaskDialog } = useTaskDialog();
</script>

<template>
  <div :class="style['task-manager']">
    <v-btn
      :class="style['task-manager__add']"
      prepend-icon="mdi-plus-circle"
      variant="text"
      @click.stop="openDialog(null)"
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
            <div
              :class="style['list-group-item']"
              @click="openTaskDialog(element)"
            >
              {{ element.title }}
              <div>
                <v-btn
                  prepend-icon="mdi-book-open"
                  variant="text"
                  @click.stop="openTaskDialog(element)"
                />
                <v-btn
                  prepend-icon="mdi-pencil"
                  variant="text"
                  @click.stop="openDialog(element)"
                />
                <v-btn
                  prepend-icon="mdi-close-outline"
                  variant="text"
                  @click.stop="removeTask(element.id)"
                />
              </div>
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
              <div>
                <v-btn
                  prepend-icon="mdi-book-open"
                  variant="text"
                  @click.stop="openTaskDialog(element)"
                />
                <v-btn
                  prepend-icon="mdi-pencil"
                  variant="text"
                  @click.stop="openDialog(element)"
                />
                <v-btn
                  prepend-icon="mdi-close-outline"
                  variant="text"
                  @click.stop="removeTask(element.id)"
                />
              </div>
            </div>
          </template>
        </draggable>
      </div>
    </div>
  </div>
  <Dialog
    v-model:is-dialog="isDialog"
    :options="{ title: titleModal, maxWidth: 500 }"
  >
    <TaskPayload :task="selectedTask" />
  </Dialog>

  <Dialog
    v-model:is-dialog="isTaskDialog"
    :options="{ title: 'Описание задачи', maxWidth: 500 }"
  >
    <TaskDescription v-if="selectedTask" :task="selectedTask" />
  </Dialog>
</template>
