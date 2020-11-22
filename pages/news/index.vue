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
.h1 { font-size: 0.9rem; margin-top: 40px; margin-bottom: 0; font-weight: 400;text-align: center;}
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
          'content_type': 'blogPost',
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
    },
    head () {
        return {
            title: "socoのニュース｜soco",
            meta: [
                { hid: 'og:title', property: 'og:title', content: "socoのニュース｜soco" },
                { hid: 'og:url', property: 'og:url', content: `https://soco-kyoto.com/news/` },
                // { hid: 'og:image', property: 'og:image', content: this.post.fields.heroImage.fields.file.url },
            ],
            link: [
                { hid:"canonical", rel: "canonical", href: `https://soco-kyoto.com/news/` }
            ]
        }
    }
  }
  if (process.client) {

      $(function(){
    　　const japanStandardTime = new Date().toLocaleString({ timeZone: 'Asia/Tokyo' });
        const hour = new Date(japanStandardTime).getHours();
        const status = $("#wrap").hasClass("dark_mode");
        // 5時〜18時の間はお昼モード
        if ( parseInt(hour) >= 5 && parseInt(hour) < 18 ) {
          console.log("☀️")
          if ( status ){
              $("#wrap").removeClass("dark_mode");
              $(".night-btn").removeClass("switch-selected")
              $(".day-btn").addClass("switch-selected")
              $("#switch-selected-bg").removeClass("change-switch")
          } 
        } else {
          console.log("🌕")
          if ( !status ){
              $("#wrap").addClass("dark_mode");
              $(".day-btn").removeClass("switch-selected")
              $(".night-btn").addClass("switch-selected")
              $("#switch-selected-bg").addClass("change-switch")
          } 
        }
      });
  }
</script>