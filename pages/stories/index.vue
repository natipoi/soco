<template>
    <div class="container">
        <h1 class="h1 side-space gray">SOCOのニュース</h1>
        <p :class="{ 'catch-phrase side-space': true }">
            日々、形作られていく、
            <ruby><rb>soco</rb><rp>（</rp><rt>ソコ</rt><rp>）</rp></ruby>。
        </p>
        <section class="section">
               <div class="blogs side-space">
                    <Stories
                    v-for="post in posts"
                    :title="post.fields.title"
                    :id="post.sys.id"
                    :publish="post.fields.publishDate"
                    :slug="post.fields.slug"
                    :image="post.fields.heroImage.fields.file.url"
                    :alt="post.fields.heroImage.fields.description"
                    />
                </div>
        </section>
    </div>

</template>

<style>
.h1 { font-size: 0.9rem; margin-bottom: 0; font-weight: 400;text-align: center;}
.catch-phrase {font-weight: 900; font-size: 1.2rem; line-height: 1.0; margin-bottom: 30px; text-align: center;}
.story-image {position: relative;overflow:hidden; height:calc(100vw * 0.6);margin-bottom: 10px;}

@media screen and (min-width: 820px){
  .catch-phrase {font-size: 1.5rem; margin-bottom: 50px;}
  .story-image {width: 50%; height: 300px;}
  .story-image img {height: 100%; width: auto;}
}
</style>

<script>
  import Stories from '~/components/Stories.vue'
  import {createClient} from '~/plugins/contentful.js'

  const client = createClient()

  export default {
    components: {
      Stories
    },
    asyncData ({env}) {
      return Promise.all([
        // fetch the owner of the blog
        client.getEntries({
          'sys.id': env.CTF_PERSON_ID
        }),
        // fetch all blog posts sorted by creation date
        client.getEntries({
          'content_type': env.CTF_BLOG_POST_TYPE_ID,
          order: '-sys.createdAt'
        })
      ]).then(([entries, posts]) => {
        // return data that should be available
        // in the template
        for (var post of posts.items) {
        　var date = new Date(post.fields.publishDate);
          var year = date.getFullYear();
          var month = date.getMonth() + 1;
          var day = date.getDate();
          post.fields.publishDate = `${year}/${month}/${day}`

        }
        return {
          person: entries.items[0],
          posts: posts.items
        }
      }).catch(console.error)
    }
  }
</script>