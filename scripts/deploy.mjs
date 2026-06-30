import { execSync } from 'child_process'
import { writeFileSync } from 'fs'
import { chdir } from 'process'

const run = cmd => execSync(cmd, { stdio: 'inherit' })

// Берём URL текущего origin, чтобы не хардкодить
const remoteUrl = execSync('git remote get-url origin').toString().trim()

writeFileSync('dist/.nojekyll', '')

chdir('dist')
run('git init')
run('git add -A')
run('git commit -m "deploy"')
run(`git push -f ${remoteUrl} HEAD:gh-pages`)
