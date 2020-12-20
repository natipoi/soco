<template>
<div>
    <section class="contents-mv">
        <div class="contents-mv-text">
            <h1 class="contents-mv-h1"></h1>
        </div>
        <div class="contents-mv-image-wrap">
          <picture class="contents-mv-image only-day">
            <source media="(max-width: 820px)" srcset="~/assets/kitchen/main_sp.jpg">
            <source media="(min-width: 821px)" srcset="~/assets/kitchen/main_pc.jpg">
            <img class="img" src="~/assets/kitchen/main_pc.jpg" alt="メインビジュアル">
          </picture>
          <picture class="contents-mv-image only-night">
            <source media="(max-width: 820px)" srcset="~/assets/bar/main_sp.jpg">
            <source media="(min-width: 821px)" srcset="~/assets/bar/main_pc.jpg">
            <img class="img" src="~/assets/bar/main_pc.jpg" alt="メインビジュアル">
          </picture>
        </div>
    </section>


    <section class="contents-navi-section only-pc">
        <div class="contents-navi-wrap">
            <ul class="contents-navi">
                <li><nuxt-link v-scroll-to="'#schedule-section'" to>SCHEDULE</nuxt-link></li>
                <li><nuxt-link v-scroll-to="'#past-schedule-section'" to>STORIES</nuxt-link></li>
                <li><nuxt-link v-scroll-to="'#reservation-section'" to>RESERVATIONS</nuxt-link></li>
                <li><nuxt-link v-scroll-to="'#info-section'" to>INFO</nuxt-link></li>
            </ul>
        </div>
    </section>

    <section class="section" id="schedule-section">
        <h2 class="h2 side-space gray">FUTURE EVENT</h2>
        <p :class="{ 'catch-phrase side-space': true }">
            <ruby><rb>soco</rb><rp>（</rp><rt>ソコ</rt><rp>）</rp></ruby>の今後のイベント
        </p>
        <div class="event side-space">
            <div class="event" v-for="(event, key) in future_events" :key=key>
                <p class="event-date">{{ event.fields.event_start_time }} 〜 {{ event.fields.event_end_time}}</p>
                <nuxt-link :to="`/events/${event.fields.slug}`" class="event-box">
                    <div class="event-image">
                        <img :src="event.fields.image.fields.file.url" :alt="event.fields.image.fields.description" class="img">
                    </div>
                    <div class="event-text">
                        <div class="event-intro">
                            <div class="event-title-wrap"><p class="event-title">{{ event.fields.title }}</p><p class="event-price">参加料: {{ event.fields.price }}円</p></div>
                            <p class="event-description">{{ event.fields.description }}</p>
                        </div>
                    </div>
                </nuxt-link>
            </div>
        </div>
    </section>
    <section class="section" id="past-schedule-section">
        <h2 class="h2 side-space gray">PAST EVENT</h2>
        <p :class="{ 'catch-phrase side-space': true }">
            <ruby><rb>soco</rb><rp>（</rp><rt>ソコ</rt><rp>）</rp></ruby>の過去のイベント
        </p>
        <div class="atrticles-box1 side-space">
            <div class="atrticle-box1" v-for="(event, key) in past_events" :key=key>
            <nuxt-link 
                :to="`/events/${event.fields.slug}`">
                <div class="atrticle-box1-img">
                    <img :src="event.fields.image.fields.file.url" :alt="event.fields.image.fields.description" class="img">
                </div>
                <div class="atrticle-box1-text">
                <p 
                    :class="{ 'atrticle-box1-heading': true }"
                >
                    {{ event.fields.title }}
                </p>
                <p class="atrticle-box1-date gray">{{ event.fields.event_start_time }}〜{{ event.fields.event_end_time}}</p>
                </div>
            </nuxt-link>
            </div>
        </div>
    </section>

    <section class="section" id="reservation-section">
        <h2 class="h2 side-space gray">RESERVATIONS</h2>
        <p :class="{ 'catch-phrase side-space': true }">
            <ruby><rb>soco</rb><rp>（</rp><rt>ソコ</rt><rp>）</rp></ruby>のイベント予約
        </p>
        <div class="side-space">
            <div class="reservation-image-wrap">
                <img class="reservation-image">
            </div>
            <div class="reservation-detail">
                <ul>
                    <li>最大収容人数：30人</li>
                    <li>最大収容人数：30人</li>
                    <li>最大収容人数：30人</li>
                </ul>
            </div>
            <div class="contact-text">
                <p>soco Live / Talk / Gallery への登壇、出展を随時募集しております。<br>関心のある方は以下のボタンからメールでお問い合わせください。</p>
            </div>
            <div class="contact-btn-wrap">
                <a href="mailto:support@soco-kyoto.com" class="contact-btn">メールで問い合わせる</a>
            </div>
        </div>

    </section>

    <section class="section" id="info-section">
        <h2 class="h2 side-space gray">INFO</h2>
        <p :class="{ 'catch-phrase side-space': true }">
            京都の
            <ruby><rb>soco</rb><rp>（</rp><rt>ソコ</rt><rp>）</rp></ruby>まで。
        </p>
        <Map />
    </section>
