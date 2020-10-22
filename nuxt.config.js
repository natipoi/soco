
require("dotenv").config();
const config = require("./.contentful.json");
const contentful = require("contentful");
const client = contentful.createClient({
  space: config.CTF_SPACE_ID,
  accessToken: config.CTF_CDA_ACCESS_TOKEN
});

const now = new Date();
const month = now.getMonth() + 1;
var season = "summer";
if (month >= 3 && month < 6) {
  season = "spring";
} else if (month >= 6 && month < 9) {
  season = "summer";
} else if (month >= 9 && month < 12) {
  season = "autumn";
} else {
  season = "winter";
}

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
      { hid: 'og:image', property: 'og:image', content: `/${season}.png` },
      {
        hid: "og:description",
        property: "og:description",
        content: "soco"
      }
    ],
    script: [
      {
        src: "https://ajax.googleapis.com/ajax/libs/jquery/3.4.1/jquery.min.js"
      },
      { src: "https://use.typekit.net/fzc8ycq.js" }
    ],
    link: [
      { rel: "icon", type: "image/x-icon", href: `/${season}-favicon.ico` },
      {
        rel: "stylesheet",
        href: "https://use.fontawesome.com/releases/v5.6.1/css/all.css"
      },
      {
        rel: "canonical",
        href: "https://soco-kyoto.com"
      },
      {
        ref: "shortcut icon",
        href: `/${season}.png`,
        type: "image/x-icon"
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
  plugins: ["~/plugins/contentful", "~/plugins/util", "~/plugins/vue-scrollto"],
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
  modules: [
    'nuxt-basic-auth-module'
  ],
  basic: {
    name: 'soco',
    pass: '0816'
  },

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
    routes: function() {
      let stories = client.getEntries({
              content_type: 'story'
            })
            .then((entries) => {
                return entries.items.map((entry) => {
                    return {
                        route: `stories/${entry.fields.slug}`,
                        payload: entry
                    }
                })
            }
          )
      let products = client.getEntries({
              content_type: 'blogPost'
            })
            .then((entries) => {
                return entries.items.map((entry) => {
                    return {
                        route: `news/${entry.fields.slug}`,
                    }
                })
            }
        )
        return Promise.all([stories, products]).then(values => {
          return [...values[0], values[1]];
        });
    }
  },
  /*
   ** Build configuration
   ** See https://nuxtjs.org/api/configuration-build/
   */
  build: {}
};
