<template>
  <div class="container">
    <section class="main">
        <div class="main-text">
            <h1 class="kitchen-bar-h1"></h1>
            <p class="main-heading">
                <span class="only-day">OPEN 9:00 | CLOSE 18:00 (L.O. 17:30)</span>
                <span class="only-night">OPEN 18:00 | CLOSE 24:00 (L.O. 23:30)</span>
                <br>Tel: 070-xxxx-xxxx
            </p>
        </div>
        <div class="main-visual-wrap">
          <picture class="main-visual only-day">
            <source media="(max-width: 820px)" srcset="~/assets/kitchen/main_sp.jpg">
            <source media="(min-width: 821px)" srcset="~/assets/kitchen/main_pc.jpg">
            <img class="img" src="~/assets/kitchen/main_pc.jpg" alt="メインビジュアル">
          </picture>
          <picture class="main-visual only-night">
            <source media="(max-width: 820px)" srcset="~/assets/bar/main_sp.jpg">
            <source media="(min-width: 821px)" srcset="~/assets/bar/main_pc.jpg">
            <img class="img" src="~/assets/bar/main_pc.jpg" alt="メインビジュアル">
          </picture>
        </div>
    </section>
    <section class="navi-section only-pc">
        <div class="navi-wrap">
            <ul class="navi">
                <li><nuxt-link v-scroll-to="'#menu-section'" to>MENU</nuxt-link></li>
                <li><nuxt-link v-scroll-to="'#story-section'" to>STORIES</nuxt-link></li>
                <li><nuxt-link v-scroll-to="'#chef-section'" to>CHEFS</nuxt-link></li>
                <li><nuxt-link v-scroll-to="'#info-section'" to>INFO</nuxt-link></li>
                <li><nuxt-link v-scroll-to="'#reservation-section'" to>RESERVATIONS</nuxt-link></li>
                <li class="only-day"><a href="/bar/">BAR</a></li>
                <li class="only-night"><a href="/kitchen/">KITCHEN</a></li>
            </ul>
        </div>
    </section>

    <section class="section" id="menu-section">
        <h2 class="h2 side-space gray">MENU</h2>
        <p :class="{ 'catch-phrase side-space': true }">
            ソコソコ多様なメニューが、<span class="sp-br"></span>
            <ruby><rb>soco</rb><rp>（</rp><rt>ソコ</rt><rp>）</rp></ruby>に。
        </p>
        <div class="items side-space">
            <div class="item" v-for="product in products">
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

    <!-- blog-->
    <section class="section" id="story-section">
        <h2 class="h2 side-space gray">STORIES</h2>
        <p :class="{ 'catch-phrase side-space': true }">
            <ruby><rb>soco</rb><rp>（</rp><rt>ソコ</rt><rp>）</rp></ruby>
            から始まった。
        </p>

        <div class="stories side-space">
            <div href="" class="story">
                <div class="strory-heading">
                    <p class="story-order gray">1ST STORY</p>
                    <h3 class="h3">インドネシア土壌再生の象徴、バニラビーンズ</h3>
                </div>

                <div class="strory-detail">
                    <div class="story-image">
                        <img src="~/assets/kitchen/item.jpg" class="img">
                    </div>

                    <div class="story-content">
                        <p class="strory-body">
                        Socoオーナーのケイちゃんがインドネシアの土壌を再生させたその土地で育てたバニラビーンズ。森林伐採で深刻な問題を抱えていたインドネシアの土地の再生と共に成長したこのバニラビーンズは。。。<br>
                        Socoオーナーのケイちゃんがインドネシアの土壌を再生させたその土地で育てたバニラビーンズ。森林伐採で深刻な問題を抱えていたインドネシアの土地の再生と共に成長したこのバニラビーンズは。。。
                        </p>
                        <div class="positive-button">
                            <a href="javascript:void(0)">続きを読む</a>
                        </div>
                    </div>
                </div>
            </div>

            <div href="" class="story">
                <div class="strory-heading">
                    <p class="story-order gray">1ST STORY</p>
                    <h3 class="h3">インドネシア土壌再生の象徴、バニラビーンズ</h3>
                </div>
                <div class="strory-detail">
                    <div class="story-image">
                        <img src="~/assets/kitchen/item.jpg" class="img">
                    </div>

                    <div class="story-content">
                        <p class="strory-body">
                        Socoオーナーのケイちゃんがインドネシアの土壌を再生させたその土地で育てたバニラビーンズ。森林伐採で深刻な問題を抱えていたインドネシアの土地の再生と共に成長したこのバニラビーンズは。。。<br>
                        Socoオーナーのケイちゃんがインドネシアの土壌を再生させたその土地で育てたバニラビーンズ。森林伐採で深刻な問題を抱えていたインドネシアの土地の再生と共に成長したこのバニラビーンズは。。。
                        </p>
                        <div class="positive-button">
                            <a href="javascript:void(0)">続きを読む</a>
                        </div>
                    </div>
                </div>
            </div>


        </div>
    </section>

    <section class="section" id="chef-section">
        <h2 class="h2 side-space gray">CHFES</h2>
        <p :class="{ 'catch-phrase side-space': true }">
            いつでも
            <ruby><rb>soco</rb><rp>（</rp><rt>ソコ</rt><rp>）</rp></ruby>に。
        </p>
        

        <Person />
        <Person />


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
                <p class="">070-6548-8399<br>受付時間 9:00 ~ 18:00</p>
            </div>
        </div>
    </section>

  </div>
