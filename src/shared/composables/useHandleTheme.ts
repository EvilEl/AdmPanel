import { createGlobalState, useLocalStorage } from '@vueuse/core'
import { computed } from 'vue'
import { useTheme } from 'vuetify'

export enum appThemeEnum {
  DARK = 'dark',
  LIGHT = 'light',
}

export const useHandleTheme = createGlobalState(() => {
  const theme = useTheme()
  const storageTheme = useLocalStorage('theme', theme.name)

  const iconTheme = computed(() =>
    storageTheme.value === appThemeEnum.LIGHT
      ? 'mdi-weather-sunny'
      : 'mdi-weather-night',
  )

  const changeTheme = () => {
    storageTheme.value
      = storageTheme.value === appThemeEnum.DARK
        ? appThemeEnum.LIGHT
        : appThemeEnum.DARK
  }

  return {
    themeName: storageTheme,
    iconTheme,
    changeTheme,
  }
})
