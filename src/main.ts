import { fileURLToPath } from 'node:url'
import { rm, mkdir, readFile } from 'node:fs/promises'
import path from 'node:path'

import { generate } from '#/utils/generate.js'

async function bootstrap() {
  const baseURL = path.resolve(fileURLToPath(import.meta.url), '..')

  await rm(path.resolve(baseURL, 'themes'), { recursive: true, force: true })
  await mkdir(path.resolve(baseURL, 'themes'))

  console.log('🔥 \x1b[92mFiles built successfully!\x1b[0m')

  const themes = ['dark']
  for (const theme of themes) {
    await generate(theme, {
      path: path.join(baseURL, 'themes', `${theme}.json`),
      bordered: true
    })
  }
}

bootstrap()