</template>


<style>
.h2 { font-size: 0.9rem; margin-bottom: 10px; font-weight: 400;}
.catch-phrase {font-weight: 900; font-size: 1.2rem; line-height: 1; margin-bottom: 30px;}
.h3 {font-weight: 400;font-size: 1.0rem;margin-bottom: 5px;}
.kitchen-bar-h1 {position: relative; color: #00BFFF; margin-top: 0; margin-bottom: 0px;font-weight: 900; font-size: 3.0rem;text-shadow: 0px 0px 10px rgba(0,0,0,0.8);}
.kitchen-bar-h1:before {content: "Kitchen"}
.main-text {position: absolute; width: 100%; text-align: center; top: 50%; left: 50%; transform: translate(-50%, -30%);-webkit-transform: translate(-50%, -50%); -ms-transform: translate(-50%, -50%); z-index: 2;}
.main-heading {color: #fff; font-size: 0.9rem;line-height: 1.7;    text-shadow: 0px 0px 2px rgba(0,0,0,0.8);font-weight: 900;}

.main-visual-wrap {position: relative; z-index: 1; height: 100%;width: 100%;}


.item {display: flex; flex-wrap: nowrap; align-items: center; margin-bottom: 20px;}
.item-image {position: relative; width: 30%; height: calc(100vw * 0.15); overflow: hidden;}

.item-text {flex: 1;margin-left: 20px;}

.person-hours {display: none;}

.story {display: block;margin-bottom: 50px;}
.story-order {font-size: 0.8rem;text-align:center;margin-bottom: 10px;}
.story-image {position: relative;overflow:hidden; height:calc(100vw * 0.6);margin-bottom: 10px;}
.strory-body {font-size: 0.9rem; margin-bottom: 30px;}
.reservation-text {font-size: 0.9rem;margin-bottom: 30px;}
.reservation-info {display: flex; flex-wrap: nowrap; align-items: center;}
.tel-button {}
.reservation-tel {flex:1; margin-left: 10px;}
.reservation-tel p {font-size: 0.9rem;line-height: 1.6;}

@media screen and (min-width: 820px){
    .main {margin-bottom: 0;}
    .h3 {margin-bottom: 0; font-size: 1.2rem;}
    .catch-phrase {font-size: 1.5rem; margin-bottom: 30px;}
    .navi-wrap {box-shadow: 2px 0 10px rgba(0,0,0,0.1); margin-bottom: 80px;}
    .navi {display: flex; flex-wrap: nowrap; justify-content:space-between; max-width: 800px; margin: 0 auto;}
    .navi li { margin: 20px 0px; width: 120px; text-align: center; max-width: calc(100vw / 6);}
    .navi li a {color: #000;}
    .navi li:last-child, .navi li:nth-child(6) {border-left: solid 1px #000;}
    
    .navi li:hover {cursor: pointer;}

    .item {margin-bottom: 30px;}
    .item-intro {display: flex; flex-wrap: nowrap; align-items: center; margin-bottom: 10px;}
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
export default {
    props: {
        products: {
            type: Array,
            default: []
        }
  }
}

if (process.client) {

$(function(){

})

}
</script>
