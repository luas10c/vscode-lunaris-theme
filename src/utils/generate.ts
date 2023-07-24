import fs from 'node:fs/promises'

import { theme } from './theme.js'
interface Options {
  path: string
  bordered?: boolean
}

export async function generate(name: string = 'dark', options: Options): Promise<void> {
  const { path, bordered = false } = options ?? {}

  const data = theme(name, bordered)

  await fs.writeFile(path, JSON.stringify(data, null, 2))
}
