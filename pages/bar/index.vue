<template>
<Kitchenbar 
    :products="products"
    :stories="stories"
    :people="people"
/>
</template>

<script>
  import Kitchenbar from '~/components/Kitchenbar.vue'
  import {createClient} from '~/plugins/contentful.js'

  const client = createClient()
  export default {
    components: {
      Kitchenbar
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
    }
  }
</script>