</div>
</template>
<style>
.contents-mv-h1:before, .dark_mode .contents-mv-h1:before{content: "Live / Talk / Gallery"}
#event-section { margin-top: 30px !important;}
.h2 { font-size: .9rem;margin-bottom: 10px;font-weight: 400;}
.catch-phrase { font-weight: 900;font-size: 1.5rem;line-height: 1;margin-bottom: 30px;}
.event-date {font-weight:900;font-size: 1.2rem;}
.event-box {display: flex; flex-wrap: nowrap;align-items: flex-start;margin-bottom: 20px;color: #000;}
.reservation-image-wrap {width: 100%;height: 400px; background: #e5e5e5;margin-bottom: 30px;}
.event-image { position: relative; width: 25%; height: 12vw;overflow: hidden;}
.event-text {flex: 1; margin-left: 20px;}
.event-title {font-weight:900;font-size: 1.2rem;}
.event-title-wrap {display: flex;align-items: center;}
.event-price {margin-left: 30px;color:#a2a2a2}
.contact-btn-wrap {margin-top: 30px;}
.contact-btn {background: #f2cb0c;color: #fff;border-radius: 5px;font-weight:900;padding: 10px 20px;font-size: 1.2rem;}

@media screen and (min-width: 820px) {
    .contents-navi li:last-child, .navi li:nth-child(6) {
        border-left: none;
    }
}

</style>

<script>
  import {createClient} from '~/plugins/contentful.js'
  import moment from "moment";

  const client = createClient()
  export default {

    asyncData ({env, active}) {
      
      return Promise.all([
        // fetch the owner of the blog
        client.getEntries({
          'sys.id': env.CTF_PERSON_ID
        }),
        // fetch all blog posts sorted by creation date
        client.getEntries({
          'content_type': 'event',
          "fields.event_end_time[gte]": moment().format("YYYY-MM-DD"),
           order: '-fields.event_start_time'
        }),
        client.getEntries({
          'content_type': 'event',
          "fields.event_end_time[lte]": moment().format("YYYY-MM-DD"),
           order: '-fields.event_start_time'
        })
      ]).then(([entries, future_event, past_event]) => {
        for ( var e of future_event.items) {
            var start_date = moment(e.fields.event_start_time);
            console.log(start_date)
            var end_date = moment(e.fields.event_end_time);
            e.fields.event_start_time = start_date.format("YYYY年MM月DD日 h:mm a");
            e.fields.event_end_time = end_date.format("h:mm a");
        }
        for ( var e of past_event.items) {
            var start_date = moment(e.fields.event_start_time);
            console.log(start_date)
            var end_date = moment(e.fields.event_end_time);
            e.fields.event_start_time = start_date.format("YYYY/MM/DD h:mm a");
            e.fields.event_end_time = end_date.format("h:mm a");
        }

        return {
          future_events: future_event.items,
          past_events: past_event.items
        }
      }).catch(e => console.log("err", e))
    },
    head () {
        return {
            title: "socoのイベント｜soco",
            meta: [
                { hid: 'og:title', property: 'og:title', content: "socoのイベント｜soco" },
                { hid: 'og:url', property: 'og:url', content: `https://soco-kyoto.com/event/` },
                // { hid: 'og:image', property: 'og:image', content: this.post.fields.heroImage.fields.file.url },
            ],
            link: [
                { hid:"canonical", rel: "canonical", href: `https://soco-kyoto.com/event/` }
            ]
        }
    }
  }
</script>