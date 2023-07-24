import { fileURLToPath } from 'node:url'
import fs from 'node:fs/promises'
import path from 'node:path'

import { generate } from '#/utils/generate.js'

async function bootstrap() {
  const baseURL = path.resolve(fileURLToPath(import.meta.url), '..')

  await fs.mkdir(path.resolve(baseURL, 'themes'))

  console.log('\n🔥 \x1b[92mFiles built successfully!\x1b[0m\n')

  const themes = ['dark']
  for (const theme of themes) {
    await generate(theme, {
      path: path.resolve(baseURL, 'themes', `${theme}.json`),
      bordered: true
    })
  }
}

bootstrap()
