const _console = console
const _clearConsole = {}
const f = () => {}
for (let x of Object.keys(console)) {
  _clearConsole[x] = f
}
let switchValue = true
Object.defineProperty(window, 'consoleSwitch', {
  get () {
    return switchValue
  },
  set (boolean) {
    const value = !!boolean
    switchValue = value
    window.console = value ? _console : _clearConsole
  }
})
