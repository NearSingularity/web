class CssVariableManager {
  constructor() {
    this.map = {}

    this.init()
  }

  init() {
    for (let i = 0; i < document.styleSheets.length; i++) {
      const ss = document.styleSheets[i]
      if (!ss.href) {
        const rules = ss.rules
        for (let j = 0; j < rules.length; j++) {
          if (rules[j].selectorText === ':root') {
            for (let e of rules[j].styleMap.entries()) {
              const key = e[0]
              const values = e[1]
              this.map[key] = values[0][0].trim()
            }
            return
          }
        }
      }
    }
  }

}

export default new CssVariableManager()
