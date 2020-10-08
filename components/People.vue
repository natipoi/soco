<template>
<div>
<div class="person-introduction side-space" v-for="person in people">
    <div class="person-image">
        <img :src="person.fields.image.fields.file.url" :alt="person.fields.image.fields.description" class="img">
    </div>
    <div class="person-text">
        <p :class="{ 'person-name': true }">{{ person.fields.name }}</p>
        <!--<p class="person-hours gray">出没時間: {{ person.fields.time }}</p>-->
        <p :class="{ 'person-description': true }">
            {{ person.fields.shortBio }}
        </p>
    </div>
</div>
</div>
</template>

<style>

.person-introduction {display: flex; flex-wrap: nowrap; margin-bottom: 40px;}
.person-image {position: relative; width: 30vw; height: 30vw; overflow: hidden; border-radius: 50%;}
.person-text {flex: 1;margin-left: 10px; text-align:left;}
.person-name {font-size: 1.2rem;}
.person-hours {font-size: 0.9rem;}
.person-description {font-size: 0.9rem;}
@media screen and (min-width: 820px){
.person-introduction {max-width: 700px; margin-left: auto; margin-right: auto;}
.person-image {width: 120px; height: 120px; margin-right: 30px;}

}
</style>

<script>
export default {
    props: {
        people: {
            type: Array,
            default: []
        }
    }
}
</script>
