import path from 'node:path'
import { fileURLToPath } from 'node:url'
import autoprefixer from 'autoprefixer'
import postcssCustomMedia from 'postcss-custom-media'
import postcssImport from 'postcss-import'
import postcssMixins from 'postcss-mixins'
import postcssNested from 'postcss-nested'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

// eslint-disable-next-line import/no-default-export
export default {
  plugins: [
    postcssImport({ path: [path.resolve(__dirname, '/')] }),
    postcssMixins(),
    postcssCustomMedia(),
    autoprefixer(),
    postcssNested(),
  ],
}
