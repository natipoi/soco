
require("dotenv").config();
const config = require("./.contentful.json");
const contentful = require("contentful");
const client = contentful.createClient({
  space: config.CTF_SPACE_ID,
  accessToken: config.CTF_CDA_ACCESS_TOKEN
});

export default {
  /*
   ** Nuxt rendering mode
   ** See https://nuxtjs.org/api/configuration-mode
   */
  mode: "universal",
  /*
   ** Nuxt target
   ** See https://nuxtjs.org/api/configuration-target
   */
  target: "server",
  /*
   ** Headers of the page
   ** See https://nuxtjs.org/api/configuration-head
   */
  head: {
    htmlAttrs: {
      prefix: "og: http://ogp.me/ns#"
    },
    titleTemplate: "%s",
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },

      {
        hid: "description",
        name: "description",
        content: "soco"
      },
      {
        hid: "og:site_name",
        property: "og:site_name",
        content: "soco"
      },
      { hid: "og:type", property: "og:type", content: "website" },
      { hid: "og:url", property: "og:url", content: "https://soco-kyoto.com" },
      { hid: "og:title", property: "og:title", content: "Soco" },
      {
        hid: "og:description",
        property: "og:description",
        content: "soco"
      },
      {
        hid: "og:image",
        property: "og:image",
        content: "~/assets/pc_main.jpg"
      }
    ],
    script: [
      {
        src: "https://ajax.googleapis.com/ajax/libs/jquery/3.4.1/jquery.min.js"
      },
      { src: "https://use.typekit.net/fzc8ycq.js" }
    ],
    link: [
      { rel: "icon", type: "image/x-icon", href: "/summer-favicon.ico" },
      {
        rel: "stylesheet",
        href: "https://use.fontawesome.com/releases/v5.6.1/css/all.css"
      }
    ]
  },
  /*
   ** Global CSS
   */
  css: [],
  /*
   ** Plugins to load before mounting the App
   ** https://nuxtjs.org/guide/plugins
   */
  plugins: ["~/plugins/contentful", "~/plugins/util"],
  /*
   ** Auto import components
   ** See https://nuxtjs.org/api/configuration-components
   */
  components: true,
  /*
   ** Nuxt.js dev-modules
   */
  buildModules: [],
  /*
   ** Nuxt.js modules
   */
  modules: [],

  env: {
    CTF_SPACE_ID: config.CTF_SPACE_ID,
    CTF_CDA_ACCESS_TOKEN: config.CTF_CDA_ACCESS_TOKEN,
    CTF_PERSON_ID: config.CTF_PERSON_ID,
    CTF_BLOG_POST_TYPE_ID: config.CTF_BLOG_POST_TYPE_ID,
    DARK_BACKGROUND_COLOR: "#000"
  },
  router: {
    base: "/"
  },
  generate: {
    routes() {
      return client
        .getEntries({
          content_type: config.CTF_BLOG_POST_TYPE_ID
        })
        .then(entries => {
          return entries.items.map(entry => {
            return {
              route: `posts/${entry.fields.slug}`,
              payload: entry
            };
          });
        });
    }
  },
  /*
   ** Build configuration
   ** See https://nuxtjs.org/api/configuration-build/
   */
  build: {}
};
