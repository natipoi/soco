<template>
<div class="container">
  <section class="section side-space">
        <p class="story-heading gray">SOCOのBlog</p>
        <h1 class="story-h1">{{ post.fields.title }}</h1>
    <div class="hero-image">
    <img :src="post.fields.heroImage.fields.file.url" :alt="post.fields.heroImage.fields.description">
    </div>
    <div v-html="mkbody" class="story-main-body" />
  </section>
</div>
</template>

<style>
.story-heading  { font-size: 0.9rem; font-weight: 400;text-align: center; margin-top: 40px; margin-bottom: 0; }
.story-h1 { font-weight: 900;font-size: 1.2rem;line-height: 1.0;margin-top: 0;margin-bottom: 30px;text-align: center;}
.hero-image img {width: 100%;}
.story-main-body {margin: 30px 0;}
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
                { hid: 'og:url', property: 'og:url', content: `https://fitpoi.com/posts/${this.post.sys.id}/` },
                { hid: 'og:image', property: 'og:image', content: this.post.fields.heroImage.fields.file.url },
            ]
        }
    },
    computed: {
        mkbody() {
        return marked(this.post.fields.body);
        }
    },
    created() {
        marked.setOptions({
        langPrefix: '',
        highlight: function(code, lang) {
            return hljs.highlightAuto(code, [lang]).value
        }
        })
    }
}
</script>