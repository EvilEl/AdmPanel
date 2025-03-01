<script setup lang="ts">
import {
  VForm,
  VContainer,
  VRow,
  VCol,
  VTextField,
  VBtn,
} from "vuetify/components";
import { useTaskPayload } from "./model";
import { ITaskPayloadProps } from "./types";

const props = withDefaults(defineProps<ITaskPayloadProps>(), {
  task: () => ({
    id: '',
    title: '',
    description: '',
    status: 'completed'
  })
});

const {
  title,
  description,
  errors,
  textBtn,
  submit,
} = useTaskPayload(props);
</script>

<template>
  <v-form @submit.prevent="submit">
    <v-container>
      <v-row>
        <v-col width="100%" md="100%">
          <v-text-field v-model="title" :counter="100" :error-messages="errors.title" label="Заголовок" required />
        </v-col>

        <v-col md="100%">
          <v-text-field v-model="description" :counter="100" :error-messages="errors.description" label="Описание"
            required />
        </v-col>
      </v-row>
      <v-btn class="me-4 mt-2" type="submit">
        {{ textBtn }}
      </v-btn>
    </v-container>
  </v-form>
</template>

<style lang="scss" scoped></style>
