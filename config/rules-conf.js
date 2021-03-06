const ExtractTextPlugin = require('mini-css-extract-plugin')
const { isProduction } = require('./env-conf')
const { getAssetsPath } = require('./path-conf')

module.exports = (mode, env) => {
  const isProd = isProduction(mode)

  // 文件内联大小限制
  const fileInlineLimit = 4000

  // css module name设置
  let localIdentName = '_[hash:base64:8]'
  if (!isProd) {
    localIdentName = '[path][name]__[local]'
  }

  const optionsDefault = {
    sourceMap: true
  }

  function getLoader (type, options) {
    const loader = `${type}-loader`
    return {
      loader,
      options
    }
  }

  const cssLoader = getLoader('css', optionsDefault)
  const cssModuleLoader = getLoader('css', {
    ...optionsDefault,
    modules: {
      localIdentName
    }
  })
  const styleLoader = getLoader('style')
  const postcssLoader = getLoader('postcss', optionsDefault)
  const sassLoader = getLoader('sass', optionsDefault)
  const lessLoader = getLoader('less', optionsDefault)

  const cssUse = [ postcssLoader ]
  const sassUse = [ postcssLoader, sassLoader ]
  const lessUse = [ postcssLoader, lessLoader ]

  const lastLoader = isProd ? ExtractTextPlugin.loader : styleLoader

  return {
    getCssLoader (modules) {
      const use = [ modules ? cssModuleLoader : cssLoader, ...cssUse ]

      return [ lastLoader, ...use ]
    },
    getSassLoader (modules) {
      const use = [ modules ? cssModuleLoader : cssLoader, ...sassUse ]

      return [ lastLoader, ...use ]
    },
    getLessLoader (modules) {
      const use = [ modules ? cssModuleLoader : cssLoader, ...lessUse ]

      return [ lastLoader, ...use ]
    },
    getFontOptions () {
      let filename = '[path][name].[ext]'
      if (isProd) {
        filename = 'font/[contenthash].[ext]'
      }
      const name = getAssetsPath(mode, filename)
      return {
        limit: fileInlineLimit,
        name
      }
    },
    getImgOptions () {
      let filename = '[path][name].[ext]'
      if (isProd) {
        filename = 'img/[contenthash].[ext]'
      }
      const name = getAssetsPath(mode, filename)
      return {
        limit: fileInlineLimit,
        name
      }
    }
  }
}
