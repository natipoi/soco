<template>
<Kitchenbar 
    :products="products"
/>
</template>

<script>
  import Kitchenbar from '~/components/Kitchenbar.vue'
  import {createClient} from '~/plugins/contentful.js'

  const client = createClient()
  console.log("okokokokokokok")
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
        })
      ]).then(([entries, products]) => {
        console.log("productsproductsproductsproductsproducts", products.items)
        return {
          products: products.items,
        }
      }).catch(console.log("errorororo"))
    }
  }
</script>