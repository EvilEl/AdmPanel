<script setup lang="ts">
import Dialog from "@/features/dialog";
import { VCardText, VCardActions, VSpacer, VBtn } from "vuetify/components";
import {useConfirm} from './composables/useConfirm'

const {isVisible,title,msg,handleCancel,handleConfirm}= useConfirm()
</script>

<template>
  <Dialog
    v-model:is-dialog="isVisible"
    :options="{
      title: title,
    }"
    max-width="25rem"
  >
    <v-card-text>
      <v-card-text>{{ msg }}</v-card-text>
    </v-card-text>
    <template #buttons>
      <v-card-actions>
        <v-spacer />
        <v-btn
          color="grey"
          @click="handleCancel"
        >
          Отмена
        </v-btn>
        <v-btn
          color="primary"
          @click="handleConfirm"
        >
          ОК
        </v-btn>
      </v-card-actions>
    </template>
  </Dialog>
</template>
