<script setup lang="ts">
import {
  VResponsive,
  VApp,
  VNavigationDrawer,
  VList,
  VListItem,
  VAppBar,
  VBtn,
  VMain,
  VContainer,
  VDivider,
} from "vuetify/components";
import { useHandleTheme, useNavigationDrawler } from "@/shared/composables";

const { themeName, iconTheme, changeTheme } = useHandleTheme();
const { isOpen } = useNavigationDrawler();
</script>

<template>
  <v-responsive class="border rounded">
    <v-app :theme="themeName">
      <v-navigation-drawer :rail="isOpen" permanent @click="isOpen = false">
        <v-list-item
          prepend-avatar="https://randomuser.me/api/portraits/men/85.jpg"
          title="John Leider"
          nav
        >
          <template v-slot:append>
            <v-btn
              icon="mdi-chevron-left"
              variant="text"
              @click.stop="isOpen = !isOpen"
            ></v-btn>
          </template>
        </v-list-item>

        <v-divider></v-divider>
        <v-list density="compact" nav>
          <v-list-item
            prepend-icon="mdi-home-city"
            title="Home"
            value="home"
          ></v-list-item>
          <v-list-item
            prepend-icon="mdi-file-tree"
            title="My Account"
            value="account"
          ></v-list-item>
        </v-list>
      </v-navigation-drawer>
      <v-app-bar title="Админ панель">
        <v-btn
          :prepend-icon="iconTheme"
          text="Смена темы"
          slim
          @click="changeTheme"
        ></v-btn>
      </v-app-bar>

      <v-main>
        <v-container>
          <h1>Main Content</h1>
          <slot></slot>
        </v-container>
      </v-main>
    </v-app>
  </v-responsive>
</template>

<style scoped></style>
