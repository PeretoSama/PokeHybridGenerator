import postcssMixins from 'postcss-mixins'
import postcssSimplevars from 'postcss-simple-vars'
import postcssNested from 'postcss-nested'

export default {
  plugins: [
    postcssMixins(),
    postcssSimplevars(),
    postcssNested()
  ]
}
