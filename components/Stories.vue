<template>

<div class="atrticle-box1">
<nuxt-link 
    :to="`/stories/${slug}`">
    <div class="atrticle-box1-img">
    <img 
        :src=image
        :alt=alt
        class="img"
    >
    </div>
    <div class="atrticle-box1-text">
    <p 
        :class="{ 'atrticle-box1-heading': true }"
    >
        {{ title }}
    </p>
    <p class="atrticle-box1-date gray">{{ publish }}</p>
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
