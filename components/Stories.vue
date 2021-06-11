<template>

<div class="blog">
<nuxt-link 
    :to="`/news/${slug}`">
    <div class="blog-img">
    <img 
        :src=image
        :alt=alt
        class="img"
    >
    </div>
    <div class="blog-text">
    <p 
        :class="{ 'blog-heading': true }"
    >
        {{ title }}
    </p>
    <p class="blog-date gray">{{ publish }}</p>
    </div>
</nuxt-link>
</div>
</template>
<script>
export default {
    props: {
        title: {
            type: String,
            default: ''
        },
        slug: {
            type: String,
            default: ''
        },
        image: {
            type: String,
            default: ''
        },
        alt: {
            type: String,
            default: ''
        },
        publish: {
            type: String,
            default: ''
        }
  }
}

</script>

<style>
.blog { margin-bottom: 50px; }
.blog a {display: block; color: #000;}
.blog-img {position: relative; width: 100%;height: calc(100vw * 0.6);overflow:hidden;margin-bottom: 10px;}
.blog-heading {text-align:left;font-size: 1.1rem;margin-bottom: 5px; }
.blog-date {text-align: right; font-size:0.9rem;}

@media screen and (min-width: 820px){
  .blogs {display:flex;flex-wrap: wrap;justify-content: flex-start; }
  .blog {width: 30%; margin-right: 5%;}
  .blog:nth-child(3n){margin-right:0;}
  .blog-img {height: 150px;}
  .blog-heading {line-height: 1.5;font-size: 0.9rem;}
  .blog-date {font-size:0.8rem;}
}
</style>
