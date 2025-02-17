<script setup lang="ts">
import {
  VForm,
  VContainer,
  VRow,
  VCol,
  VTextField,
  VBtn,
} from "vuetify/components";
import { useTaskPayload } from "./api";

const { title, description, submit } = useTaskPayload();
</script>

<template>
  <v-form @submit.prevent="submit">
    <v-container>
      <v-row>
        <v-col width="100%" md="100%">
          {{ console.log(title) }}
          <v-text-field
            v-model="title.value.value"
            :counter="100"
            :error-messages="title.errorMessage.value"
            label="Заголовок"
            required
          ></v-text-field>
        </v-col>

        <v-col md="100%">
          <v-text-field
            v-model="description.value.value"
            :counter="100"
            :error-messages="description.errorMessage.value"
            label="Описание"
            required
          ></v-text-field>
        </v-col>
      </v-row>
      <v-btn class="me-4" type="submit"> Создать </v-btn>
    </v-container>
  </v-form>
</template>

<style lang="scss" scoped></style>
