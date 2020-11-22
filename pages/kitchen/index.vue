<template>
<Kitchen 
    :products="products"
    :stories="stories"
    :people="people"
/>
</template>

<script>
  import Kitchen from '~/components/Kitchen.vue'
  import {createClient} from '~/plugins/contentful.js'

  const client = createClient()
  export default {
    components: {
      Kitchen
    },
    asyncData ({env, active}) {
      
      return Promise.all([
        // fetch the owner of the blog
        client.getEntries({
          'sys.id': env.CTF_PERSON_ID
        }),
        // fetch all blog posts sorted by creation date
        client.getEntries({
          'content_type': 'menu'
        }),
        client.getEntries({
          'content_type': 'story'
        }),
        client.getEntries({
          'content_type': 'person',
          'fields.tag': 'kitchen'
        })
      ]).then(([entries, products, stories, people]) => {
        return {
          products: products.items,
          stories: stories.items,
          people: people.items
        }
      }).catch(e => console.log("err", e))
    },
    head () {
        return {
            title: "socoのキッチン｜soco",
            meta: [
                { hid: 'og:title', property: 'og:title', content: "socoのキッチン｜soco" },
                { hid: 'og:url', property: 'og:url', content: `https://soco-kyoto.com/kitchen/` },
                // { hid: 'og:image', property: 'og:image', content: this.post.fields.heroImage.fields.file.url },
            ],
            link: [
                { hid:"canonical", rel: "canonical", href: `https://soco-kyoto.com/kitchen/` }
            ]
        }
    }
  }
</script>