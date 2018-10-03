const parseArgs = require("minimist")
const argv = parseArgs(process.argv.slice(2), {
  alias: {
    H: "hostname",
    p: "port"
  },
  string: ["H"],
  unknown: parameter => false
})

const routerBase = process.env.DEPLOY_ENV === 'GH_PAGES' ? {
  router: {
    base: '/web/'
  }
} : {}

const port =
  argv.port ||
  process.env.PORT ||
  process.env.npm_package_config_nuxt_port ||
  "3000"
const host =
  argv.hostname ||
  process.env.HOST ||
  process.env.npm_package_config_nuxt_host ||
  "localhost"
module.exports = {
  env: {
    baseUrl:
      process.env.BASE_URL ||
      `http://${host}:${port}`
  },
  head: {
    title: "進捗大陸",
    meta: [
      { charset: "utf-8" },
      {
        name: "viewport",
        content:
          "width=device-width, initial-scale=1"
      },
      {
        hid: "description",
        name: "description",
        content: "shinchokutairiku"
      }
    ],
    link: [
      {
        rel: "icon",
        type: "image/x-icon",
        href: "/favicon.ico"
      }
    ]
  },
  /*
  ** Customize the progress-bar color
  */
  loading: { color: "#3B8070" },
  /*
  ** Build configuration
  */
  css: [
    "~/assets/css/main.scss",
    "@fortawesome/fontawesome-free-webfonts",
    "@fortawesome/fontawesome-free-webfonts/css/fa-brands.css",
    "@fortawesome/fontawesome-free-webfonts/css/fa-regular.css",
    "@fortawesome/fontawesome-free-webfonts/css/fa-solid.css"
  ],
  build: {},
  modules: [
      "@nuxtjs/axios",
      ['bootstrap-vue/nuxt', { css: false }],
      "~/modules/typescript.js"
  ],
  axios: {},
  ...routerBase
}
