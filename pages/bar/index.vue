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
    console.log(products.items)
    products.items.sort(function(item1,item2){
        if( item1.fields.order < item2.fields.order ) return -1;
        if( item1.fields.order > item2.fields.order ) return 1;
        return 0;
    });
        return {
          products: products.items,
          stories: stories.items,
          people: people.items
        }
      }).catch(e => console.log("err", e))
    },
    head () {
        return {
            title: "SOCOのバー | 京都・河原町のキッチン・バー＆イベント",
            meta: [
                { hid: 'og:title', property: 'og:title', content: "SOCOのバー | 京都・河原町のキッチン・バー＆イベント" },
                { hid: 'og:url', property: 'og:url', content: `https://soco-kyoto.com/bar/` },
                // { hid: 'og:image', property: 'og:image', content: this.post.fields.heroImage.fields.file.url },
            ],
            link: [
                { hid:"canonical", rel: "canonical", href: `https://soco-kyoto.com/bar/` }
            ]
        }
    }
  }
</script>