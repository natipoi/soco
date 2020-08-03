<template>
  <div class="container">
    <section class="main">
      <div class="slide-dots main-slide-dots">
        <span class="slide-dot slide-dot-selected"></span>
        <span class="slide-dot"></span>
        <span class="slide-dot"></span>
        <span class="slide-dot"></span>
        <span class="slide-dot"></span>
      </div>
      <div class="main-visuals">
        <div class="main-visual-wrap">
          <picture class="main-visual">
            <source media="(max-width: 820px)" srcset="~/assets/main_sp.jpg">
            <source media="(min-width: 821px)" srcset="~/assets/main_pc.jpg">
            <img src="~/assets/main_pc.jpg" class="main-img" alt="メインビジュアル">
          </picture>
        </div>

        <div class="main-visual-wrap">
          <picture class="main-visual">
            <source media="(max-width: 820px)" srcset="~/assets/main_sp2.jpg">
            <source media="(min-width: 821px)" srcset="~/assets/main_pc2.jpg">
            <img src="~/assets/main_pc2.jpg" alt="メインビジュアル" class="main-img">
          </picture>
        </div>
        <div class="main-visual-wrap">
          <picture class="main-visual">
            <source media="(max-width: 820px)" srcset="~/assets/main_sp3.jpg">
            <source media="(min-width: 821px)" srcset="~/assets/main_pc3.jpg">
            <img src="~/assets/main_pc3.jpg" alt="メインビジュアル" class="main-img">
          </picture>
        </div>
        <div class="main-visual-wrap">
          <picture class="main-visual">
            <source media="(max-width: 820px)" srcset="~/assets/main_sp4.jpg">
            <source media="(min-width: 821px)" srcset="~/assets/main_pc4.jpg">
            <img src="~/assets/main_pc4.jpg" alt="メインビジュアル" class="main-img">
          </picture>
        </div>
        <div class="main-visual-wrap">
          <picture class="main-visual">
            <source media="(max-width: 820px)" srcset="~/assets/main_sp.jpg">
            <source media="(min-width: 821px)" srcset="~/assets/main_pc.jpg">
            <img src="~/assets/main_pc.jpg" alt="メインビジュアル" class="main-img">
          </picture>
        </div>
      </div>
    </section>

    <section class="section">
      <h2 class="h2 side-space gray">socoのコンセプト</h2>
      <p :class="{ 'catch-phrase side-space': true }"><ruby><rb>soco</rb><rp>（</rp><rt>ソコ</rt><rp>）</rp></ruby>にいけば何かある。<span class="sp-br"></span>だからちょっと<ruby><rb>soco</rb><rp>（</rp><rt>ソコ</rt><rp>）</rp></ruby>まで。</p>
      <p :class="{ 'sub-text side-space': true }">さまざまな人や文化がつながり、新しいものをつむぎ出し、それを人びとにつたえる。そんな「場」がsocoです。</p>
      <p :class="{ 'sub-text side-space': true }">生まれたばかりのsocoは、ただのハコ。そこにいのちを吹き込み、かたちを創っていくのは、socoにつどう人びと。</p>
      <p :class="{ 'sub-text side-space': true }">socoにいけば誰かいる、何かがある。だからちょっとsocoまで。</p>
      <p :class="{ 'sub-text side-space': true }">そんな人びとの日常に溶け込んだ空間と時間が、socoにあります。</p>
    </section>

    <section class="section">
      <h2 class="h2 side-space gray">socoの空間</h2>
      <p :class="{ 'catch-phrase side-space': true }">倉庫。いや、<ruby><rb>soco</rb><rp>（</rp><rt>ソコ</rt><rp>）</rp></ruby>。</p>
      <ul id="floor-navi" class="side-space">
        <li :class="{ 'selected': true }">1階</li>
        <li :class="{ 'floor-not-yet': true }">2階</li>
        <li :class="{ 'floor-not-yet': true }">3階</li>
      </ul>
      
      <div class="construction side-space">
        <img src="~/assets/construction_1f.png">
      </div>

      <div class="floor-content">
        <div :class="{ 'floor-heading side-space': true }">
          <Logo />
          <h3 :class="{ 'h3': true }">
            <span class="only-day">Kitchen</span>
            <span class="only-night">Bar</span>
            <span class="gray sub-h3">1階</span>
          </h3>
        </div>
        <div class="floor-content-detail">
          <div class="floor-content-images-wrap only-sp">
            <div class="slide-dots floor-slide-dots">
            <span class='slide-dot selected-dot'></span>
            </div>
            <span attr="left" class="floor-content-images-arrow arrow-left tap-arrow hidden-arrow" data="kitchen"></span>
            <span attr="right" class="floor-content-images-arrow arrow-right tap-arrow" data="kitchen"></span>
            <div class="floor-content-images" id="kitchen-images">
              <div class="floor-content-image">
                  <img class="img" src="~/assets/top/kitchen.jpg" alt="キッチン">
              </div>
              <div class="floor-content-image">
                  <img class="img" src="~/assets/top/kitchen.jpg" alt="キッチン">
              </div>
              <div class="floor-content-image">
                  <img class="img" src="~/assets/top/kitchen.jpg" alt="キッチン">
              </div>
              <div class="floor-content-image">
                  <img class="img" src="~/assets/top/kitchen.jpg" alt="キッチン">
              </div>
            </div>
          </div>
          <div class="floor-content-image only-pc">
            <img class="img" src="~/assets/top/kitchen.jpg" alt="キッチン">
          </div>
          <div class="floor-content-bottom side-space">
            <p :class="{ 'floor-content-text': true }">
              さまざまな人や文化がつながり、新しいものをつむぎ出し、それを人びとにつたえる。そんな「場」がsocoです。<br>
              生まれたばかりのsocoは、ただのハコ。そこにいのちを吹き込み、かたちを創っていくのは、socoにつどう人びと。<br>
              socoにいけば誰かいる、何かがある。だからちょっとsocoまで。<br>
              そんな人びとの日常に溶け込んだ空間と時間が、socoにあります。
            </p>
            <div class="bar-kitchen-text-detail">
              <p class="floor-content-text-detail gray only-day">OPEN 9:00 | CLOSE 18:00 (L.O. 17:30)<br>
              ※18:00以降は「<span class="text-yellow">soco bar</span>」として営業しています。</p>
              <p class="floor-content-text-detail gray only-night">OPEN 18:00 | CLOSE 24:00 (L.O. 23:30)<br>
              ※18:00までは「<span class="text-yellow">soco kitchen</span>」として営業しています。。</p>
            </div>
            <div class="floor-content-button positive-button">
              <a href="/kitchen/" class="only-day">Kitchenを覗く</a>
              <a href="/bar/" class="only-night">Barを覗く</a>
            </div>
          </div>
        </div>
      </div>

      <div class="floor-content">
        <div :class="{ 'floor-heading side-space': true }">
          <Logo />
          <h3 :class="{ 'h3': true }">Labo<span class="gray sub-h3">1階</span></h3>
        </div>
        <div class="floor-content-detail">
          <div class="floor-content-images-wrap only-sp">
            <div class="slide-dots floor-slide-dots">
            <span class='slide-dot selected-dot'></span>
            </div>
            <span attr="left" class="floor-content-images-arrow arrow-left tap-arrow hidden-arrow" data="labo"></span>
            <span attr="right" class="floor-content-images-arrow arrow-right tap-arrow" data="labo"></span>
            <div class="floor-content-images" id="labo-images">
              <div class="floor-content-image">
                  <img class="img" src="~/assets/top/labo.jpg" alt="ラボ">
              </div>
              <div class="floor-content-image">
                  <img class="img" src="~/assets/top/labo.jpg" alt="ラボ">
              </div>
              <div class="floor-content-image">
                  <img class="img" src="~/assets/top/labo.jpg" alt="ラボ">
              </div>
            </div>
          </div>
          <div class="floor-content-image only-pc">
            <img class="img" src="~/assets/top/labo.jpg" alt="ラボ">
          </div>
          <div class="floor-content-bottom side-space">
            <p :class="{ 'floor-content-text': true }">
              さまざまな人や文化がつながり、新しいものをつむぎ出し、それを人びとにつたえる。そんな「場」がsocoです。<br>
              生まれたばかりのsocoは、ただのハコ。そこにいのちを吹き込み、かたちを創っていくのは、socoにつどう人びと。<br>
              socoにいけば誰かいる、何かがある。だからちょっとsocoまで。<br>
              そんな人びとの日常に溶け込んだ空間と時間が、socoにあります。
            </p>
            <p class="floor-content-text-detail gray">OPEN 9:00 | CLOSE 18:00</p>
            <div class="floor-content-button positive-button">
              <a href="javascript:void(0)"　class="floor-not-yet">Laboを覗く</a>
            </div>
          </div>
        </div>
      </div>

      <div class="floor-content">
        <div :class="{ 'floor-heading side-space': true }">
          <Logo />
          <h3 :class="{ 'h3': true }">Rooms<span class="gray sub-h3">2階, 3階</span></h3>
        </div>
        <div class="floor-content-detail">
          <div class="floor-content-images-wrap only-sp">
            <div class="slide-dots floor-slide-dots">
            <span class='slide-dot selected-dot'></span>
            </div>
            <span attr="left" class="floor-content-images-arrow arrow-left tap-arrow hidden-arrow" data="rooms"></span>
            <span attr="right" class="floor-content-images-arrow arrow-right tap-arrow" data="rooms"></span>
            <div class="floor-content-images" id="rooms-images">

              <div class="floor-content-image">
                  <img class="img" src="~/assets/top/rooms.jpg" alt="部屋">
              </div>
              <div class="floor-content-image">
                  <img class="img" src="~/assets/top/rooms.jpg" alt="部屋">
              </div>
              <div class="floor-content-image">
                  <img class="img" src="~/assets/top/rooms.jpg" alt="部屋">
              </div>
              <div class="floor-content-image">
                  <img class="img" src="~/assets/top/rooms.jpg" alt="部屋">
              </div>
            </div>
          </div>
          <div class="floor-content-image only-pc">
            <img class="img" src="~/assets/top/rooms.jpg" alt="部屋">
          </div>
          <div class="floor-content-bottom side-space">
            <p :class="{ 'floor-content-text': true }">
              さまざまな人や文化がつながり、新しいものをつむぎ出し、それを人びとにつたえる。そんな「場」がsocoです。<br>
              生まれたばかりのsocoは、ただのハコ。そこにいのちを吹き込み、かたちを創っていくのは、socoにつどう人びと。<br>
              socoにいけば誰かいる、何かがある。だからちょっとsocoまで。<br>
              そんな人びとの日常に溶け込んだ空間と時間が、socoにあります。
            </p>
            <p class="floor-content-text-detail gray">1泊 6500円〜 (税抜)</p>
            <div class="floor-content-button positive-button">
              <a href="javascript:void(0)"　class="floor-not-yet">Roomsを覗く</a>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="section">
      <h2 class="h2 side-space gray">socoの仲間たち</h2>
      <p :class="{ 'catch-phrase side-space': true }">いつでも<ruby><rb>soco</rb><rp>（</rp><rt>ソコ</rt><rp>）</rp></ruby>に。</p>
      <Person />

      <Person />

      <Person />

      <Person />

      <div class="section-bottom-button" style="display:none;">
        <a href="">スタッフ募集中</a>
      </div>
    </section>

    <section class="section">
      <h2 class="h2 side-space gray">socoのニュース</h2>
      <p :class="{ 'catch-phrase side-space': true }">日々、形作られていく、<ruby><rb>soco</rb><rp>（</rp><rt>ソコ</rt><rp>）</rp></ruby>。</p>
    <div class="blogs side-space">
    <Stories
      v-for="post in posts"
      :title="post.fields.title"
      :id="post.sys.id"
      :publish="post.fields.publishDate"
      :slug="post.fields.slug"
      :image="post.fields.heroImage.fields.file.url"
      :alt="post.fields.heroImage.fields.description"
    />
    </div>
    <div class="section-bottom-button">
      <a href="/stories/">ニュースをもっと見る</a>
    </div>
    </section>


    <section class="section">
      <h2 class="h2 side-space gray">socoの場所</h2>
      <p :class="{ 'catch-phrase side-space': true }">京都の<ruby><rb>soco</rb>
        <rp>（</rp>
        <rt>ソコ</rt>
        <rp>）</rp>
        </ruby>まで。
      </p>
      <Map />
      
    </section>

  </div>
