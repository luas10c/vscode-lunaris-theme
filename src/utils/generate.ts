import { writeFile } from 'node:fs/promises'

import { theme } from './theme.js'

interface Options {
  path: string
  bordered?: boolean
}

export async function generate(name: string, options: Options) {
  const { path, bordered } = options ?? {}

  const data = theme(name, bordered)

  await writeFile(path, JSON.stringify(data, null, 2))
}
