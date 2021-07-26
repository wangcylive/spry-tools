import 'core-js/stable'
import 'regenerator-runtime/runtime'

async function getA() {
  await new Promise((resolve => resolve(5)))
}

const b = 'a'

