import nodeResolve from '@rollup/plugin-node-resolve'

const isProduction = process.env.NODE_ENV === 'production'

module.exports = {
  input: 'src/index.ts',
  output: {
    file: 'dist/bundle.js',
    format: 'esm'
  },
  plugins: [nodeResolve({ preferBuiltins: true })],
  watch: { include: 'src/**' }
}