</template>


<style>

.overlay:before { content: ""; position:fixed; top:0; left:0; right:0;bottom:0; z-index: 1000;}

.text-yellow {color: #F2CB0C;}
.main-visuals {display: flex; position: relative;height: calc(100vw * 0.6); flex-wrap: nowrap; transform: translateX(0%);
animation: slide 25s ease-out 0s infinite normal backwards running;
}

@keyframes slide {
    0% {
        transform: translateX(0%);
    }
    17% {
        transform: translateX(0%);
    }
    20% {
        transform: translateX(-100%);
    }
    37% {
        transform: translateX(-100%);
    }
    40% {
        transform: translateX(-200%);
    }
    57% {
        transform: translateX(-200%);
    }
    60% {
        transform: translateX(-300%);
    }
    77% {
        transform: translateX(-300%);
    }
    80% {
        transform: translateX(-400%);
    }
    97% {
        transform: translateX(-400%);
    }
}
.main-visual-wrap {position: relative; width: 100%; height: calc(100vw * 0.6);flex-shrink: 0;flex-grow: 0;}
.main-img { width: 100%;position: absolute;
    left: 50%;
    transform: translateY(-50%);
    -webkit-transform: translateX(-50%);}
.slide-dots {position: absolute; bottom: 10px; left: 50%;transform: translateX(-50%);-webkit-transform: translateX(-50%); -ms-transform: translateX(-50%);z-index:10;}

.slide-dot {display: inline-block;width: 8px;height: 8px; background: #FFF;border-radius: 50%;margin-right:8px;}
.main-slide-dots .slide-dot { animation: dots 25s backwards 0s infinite normal running;}
.main-slide-dots .main-slide-dots.slide-dot:first-child {animation-delay: 0s;}
.main-slide-dots .slide-dot:nth-child(2) {animation-delay: 5s;}
.main-slide-dots .slide-dot:nth-child(3) {animation-delay: 10s;}
.main-slide-dots .slide-dot:nth-child(4) {animation-delay: 15s;}
.main-slide-dots .slide-dot:last-child {margin-right:0; animation-delay: 20s;}
.selected-dot {background: #F2CB0C;}

@keyframes dots {
    0% {
        background: #FFF;
    }
    1% {
        background: #F2CB0C;
    }
    19% {
        background: #F2CB0C;
    }
    20% {
        background: #FFF;
    }
    100% {
        background: #FFF;
    }
}

.h2 { font-size: 0.9rem; margin-bottom: 10px; font-weight: 400;}
.catch-phrase {font-weight: 900; font-size: 1.2rem; line-height: 1.0; margin-bottom: 30px;}
.h3 { font-size: 1.1rem;flex: 1;text-align: left;}
.h3 .sub-h3 {position: relative; font-size: 0.9rem; margin-left: 50px;}
.h3 .sub-h3:before {content: ""; position: absolute; width: 30px;height: 1.5px; background: #A2A2A2 !important; top: 50%; left: -40px; transform: translateY(-50%);-webkit-transform: translateY(-50%); -ms-transform: translateY(-50%);border-radius: 10px;}
.section {text-align: center;}

.sub-text {margin-bottom: 20px;}

#floor-navi {display: flex; justify-content: space-around; margin: 0 auto 40px;max-width: 500px;}
#floor-navi li {position: relative; width: 15vw; font-size: 1.2rem; padding: 5px 0;}

.selected:before {content: "";position: absolute; width: 100%;height: 2px; background: #000; bottom: 0;left: 0; box-shadow: 2px 2px 10px rgba(0,0,0,0.2); border-radius: 10px;}


.construction {margin-bottom: 50px}
.construction img {width: 100%;} 

.floor-heading {display: flex;display: -webkit-flex;flex-wrap: nowrap; align-items: center; -webkit-align-items: center;margin-bottom: 15px; justify-content: flex-start;-webkit-justify-content: flex-start;}
.floor-heading .h3 {margin-left: 15px;}
.floor-heading .logo-svg {zoom: 0.7}

.floor-content {margin-bottom: 70px}
.floor-content-images-wrap {position: relative; overflow:hidden;}
.floor-content-images { display: flex; flex-wrap: nowrap;transform: translateX(calc((100% - 280px)/ 2));
    transition: transform .5s;}
.floor-content-image {position:relative; width: 280px; height: calc(100vw * 0.6);overflow:hidden;flex-shrink: 0;
    flex-grow: 0;}
    .floor-content-image img {height: 100%; width: auto;}

.floor-content-images-arrow {position: absolute;top: 0; bottom: 0; width: calc((100% - 280px)/ 2); background: rgba(0, 0, 0, 0.5); z-index: 100;}

.arrow-left {left: 0;}
.arrow-right {right: 0;}
.arrow-left:before, .arrow-right:before {
    font-family: Font Awesome\ 5 Free;
    font-weight: 900;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%,-50%);
    font-size: 30px;
    color: #fff;
}
.arrow-left:before {
    content: "\f104";
}
.arrow-right:before {
    content: "\f105";
}
.hidden-arrow:before {
    content:""
}

.floor-content-text {padding: 20px 0; text-align:left;}
.floor-content-text-detail {text-align: right; font-size: 0.9rem;margin-bottom: 0px;}
.bar-kitchen-text-detail {text-align: right;}
.floor-content-button {text-align: center;margin-top: 30px;}

.section-bottom-button a {display: inline-block; padding: 10px 15px; border-bottom: solid 2px #000; color: #000;}
.section-bottom-button a:after {content:"\f105";font-family: "Font Awesome 5 Free"; font-weight: 900; margin-left: 10px; }



@media screen and (min-width: 820px){
  .main {margin-bottom: 80px;}
  .h3 .sub-h3 {margin-left: 100px;}
  .h3 .sub-h3:before {left: -50px;}
  .floor-heading {margin-bottom: 35px;}
  .floor-heading .logo-svg {zoom: 1.0}
  .construction {margin-bottom: 100px;}
  .catch-phrase {font-size: 1.5rem}
  #floor-navi li {width: 80px; font-size: 1.5rem;}
  .floor-content-detail {display: flex; align-items: end;}
  .floor-content-text-detail {font-size: 0.8rem;}
  .floor-content-detail .side-space {margin-left: 0;margin-right: 0;}
  .floor-content-image {width: 50%; height: 300px;}
  .floor-content-image img {height: 100%; height: 300px;}
  .floor-content-bottom {flex: 1; margin-left: 20px !important;}
  .floor-content-text {font-size: 0.9rem;padding: 0 0 10px;line-height: 2.0;}
  
  .blogs {display:flex;flex-wrap: wrap;justify-content: flex-start; }
  .blog {width: 30%; margin-right: 5%;}
  .blog:nth-child(3n){margin-right:0;}
  .blog-img {height: 150px;}
  .blog-heading {line-height: 1.5;font-size: 0.9rem;}
  .blog-date {font-size:0.8rem;}

}

</style>

<script>
  import Stories from '~/components/Stories.vue'
  import {createClient} from '~/plugins/contentful.js'

  const client = createClient()

  export default {
    components: {
      Stories
    },
    asyncData ({env}) {
      return Promise.all([
        // fetch the owner of the blog
        client.getEntries({
          'sys.id': env.CTF_PERSON_ID
        }),
        // fetch all blog posts sorted by creation date
        client.getEntries({
          'content_type': env.CTF_BLOG_POST_TYPE_ID,
          order: '-sys.createdAt'
        })
      ]).then(([entries, posts]) => {
        // return data that should be available
        // in the template
        for (var post of posts.items) {
        　var date = new Date(post.fields.publishDate);
          var year = date.getFullYear();
          var month = date.getMonth() + 1;
          var day = date.getDate();
          post.fields.publishDate = `${year}/${month}/${day}`

        }
        return {
          person: entries.items[0],
          posts: posts.items
        }
      }).catch(console.error)
    }
  }

  if (process.client) {

  $(function(){

    $("#navi-access").on("click", function() {
      console.log("navi-access")
       $('input[id="click-hamburger"]').prop("checked", false);
    });

    

    $('.floor-content-images-wrap').each(function(i, elem){
        var $images = $(this).children(".floor-content-images");
        var imageNum = $images.children().length
        var $dotsBox = $(this).children(".floor-slide-dots");
        var dotHtml = "<span class='slide-dot'></span>".repeat(imageNum - 1);
        $dotsBox.append(dotHtml)
    })

    var $kitchen = $("#kitchen-images");
    var $labo = $("#labo-images");
    var $rooms = $("#rooms-images");
    const kitchenImageNum = $kitchen.children().length;
    const laboImageNum = $labo.children().length;
    const roomsImageNum = $rooms.children().length;
    var windowWidth = $(window).width();
    var kitchenNow = 1;
    var laboNow = 1;
    var roomsNow = 1;
    var nows = [kitchenNow,laboNow,roomsNow];
    var now = 1;
    var imageNum = 1;
    var $select = $kitchen
    var select = "kitchen"
    var imageWidth = 280;
    var firstX = `translateX(calc((100% - ${imageWidth}px)/2))`;

    var didSlide = false;
    

    $(window).scroll(function(){
        if (didSlide) {
          now = 1
          didSlide = false
          $select.css("transform", firstX);
          $('.arrow-left').addClass("hidden-arrow");
          $('.arrow-right').removeClass("hidden-arrow");
          $('.floor-slide-dots').each(function(i, elem){
              $(this).children(".selected-dot").removeClass("selected-dot")
              $(this).children().eq(0).addClass("selected-dot")
          })
        }
    })

    $(window).resize(function(){
        if (didSlide) {
          now = 1
          didSlide = false
          firstX = `translateX(calc((100% - ${imageWidth}px)/2))`;
          $kitchen.css("transform", firstX);
          $labo.css("transform", firstX);
          $rooms.css("transform", firstX);
          $('.arrow-left').addClass("hidden-arrow");
          $('.arrow-right').removeClass("hidden-arrow");
        }
    })

    var flg = false

    $(".tap-arrow").on("click", function(e){

       if (flg) {
        return false;
       } else {
        flg = true;
        setTimeout(function(){
          flg = false;
        },600);
       }

        // kitchen or labo or rooms
          var data = $(this).attr("data")
        // left or right
        var attr = $(this).attr("attr")
        if (!didSlide) {
          
          if ( data === "kitchen" ){
              $select = $kitchen
              
              now = nows[0]
              imageNum = kitchenImageNum
          } else if ( data === "labo" ) {
              $select = $labo
              now = nows[1]
              imageNum = laboImageNum
          } else {
              $select = $rooms
              now = nows[2]
              imageNum = roomsImageNum
          }
          select = data
          didSlide = true
        } else if ( select !== data ){
          $("body").toggleClass("overlay");
          return false;
        }
        

        var nowPosi = $select.css("transform")
        nowPosi = nowPosi.split('(')[1];
        nowPosi = nowPosi.split(')')[0];
        var x = nowPosi.split(', ')[4];
        var nowWidth = $select.children(".floor-content-image").width()

        x = attr === "right" ? - (nowWidth - parseInt(x)): nowWidth + parseInt(x);
        var slide = true

        if (attr === "right" &&  now === imageNum) {
            slide = false
        } else if (attr === "left" &&  now === 1) {
            slide = false
        }
        if (slide) {
            $select.css({
                transform: `translateX(${x}px)`
            })
            var $selectedDot = $(this).parent().find('.selected-dot');
            $selectedDot.removeClass('selected-dot');
            if (attr === "right"){
                now = now + 1;
                
                
                $selectedDot.next().addClass('selected-dot');
                if ( now === imageNum ) {
                    $(this).addClass("hidden-arrow");
                }
                if (now !== 1 ){
                    $(this).prev().removeClass("hidden-arrow");
                }
            } else {
                $selectedDot.prev().addClass('selected-dot');
                now = now - 1;
                if (now === 1 ){
                    $(this).addClass("hidden-arrow");
                }
                if ( now !== imageNum ){
                    $(this).next().removeClass("hidden-arrow");
                }
            }
            
        }
        
        
        

    })
  })
  }
</script>
