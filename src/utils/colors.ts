export const colors = {
  bunker: {
    50: '#FFFFFF',
    100: '#FFFFFF',
    200: '#ECECEE',
    300: '#B9B9C1',
    400: '#858593',
    500: '#585863',
    600: '#4A4A54',
    700: '#3C3C44',
    800: '#2E2E33',
    900: '#222226',
    950: '#1A1A1E'
  },
  pelorous: {
    50: '#edfdfe',
    100: '#d2f9fb',
    200: '#aaf1f7',
    300: '#70e5f0',
    400: '#2ecfe2',
    500: '#11a7bb',
    600: '#128fa8',
    700: '#167388',
    800: '#1b5d6f',
    900: '#1b4e5e',
    950: '#0c3240'
  }
} as const

export type Colors = typeof colors
