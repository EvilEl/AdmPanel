<script setup lang="ts">
import { useTask } from '@/entities/task/model/useTask/useTask'
import Dialog from '@/features/dialog'
import { useTaskDialog } from '@/pages/Task/model/useTaskDialog'
import { useTaskManagerDialog } from '@/pages/Task/model/useTaskManagerDialog'
import draggable from 'vuedraggable'
import { VBtn, VTextField } from 'vuetify/components'
import TaskDescription from '../TaskDescription'
import TaskPayload from '../TaskPayload'
import style from './TaskManager.module.css'

const {
  inProgressTasks,
  completedTasks,
  countCompletedTasks,
  countInProgressTasks,
  countTask,
  selectedTask,
  searchValue,
  removeTask,
  moveTask,
  removeCompletedTasks,
} = useTask()
const { isDialog, titleModal, openDialog } = useTaskManagerDialog()
const { isTaskDialog, openTaskDialog } = useTaskDialog()
</script>

<template>
  <div :class="style['task-manager']">
    <VBtn
      :class="style['task-manager__add']"
      prepend-icon="mdi-plus-circle"
      variant="text"
      @click.stop="openDialog(null)"
    >
      Задача
    </VBtn>
    <VBtn
      :class="style['task-manager__add']"
      prepend-icon="mdi-minus-circle"
      variant="text"
      @click.stop="removeCompletedTasks"
    >
      Удалить выполненные
    </VBtn>
    <VTextField v-model="searchValue" label="Поиск" />
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
                <VBtn
                  prepend-icon="mdi-book-open"
                  variant="text"
                  @click.stop="openTaskDialog(element)"
                />
                <VBtn
                  prepend-icon="mdi-pencil"
                  variant="text"
                  @click.stop="openDialog(element)"
                />
                <VBtn
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
                <VBtn
                  prepend-icon="mdi-book-open"
                  variant="text"
                  @click.stop="openTaskDialog(element)"
                />
                <VBtn
                  prepend-icon="mdi-pencil"
                  variant="text"
                  @click.stop="openDialog(element)"
                />
                <VBtn
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
