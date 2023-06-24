import TerserPlugin from "terser-webpack-plugin"

const resolveAlias = (file) => [
  `./${file}.custom.js`,
  `./${file}.js`,
]

export default {
  mode: "production",
  module: {
    rules: [
      {
        test: /\.json$/i,
        type: "asset/source",
      },
    ],
  },
  resolve: {
    alias: {
      actions$: resolveAlias("actions"),
      theme$: resolveAlias("theme"),
      keys$: resolveAlias("keys"),
      "search-engines$": resolveAlias("search-engines"),
    },
  },
  optimization: {
    // Disable terser's default behavior of creating a separate surfingkeys.js.LICENSE.txt file
    // because this trips up our gulpfile
    minimizer: [
      new TerserPlugin({
        extractComments: false,
        terserOptions: {
          format: {
            comments: false,
          },
        },
      }),
    ],
  },
  experiments: {
    topLevelAwait: true,
  },
}
