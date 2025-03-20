<script setup lang="ts">
import { useHandleTheme, useNavigationDrawler } from '@/shared/composables'
import { RoutesName } from '@/shared/constants/index'
import {
  VApp,
  VAppBar,
  VBtn,
  VContainer,
  VDivider,
  VList,
  VListGroup,
  VListItem,
  VMain,
  VNavigationDrawer,
  VResponsive,
} from 'vuetify/components'

const { themeName, iconTheme, changeTheme } = useHandleTheme()
const { isOpen } = useNavigationDrawler()

const authorizations = [
  {
    name: RoutesName.LOGIN,
    title: 'Вход',
  },
  {
    name: RoutesName.REGISTRATION,
    title: 'Регистрация',
  },
  {
    name: RoutesName.PASSWORD_RECOVERY,
    title: 'Восстановление пароля',
  },
]
</script>

<template>
  <VResponsive class="border rounded">
    <VApp :theme="themeName">
      <VNavigationDrawer :rail="isOpen" permanent @click="isOpen = false">
        <VListItem
          prepend-avatar="https://randomuser.me/api/portraits/men/85.jpg"
          title="John Leider"
          nav
        >
          <template #append>
            <VBtn
              icon="mdi-chevron-left"
              variant="text"
              @click.stop="isOpen = !isOpen"
            />
          </template>
        </VListItem>

        <VDivider />
        <VList density="compact" nav>
          <VListItem
            :to="{ name: RoutesName.HOME }"
            prepend-icon="mdi-home-city"
            title="Домик"
            value="Домашняя"
          />
          <VListItem
            :to="{ name: RoutesName.TASK }"
            prepend-icon="mdi-file-tree"
            title="Задачи"
            value="Таски"
          />

          <VListGroup value="Авторизация">
            <template #activator="{ props }">
              <VListItem v-bind="props" title="Авторизация" />
            </template>

            <VListItem
              v-for="(item, id) of authorizations"
              :key="id"
              :to="item.name"
              :title="item.title"
            />
          </VListGroup>
        </VList>
      </VNavigationDrawer>
      <VAppBar title="Админ панель">
        <VBtn
          :prepend-icon="iconTheme"
          text="Смена темы"
          slim
          @click="changeTheme"
        />
      </VAppBar>

      <VMain>
        <VContainer>
          <slot />
        </VContainer>
      </VMain>
    </VApp>
  </VResponsive>
</template>

<style scoped></style>
