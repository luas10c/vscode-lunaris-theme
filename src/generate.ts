import fs from 'fs/promises'
import path from 'path'
import colors, { Scheme } from './colors.js'

const schemes: Scheme[] = ['dark']

console.log('\n🔥 \x1b[92mFiles built successfully!\x1b[0m\n')

for (const scheme of schemes) {
  const normal = colors(scheme, false)
  const bordered = colors(scheme, true)
}
