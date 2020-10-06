<template>
<Bar 
    :products="products"
    :stories="stories"
    :people="people"
/>
</template>

<script>
  import Bar from '~/components/Bar.vue'
  import {createClient} from '~/plugins/contentful.js'

  const client = createClient()
  export default {
    components: {
      Bar
    },
    asyncData ({env, active}) {
      
      return Promise.all([
        // fetch the owner of the blog
        client.getEntries({
          'sys.id': env.CTF_PERSON_ID
        }),
        // fetch all blog posts sorted by creation date
        client.getEntries({
          'content_type': 'barMenu'
        }),
        client.getEntries({
          'content_type': 'story'
        }),
        client.getEntries({
          'content_type': 'person'
        })
      ]).then(([entries, products, stories, people]) => {
       console.log(typeof(products));
        return {
          products: products.items,
          stories: stories.items,
          people: people.items
        }
      }).catch(e => console.log("err", e))
    }
  }
</script>