import { writeFile, rm, mkdir } from 'node:fs/promises'
import { join } from 'node:path'

import { theme } from './theme.js'

interface Options {
  path: string
}

async function generate(name: string, options: Options) {
  if (typeof options !== 'object' || options === null) {
    throw new TypeError(
      `Expected "options" to be an object, but received ${options === null ? 'null' : typeof options}`
    )
  }

  const { path } = options

  const variants = ['cyan']

  for (const variant of variants) {
    console.log('variant', variant)

    const data = theme(name)
    await writeFile(path, JSON.stringify(data, null, 2))
  }
}

async function bootstrap() {
  await rm(join(import.meta.dirname, 'themes'), {
    recursive: true,
    force: true
  })
  await mkdir(join(import.meta.dirname, 'themes'))

  console.log('🔥 \x1b[92mFiles built successfully!\x1b[0m')

  const themes = ['dark']
  for (const theme of themes) {
    await generate(theme, {
      path: join(import.meta.dirname, 'themes', `${theme}.json`)
    })
  }
}

bootstrap()
