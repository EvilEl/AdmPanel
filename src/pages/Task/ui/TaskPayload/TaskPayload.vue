<script setup lang="ts">
import {
  VBtn,
  VCol,
  VContainer,
  VForm,
  VRow,
  VTextField,
} from 'vuetify/components'
import { useTaskPayload } from './model'
import type { ITaskPayloadProps } from './types'

const props = withDefaults(defineProps<ITaskPayloadProps>(), {
  task: () => ({
    id: '',
    title: '',
    description: '',
    status: 'completed',
  }),
})

const { title, description, errors, textBtn, submit } = useTaskPayload(props)
</script>

<template>
  <VForm @submit.prevent="submit">
    <VContainer>
      <VRow>
        <VCol width="100%" md="100%">
          <VTextField
            v-model="title"
            :counter="100"
            :error-messages="errors.title"
            label="Заголовок"
            required
          />
        </VCol>

        <VCol md="100%">
          <VTextField
            v-model="description"
            :counter="100"
            :error-messages="errors.description"
            label="Описание"
            required
          />
        </VCol>
      </VRow>
      <VBtn class="me-4 mt-2" type="submit">
        {{ textBtn }}
      </VBtn>
    </VContainer>
  </VForm>
</template>

<style lang="scss" scoped></style>
