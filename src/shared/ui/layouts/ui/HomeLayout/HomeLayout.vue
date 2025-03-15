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
  VListGroup
} from "vuetify/components";
import { useHandleTheme, useNavigationDrawler } from "@/shared/composables";
import { RoutesName } from '@/shared/constants/index'

const { themeName, iconTheme, changeTheme } = useHandleTheme();
const { isOpen } = useNavigationDrawler();


const authorizations = [
  {
    name:RoutesName.LOGIN,
    title:'Вход'
  },
  {
    name:RoutesName.REGISTRATION,
    title:'Регистрация'
  },
  {
    name:RoutesName.PASSWORD_RECOVERY,
    title:'Восстановление пароля'
  }
]

</script>

<template>
  <v-responsive class="border rounded">
    <v-app :theme="themeName">
      <v-navigation-drawer
        :rail="isOpen"
        permanent
        @click="isOpen = false"
      >
        <v-list-item
          prepend-avatar="https://randomuser.me/api/portraits/men/85.jpg"
          title="John Leider"
          nav
        >
          <template #append>
            <v-btn
              icon="mdi-chevron-left"
              variant="text"
              @click.stop="isOpen = !isOpen"
            />
          </template>
        </v-list-item>

        <v-divider />
        <v-list
          density="compact"
          nav
        >
          <v-list-item
            :to="{ name: RoutesName.HOME }"
            prepend-icon="mdi-home-city"
            title="Домик"
            value="Домашняя"
          />
          <v-list-item
            :to="{ name: RoutesName.HOME }"
            prepend-icon="mdi-file-tree"
            title="Задачи"
            value="Таски"
          />

          <v-list-group value="Авторизация">
            <template #activator="{ props }">
              <v-list-item
                v-bind="props"
                title="Авторизация"
              />
            </template>

            <v-list-item
              v-for="(item,id) of authorizations"
              :key="id"
              :to="item.name"
              :title="item.title"
            />
          </v-list-group>
        </v-list>
      </v-navigation-drawer>
      <v-app-bar title="Админ панель">
        <v-btn
          :prepend-icon="iconTheme"
          text="Смена темы"
          slim
          @click="changeTheme"
        />
      </v-app-bar>

      <v-main>
        <v-container>
          <slot />
        </v-container>
      </v-main>
    </v-app>
  </v-responsive>
</template>

<style scoped></style>
