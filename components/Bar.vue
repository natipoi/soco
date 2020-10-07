<template>
  <div class="container">
    <section class="main">
        <div class="main-text">
            <h1 class="kitchen-bar-h1"></h1>
            <p class="main-heading">
                <span class="only-day">OPEN 11:00 | CLOSE 17:00 (L.O. 16:30)</span>
                <span class="only-night">OPEN 18:00 | CLOSE late</span>
                <br>Tel: 075-285-4385
                
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
        <div class="bar-items side-space">
            <div class="bar-item"　v-for="product in products">
                <div class="bar-item-category">
                    <p class="bar-item-category-name" v-if="product.fields.category">{{ product.fields.category }}</p>
                    <p class="bar-item-price" v-if="product.fields.price">{{ product.fields.price }}</p>
                    <span class="item-pulldown only-sp" data="{{ product.fields.category }}"></span>
                </div>
                <div pulldown="{{ product.fields.category }}" class="bar-item-category-wrap">
                    <div class="bar-item-category-menu">
                        <div class="bar-item-image">
                            <div v-if="product.fields.categoryImage">
                                <img :src="product.fields.categoryImage.fields.file.url">
                            </div>
                        </div>
                        <div class="bar-item-menu js-item-menu" v-if="product.fields">
                            <p class="bar-item-name">{{ product.fields.product1 }}</p>
                            <p class="bar-item-name">{{ product.fields.product2 }}</p>
                            <p class="bar-item-name">{{ product.fields.product3 }}</p>
                            <p class="bar-item-name">{{ product.fields.product4 }}</p>
                            <p class="bar-item-name">{{ product.fields.product5 }}</p>
                            <p class="bar-item-name">{{ product.fields.product6 }}</p>
                            <p class="bar-item-name">{{ product.fields.product7 }}</p>
                            <p class="bar-item-name">{{ product.fields.product8 }}</p>
                            <p class="bar-item-name">{{ product.fields.product9 }}</p>
                            <p class="bar-item-name">{{ product.fields.product10 }}</p>
                            <p class="bar-item-name">{{ product.fields.product11 }}</p>
                            <p class="bar-item-name">{{ product.fields.product12 }}</p>
                            <p class="bar-item-name">{{ product.fields.product13 }}</p>
                            <p class="bar-item-name">{{ product.fields.product14 }}</p>
                            <p class="bar-item-name">{{ product.fields.product15 }}</p>
                        </div>
                    </div>     
                </div>         
            </div>
            
        </div>

    </section>

    <!-- blog-->
    <!--<section class="section" id="story-section">
        <h2 class="h2 side-space gray">STORIES</h2>
        <p :class="{ 'catch-phrase side-space': true }">
            <ruby><rb>soco</rb><rp>（</rp><rt>ソコ</rt><rp>）</rp></ruby>
            から始まった。
        </p>

        <div class="stories side-space">

            <div href="" class="story" v-for="story in stories">
                <div class="strory-heading">
                    <h3 class="h3">{{ story.fields.title }}</h3>
                </div>

                <div class="strory-detail">
                    <div class="story-image">
                        <img :src="story.fields.heroImage.fields.file.url" :alt="story.fields.heroImage.fields.description" class="img">
                    </div>

                    <div class="story-content">
                        <p class="strory-body">
                        {{ story.fields.description }}
                        </p>
                        <div class="positive-button">
                        <nuxt-link 
                            :to="`/stories/${story.fields.slug}`">続きを読む
                            </nuxt-link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>-->

    <!--<section class="section" id="chef-section">
        <h2 class="h2 side-space gray">CHFES</h2>
        <p :class="{ 'catch-phrase side-space': true }">
            いつでも
            <ruby><rb>soco</rb><rp>（</rp><rt>ソコ</rt><rp>）</rp></ruby>に。
        </p>
        <People 
          :people="people"
        />
    </section>-->

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
.kitchen-bar-h1 {position: relative; color: #00BFFF; margin-top: 0; margin-bottom: 0px;font-weight: 900; font-size: 3.0rem;text-shadow: 0px 0px 10px rgba(0,0,0,0.8);}
.kitchen-bar-h1:before {content: "Kitchen"}
.main-text {position: absolute; width: 100%; text-align: center; top: 50%; left: 50%; transform: translate(-50%, -30%);-webkit-transform: translate(-50%, -50%); -ms-transform: translate(-50%, -50%); z-index: 2;}
.main-heading {color: #fff; font-size: 0.9rem;line-height: 1.7;    text-shadow: 0px 0px 2px rgba(0,0,0,0.8);font-weight: 900;}

.main-visual-wrap {position: relative; z-index: 1; height: 100%;width: 100%;}




.person-hours {display: none;}

.story {display: block;margin-bottom: 50px;}
.story-order {font-size: 0.8rem;text-align:center;margin-bottom: 10px;}
.story-image {position: relative;overflow:hidden; height:calc(100vw * 0.6);margin-bottom: 10px;}
.strory-body {font-size: 0.9rem; margin-bottom: 30px; display: -webkit-box; -webkit-line-clamp: 7; -webkit-box-orient: vertical;overflow: hidden;}
.reservation-text {font-size: 0.9rem;margin-bottom: 30px;}
.reservation-info {display: flex; flex-wrap: nowrap; align-items: center;}
.tel-button {}
.reservation-tel {flex:1; margin-left: 10px;}
.reservation-tel p {font-size: 0.9rem;line-height: 1.6;}


.bar-item { margin-bottom: 20px;}
.bar-item-category {display: flex;align-items: center; width: 100%;margin-bottom: 10px;border-bottom: solid 2px rgba(255, 255, 255, 0.3);}
.bar-item-price {margin-left: auto;}
.bar-item-category-menu {display: flex;}
.bar-item-category-name {font-size: 1.2rem;}
.bar-item-name {text-align: right;}
.bar-item-image {position: relative; width: 40%; height: 150px; overflow:hidden;}
.bar-item-image img {position: absolute; width: 100%; top: 50%; left: 50%; transform: translate(-50%, -50%);}
.bar-item-menu {flex: 1;margin-left: 10px;}
.item-pulldown {display:block; width: 40px;padding-left: 10px;}
.item-pulldown:before {content: "\f107"; transform: scale(1,1); color: #fff;font-size: 1.5rem; font-family: "Font Awesome 5 Free"; font-weight: 900; display: block;text-align: center;transition: all 0.3s;}
.item-show-pulldown:before {transform: scale(1,-1); transition: all 0.3s;}
.bar-item-category-wrap {display: none;}

@media screen and (min-width: 820px){
    .main {margin-bottom: 0;}
    
    .h3 {margin-bottom: 0; font-size: 1.2rem; margin-top: 0;}
    .catch-phrase {font-size: 1.5rem; margin-bottom: 30px;}
    .navi-wrap {box-shadow: 2px 0 10px rgba(0,0,0,0.1); margin-bottom: 80px;}
    .navi {display: flex; flex-wrap: nowrap; justify-content:space-between; max-width: 800px; margin: 0 auto;}
    .navi li { margin: 20px 0px; width: 120px; text-align: center; max-width: calc(100vw / 6);}
    .navi li a {color: #000;}
    .navi li:last-child, .navi li:nth-child(6) {border-left: solid 1px #000;}
    
    .navi li:hover {cursor: pointer;}

    .bar-items { display: -webkit-flex; display: flex; -webkit-flex-wrap: wrap; flex-wrap: wrap;-webkit-flex-direction: column;flex-direction: column;}
    .bar-item {width: 43%; }
    .bar-item-category-name {font-size: 1.4rem;}
    .bar-item-category-wrap {display: block;}
    .only-sp {display: none;}
    
    

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

if (process.client) {

  $(function(){
    $(".js-item-menu").each(function(index){
        const menuH = $(this).height()
        if ( menuH > 150 ) {
            $(this).prev().height(menuH)
        }
        const imgWrapW = $(this).prev().width()
        const imgWrapH = $(this).prev().height()
        const imgW = $(this).prev().children().children().width()
        const imgH = $(this).prev().children().children().height()
        var scaleImgH = imgWrapH * imgW  / imgWrapW
        if (scaleImgH > imgH) {
            $(this).prev().children().css({
                "height": "100%",
                "width": "auto"
            });
            $(this).prev().children().children().css({
                "height": "100%",
                "width": "auto"
            })
        }
    
    })

    $(".item-pulldown").on("click", function(e){
        const data = $(this).attr("data");
        const showPulldown = $("div[pulldown=" + data + "]")
        if ( showPulldown.css("display") == "none" ) {
            $(this).addClass("item-show-pulldown");
            showPulldown.slideDown()
        } else {
            showPulldown.slideUp()
            $(this).removeClass("item-show-pulldown")
        }
        
    })
    var categoryH = 0
    $(".bar-item").each(function(){
        categoryH += $(this).height()
    })
    console.log("categoryH is " + categoryH)
    $(".bar-items").height(categoryH / 1.4 )
  })
}


</script>
