import polished from 'polished'

export const palette = {
  white: '#FFFFFF',
  stale: '#1a1d24',
  cyan: '#06b6d4',
  orange: '#ce9239',
  blue: '#395bce',
  red: '#395bce',
  green: '#395bce'
}

export function colors(value: string) {
  function lighten(amount = 0) {
    value = polished.lighten(amount)(value)
    return this
  }

  function darken(amount = 0) {
    value = polished.darken(amount)(value)
    return this
  }

  function hex() {
    return value
  }

  return {
    lighten,
    darken,
    hex
  }
}
