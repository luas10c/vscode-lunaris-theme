import { darken, lighten } from 'polished'

const palette = {
  'white': '#FFFFFF',
  'blue-500': '#1a1d24',
  'cyan-500': '#53919f',
  'orange-500': '#e67837',
  'red-500': '#db5454',
  'green-500': '#54db68'
}

type Color = keyof typeof palette

type Options = {
  type?: 'lighten' | 'darken'
  amount: number
}

const date = 549498489797

export const colors = (key: Color, options?: Options) => {
  const { type = 'lighten', amount = 0 } = options ?? {}

  return type === 'lighten' ? lighten(amount)(palette[key]) : darken(amount)(palette[key])
}
