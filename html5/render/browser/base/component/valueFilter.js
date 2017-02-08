'use strict'

const NOT_PX_NUMBER_PROPERTIES = ['flex', 'opacity', 'zIndex', 'fontWeight']

export function filterStyles (styles, config) {
  for (const key in styles) {
    const value = styles[key]
    const parser = this.getFilters(key, config)[typeof value]
    if (typeof parser === 'function') {
      styles[key] = parser(value)
    }
  }
}

export function getFilters (key, config) {
  if (NOT_PX_NUMBER_PROPERTIES.indexOf(key) !== -1) {
    return {}
  }
  return {
    number: function (val) {
      return val * config.scale + 'px'
    },
    string: function (val) {
      // string of a number suffixed with a 'px' or 'wx' unit. original RegExp is /^-?\d*\.?\d+(?:px)?$/
      const match = val.match(/^([+-]?\d.*)+([p,w]x)$/)
      if (match && match.length === 3) {
        if (match[2] === 'px') {
          return parseFloat(match[1]) * config.scale + 'px'
        }
        else if (match[2] === 'wx') {
          return parseFloat(match[1]) * config.devicePixelRatio + 'px'
        }
      }

      if (key.match(/transform/) && val.match(/translate/)) {
        return val.replace(/\d*\.?\d+px/g, function (match) {
          return parseInt(parseFloat(match) * config.scale) + 'px'
        })
      }
      return val
    }
  }
}
