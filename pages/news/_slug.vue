<template>
<div class="container">
  <section class="section side-space">
        <p class="story-heading gray">SOCOのBlog</p>
        <h1 class="story-h1">{{ post.fields.title }}</h1>
    <div class="hero-image">
    <img :src="post.fields.heroImage.fields.file.url" :alt="post.fields.heroImage.fields.description">
    </div>
    <div v-html="toHtmlString(post.fields.body)"></div>
  </section>
</div>
</template>

<style>
.story-heading  { font-size: 0.9rem; font-weight: 400;text-align: center; margin-top: 40px; margin-bottom: 0; }
.story-h1 { font-weight: 900;font-size: 1.2rem;line-height: 1.0;margin-top: 0;margin-bottom: 30px;text-align: center;}
.hero-image img {width: 100%;}
.story-main-body {margin: 30px 0;text-align:left;}
.story-main-body p {line-height:2.3;}
.createdat {color: #969594; font-size: 1.0rem; text-align: right;margin-bottom: 5px;}
h2 {margin-bottom: 20px;margin-top: 30px;}
h3 {margin-bottom: 10px;margin-top: 20px;}
 @media screen and (min-width: 820px) {
    .story-heading {margin-bottom: 20px;}
    .story-h1 {font-size: 1.5rem;margin-bottom: 30px;}


}
</style>

<script>
import { createClient } from '~/plugins/contentful.js'
import { documentToHtmlString } from '@contentful/rich-text-html-renderer'
import marked from 'marked';

const client = createClient()
export default {
  asyncData({ params, error, payload }) {
        if(payload) return {post: payload}
        return client
            .getEntries({
                'content_type': "blogPost",
                'fields.slug': params.slug
            })
            .then(entries => {
                return {post: entries.items[0] };
            })
            .catch( e => { console.log(e) })
    },
    head () {
        return {
            title: this.post.fields.title,
            meta: [
                { hid: 'description', name: 'description', content: this.post.fields.description },
                { hid: 'og:type', property: 'og:type', content: 'article' },
                { hid: 'og:title', property: 'og:title', content: this.post.fields.title },
                { hid: 'og:description', property: 'og:description', content: this.post.fields.description },
                { hid: 'og:url', property: 'og:url', content: `https://fitpoi.com/news/${this.post.fields.slug}/` },
                { hid: 'og:image', property: 'og:image', content: this.post.fields.heroImage.fields.file.url },
            ],
            link: [
                { hid:"canonical", rel: "canonical", href: `https://fitpoi.com/news/${this.post.fields.slug}/` }
            ]
        }
    },
    methods: {
      toHtmlString(obj) {
        return documentToHtmlString(obj)
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