import { darken, lighten } from 'polished'

class Palette {
  private base: string
  private value: string
  private exec: boolean

  constructor(value: string) {
    this.base = value
  }

  lighten(amount = 0) {
    this.value = lighten(amount)(this.base)
    return this
  }

  darken(amount = 0) {
    this.value = darken(amount)(this.base)
    return this
  }

  hex() {
    if (this.exec) {
      this.value = undefined
      this.exec = false
    }

    if (this.value) {
      this.exec = true
      return this.value
    }

    return this.base
  }
}

export const palette = {
  white: new Palette('#FFFFFF'),
  stale: new Palette('#1a1d24'),
  cyan: new Palette('#06b6d4'),
  orange: new Palette('#dba247'),
  blue: new Palette('#3973ce'),
  red: new Palette('#d34046'),
  green: new Palette('#39cc65')
}
