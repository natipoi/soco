<template>
  <div>

    <section class="section" id="menu-section">
        <h2 class="h2 side-space gray">MENU</h2>
        <p :class="{ 'catch-phrase side-space': true }">
            ソコソコ多様なメニューが、<span class="sp-br"></span>
            <ruby><rb>soco</rb><rp>（</rp><rt>ソコ</rt><rp>）</rp></ruby>に。
        </p>
        <div class="bar-items side-space">
            <div class="bar-item" v-for="(product, key) in products" :key=key>
                <div class="bar-item-category">
                    <p class="bar-item-category-name" v-if="product.fields.category">{{ product.fields.category }}</p>
                    <p class="bar-item-price" v-if="product.fields.price">{{ product.fields.price }}</p>
                    <span class="item-pulldown only-sp" :data="product.sys.id"></span>
                </div>
                <div :pulldown="product.sys.id" class="bar-item-category-wrap">
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

.person-hours {display: none;}

.story {display: block;margin-bottom: 50px;}
.story-order {font-size: 0.8rem;text-align:center;margin-bottom: 10px;}
.story-image {position: relative;overflow:hidden; height:calc(100vw * 0.6);margin-bottom: 10px;}
.strory-body {font-size: 0.9rem; margin-bottom: 30px; display: -webkit-box; -webkit-line-clamp: 7; -webkit-box-orient: vertical;overflow: hidden;}
.reservation-text {font-size: 0.9rem;margin-bottom: 30px;}
.reservation-info {display: flex; flex-wrap: nowrap; align-items: center;}
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
    
    .h3 {margin-bottom: 0; font-size: 1.2rem; margin-top: 0;}
    .catch-phrase {font-size: 1.5rem; margin-bottom: 30px;}

    .bar-items { display: -webkit-flex; display: flex; -webkit-flex-wrap: wrap; flex-wrap: wrap;-webkit-flex-direction: column;flex-direction: column;}
    .bar-item {width: 44%; }
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

    var now = window.innerWidth;
    $(window).resize(function(){
        if (now < 820 && window.innerWidth >= 820) {
        changeMenuHeight()
        }
        if (now >= 820 &&  window.innerWidth < 820 ){
        $(".bar-items").height("auto");

        }
        console.log("now is " + now)
        now = window.innerWidth
    })

    function changeMenuHeight(){
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
        if (window.innerWidth >= 820 ){
            
            var categoryH = 0
            $(".bar-item").each(function(){
                categoryH += $(this).height()
            })
            console.log("categoryH is " + categoryH)
            var scale = 2.0;
            var cnt = 1
            while(cnt <= 20) {
                $(".bar-items").height(categoryH / scale )
                const lastItemLeft = $(".bar-item").last().position().left;
                const menuWidth = $(".bar-item-category-menu").last().width();
                const lastItemRight = lastItemLeft + menuWidth;
                const barItemsWidth = $(".bar-items").position().left + $(".bar-items").width();
                console.log("barItemsWidth is " + barItemsWidth)
                console.log("lastItemRight is " + lastItemRight)
                if (barItemsWidth < lastItemRight) {
                    scale -= 0.1
                    cnt ++;
                } else {
                    break;
                }
            }
        }
    }
    changeMenuHeight()
    
    
  })
}


</script>
