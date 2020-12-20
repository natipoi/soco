<template>
  <div>
    <section class="section" id="menu-section">
        <h2 class="h2 side-space gray">MENU</h2>
        <p :class="{ 'catch-phrase side-space': true }">
            ソコソコ多様なメニューが、<span class="sp-br"></span>
            <ruby><rb>soco</rb><rp>（</rp><rt>ソコ</rt><rp>）</rp></ruby>に。
        </p>
        <div class="items side-space">
            <div class="item" v-for="(product, key) in products" :key=key>
                <div class="item-image">
                    <img :src="product.fields.image.fields.file.url" :alt="product.fields.image.fields.description" class="img">
                </div>
                <div class="item-text">
                    <div class="item-intro">
                        <h3 class="h3 item-name">{{ product.fields.name }}</h3>
                        <p class="gray item-price">{{ product.fields.price }}円（税抜）</p>
                    </div>
                    <p class="only-pc item-detail">
                        {{ product.fields.detail }}
                    </p>
                </div>
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

    <section class="section" id="reservation-section">
        <h2 class="h2 side-space gray">RESERVATIONS</h2>
        <p :class="{ 'catch-phrase side-space': true }">
        <ruby><rb>soco</rb><rp>（</rp><rt>ソコ</rt><rp>）</rp></ruby>の空き時間に。
        </p>
        <p class="reservation-text side-space">
            soco Kitchenではご予約予定日の1ヶ月前より予約を承っております。<br>
            予約をご希望の方はお電話にて問い合わせていただけるようお願いいたします。
        </p>
        <div class="reservation-info side-space">
            <div class="tel-button">
                <div class="positive-button">
                    <a href="">電話をかける</a>
                </div>
            </div>
            <div class="reservation-tel">
                <p class="">075-285-4385<br>受付時間 9:00 ~ 18:00</p>
            </div>
        </div>
    </section>
  </div>
</template>


<style>


.h2 { font-size: 0.9rem; margin-bottom: 10px; font-weight: 400;}
.catch-phrase {font-weight: 900; font-size: 1.2rem; line-height: 1; margin-bottom: 30px;}
.h3 {font-weight: 400;font-size: 1.0rem;margin-bottom: 5px;}


.item {display: flex; flex-wrap: nowrap; align-items: center; margin-bottom: 20px;}
.item-image {position: relative; width: 30%; height: calc(100vw * 0.15); overflow: hidden;}

.item-text {flex: 1;margin-left: 20px;}

.person-hours {display: none;}

.story {display: block;margin-bottom: 50px;}
.story-order {font-size: 0.8rem;text-align:center;margin-bottom: 10px;}
.story-image {position: relative;overflow:hidden; height:calc(100vw * 0.6);margin-bottom: 10px;}
.strory-body {font-size: 0.9rem; margin-bottom: 30px; display: -webkit-box; -webkit-line-clamp: 7;
	-webkit-box-orient: vertical;
	overflow: hidden;}
.reservation-text {font-size: 0.9rem;margin-bottom: 30px;}
.reservation-info {display: flex; flex-wrap: nowrap; align-items: center;}s
.reservation-tel {flex:1; margin-left: 10px;}
.reservation-tel p {font-size: 0.9rem;line-height: 1.6;}

@media screen and (min-width: 820px){
    
    .h3 {margin-bottom: 0; font-size: 1.2rem; margin-top: 0;}
    .catch-phrase {font-size: 1.5rem; margin-bottom: 30px;}
    
    

    .item {margin-bottom: 30px;}
    .item-intro {display: flex; flex-wrap: nowrap; align-items: center; margin-bottom: 10px;align-items: baseline;}
    .item-price {margin-left: 20px;flex: 1;}
    .item-image {height: 100px; width: 150px;}
    .item-image img {width: 100%; height: auto;}

    .strory-heading {display: flex; flex-wrap: nowrap; align-items: center; margin-bottom: 30px;}
    .story-order {position:relative; margin-bottom: 0; margin-right: 180px; font-size: 1.1rem;}
    .story-order:after {content: ""; position:absolute; width: 60px; height: 1px; background:#A2A2A2;top: 50%; left: 200%;  transform: translateY(-50%);-webkit-transform: translateY(-50%); -ms-transform: translateY(-50%);}

    .strory-detail {display: flex;    align-items: end;}
    .story-image {width: 50%; height: 300px;}
    .story-image img {height: 100%; width: auto;}
    .story-content {flex: 1;margin-left: 20px !important;}
    .story { margin-bottom: 70px;}

    .person-introduction {margin-left: 0 !important; max-width: 700px;}

    
}

</style>

<script>
import People from '~/components/People.vue'

export default {
    components: {
      People
    },
    props: {
        products: {
            type: Array,
            default: []
        },
        stories: {
            type: Array,
            default: []
        },
        people: {
            type: Array,
            default: []
        }
    }
}

</script>
