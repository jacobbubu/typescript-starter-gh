import * as path from 'path'
import npmConfig from './npm-config'

import { ScopedNamePrompt } from './scoped-name-prompt'

const checkRegistry = process.env.CHECK_REGISTRY
  ? JSON.parse(process.env.CHECK_REGISTRY.toLowerCase())
  : true

const getDefaultScopeName = () => {
  return npmConfig.scope || npmConfig['init.author.name']
}

function packageNameSuggested() {
  const defaultScopeName = getDefaultScopeName()
  return (
    `@${defaultScopeName}/` +
    path
      .basename(path.resolve(__dirname, '..', '..'))
      .replace(/[^\w\d]|_/g, '-')
      .replace(/^-+|-+$/g, '')
      .toLowerCase()
  )
}

export default async function getScopedName() {
  const scopedNamePrompt = new ScopedNamePrompt({
    name: 'scopedName',
    initial: packageNameSuggested(),
    checkRegistry,
    message: `Input the package name`,
  })

  return scopedNamePrompt.run()
}
