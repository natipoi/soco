<template>
  <div class="container">
    <section class="main">
      <picture id="main-visual" class="img">
        <source media="(max-width: 720px)" srcset="~/assets/main_sp.jpg">
        <source media="(min-width: 721px)" srcset="~/assets/main_pc.jpg">
        <img src="~/assets/main_pc.jpg" alt="メインビジュアル">
      </picture>
    </section>

    <section class="section">
      <h2 class="h2 side-space">socoのコンセプト</h2>
      <p class="catch-phrase side-space"><ruby>
<rb>soco</rb><rp>（</rp><rt>ソコ</rt><rp>）</rp></ruby>にいけば何かある。<span class="sp-br"></span>だからちょっと<ruby><rb>soco</rb><rp>（</rp><rt>ソコ</rt><rp>）</rp></ruby>まで。</p>
      <p class="sub-text side-space">さまざまな人や文化がつながり、新しいものをつむぎ出し、それを人びとにつたえる。そんな「場」がsocoです。</p>
      <p class="sub-text side-space">生まれたばかりのsocoは、ただのハコ。そこにいのちを吹き込み、かたちを創っていくのは、socoにつどう人びと。</p>
      <p class="sub-text side-space">socoにいけば誰かいる、何かがある。だからちょっとsocoまで。</p>
      <p class="sub-text side-space">そんな人びとの日常に溶け込んだ空間と時間が、socoにあります。</p>
    </section>

    <section class="section">
      <h2 class="h2 side-space">socoの空間</h2>
      <p class="catch-phrase side-space">倉庫。いや、<ruby><rb>soco</rb>
<rp>（</rp>
<rt>ソコ</rt>
<rp>）</rp>
</ruby>。</p>
      <ul id="floor-navi" class="side-space">
        <li class="selected">1階</li>
        <li class="floor-not-yet">2階</li>
        <li class="floor-not-yet">3階</li>
      </ul>
      
      <div class="construction side-space">
        <img src="~/assets/construction_1f.png">
      </div>

      <div class="floor-content">
        <div class="floor-heading side-space">
          <Logo />
          <h3 class="h3">Kitchen<span>1階</span></h3>
        </div>
        <div class="floor-content-detail">
          <div class="floor-content-image">
              <img class="img" src="~/assets/top/kitchen.jpg" alt="キッチン">
          </div>
          <div class="floor-content-bottom side-space">
            <p class="floor-content-text">
              さまざまな人や文化がつながり、新しいものをつむぎ出し、それを人びとにつたえる。そんな「場」がsocoです。<br>
              生まれたばかりのsocoは、ただのハコ。そこにいのちを吹き込み、かたちを創っていくのは、socoにつどう人びと。<br>
              socoにいけば誰かいる、何かがある。だからちょっとsocoまで。<br>
              そんな人びとの日常に溶け込んだ空間と時間が、socoにあります。
            </p>
            <p class="floor-content-text-detail">OPEN 9:00 | CLOSE 18:00 (L.O. 17:30)</p>
            <p class="floor-content-text-detail">※18:00以降は「<span class="text-yellow">soco bar</span>」として営業しています。</p>
            <div class="floor-content-button">
              <a href="">Kitchenを覗く</a>
            </div>
          </div>
        </div>
      </div>

      <div class="floor-content">
        <div class="floor-heading side-space">
          <Logo />
          <h3 class="h3">Labo<span>1階</span></h3>
        </div>
        <div class="floor-content-detail">
          <div class="floor-content-image">
              <img class="img" src="~/assets/top/labo.jpg" alt="ラボ">
          </div>
          <div class="floor-content-bottom side-space">
            <p class="floor-content-text">
              さまざまな人や文化がつながり、新しいものをつむぎ出し、それを人びとにつたえる。そんな「場」がsocoです。<br>
              生まれたばかりのsocoは、ただのハコ。そこにいのちを吹き込み、かたちを創っていくのは、socoにつどう人びと。<br>
              socoにいけば誰かいる、何かがある。だからちょっとsocoまで。<br>
              そんな人びとの日常に溶け込んだ空間と時間が、socoにあります。
            </p>
            <p class="floor-content-text-detail">OPEN 9:00 | CLOSE 18:00</p>
            <div class="floor-content-button">
              <a href="">Laboを覗く</a>
            </div>
          </div>
        </div>
      </div>

      <div class="floor-content">
        <div class="floor-heading side-space">
          <Logo />
          <h3 class="h3">Rooms<span>2階, 3階</span></h3>
        </div>
        <div class="floor-content-detail">
          <div class="floor-content-image">
              <img class="img" src="~/assets/top/rooms.jpg" alt="部屋">
          </div>
          <div class="floor-content-bottom side-space">
            <p class="floor-content-text">
              さまざまな人や文化がつながり、新しいものをつむぎ出し、それを人びとにつたえる。そんな「場」がsocoです。<br>
              生まれたばかりのsocoは、ただのハコ。そこにいのちを吹き込み、かたちを創っていくのは、socoにつどう人びと。<br>
              socoにいけば誰かいる、何かがある。だからちょっとsocoまで。<br>
              そんな人びとの日常に溶け込んだ空間と時間が、socoにあります。
            </p>
            <p class="floor-content-text-detail">1泊 6500円〜 (税抜)</p>
            <div class="floor-content-button">
              <a href="">Roomsを覗く</a>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="section">
      <h2 class="h2 side-space">socoの仲間たち</h2>
      <p class="catch-phrase side-space">いつでも<ruby><rb>soco</rb>
<rp>（</rp>
<rt>ソコ</rt>
<rp>）</rp>
</ruby>に。</p>
      <div class="person-introduction side-space">
        <div class="person-image">
          <img class="img" src="~/assets/top/person.png">
        </div>
        <div class="person-text">
          <p class="person-name">ケイちゃん</p>
          <p class="person-hours">出没時間：主に夜</p>
          <p class="person-description">
            さまざまな人や文化がつながり、新しいものをつむぎ出し、それを人びとにつたえる。そんな「場」がsocoです。<br>
            生まれたばかりのsocoは、ただのハコ。そこにいのちを吹き込み、かたちを創っていくのは、socoにつどう人びと。
          </p>
        </div>
      </div>

      <div class="person-introduction side-space">
        <div class="person-image">
          <img class="img" src="~/assets/top/person.png">
        </div>
        <div class="person-text">
          <p class="person-name">ケイちゃん</p>
          <p class="person-hours">出没時間：主に夜</p>
          <p class="person-description">
            さまざまな人や文化がつながり、新しいものをつむぎ出し、それを人びとにつたえる。そんな「場」がsocoです。<br>
            生まれたばかりのsocoは、ただのハコ。そこにいのちを吹き込み、かたちを創っていくのは、socoにつどう人びと。
          </p>
        </div>
      </div>

      <div class="person-introduction side-space">
        <div class="person-image">
          <img class="img" src="~/assets/top/person.png">
        </div>
        <div class="person-text">
          <p class="person-name">ケイちゃん</p>
          <p class="person-hours">出没時間：主に夜</p>
          <p class="person-description">
            さまざまな人や文化がつながり、新しいものをつむぎ出し、それを人びとにつたえる。そんな「場」がsocoです。<br>
            生まれたばかりのsocoは、ただのハコ。そこにいのちを吹き込み、かたちを創っていくのは、socoにつどう人びと。
          </p>
        </div>
      </div>

      <div class="person-introduction side-space">
        <div class="person-image">
          <img class="img" src="~/assets/top/person.png">
        </div>
        <div class="person-text">
          <p class="person-name">ケイちゃん</p>
          <p class="person-hours">出没時間：主に夜</p>
          <p class="person-description">
            さまざまな人や文化がつながり、新しいものをつむぎ出し、それを人びとにつたえる。そんな「場」がsocoです。<br>
            生まれたばかりのsocoは、ただのハコ。そこにいのちを吹き込み、かたちを創っていくのは、socoにつどう人びと。
          </p>
        </div>
      </div>

      <div class="section-bottom-button">
        <a href="">スタッフ募集中</a>
      </div>
    </section>

    <section class="section">
      <h2 class="h2 side-space">socoのニュース</h2>
      <p class="catch-phrase side-space">日々、形作られていく、<ruby><rb>soco</rb>
<rp>（</rp>
<rt>ソコ</rt>
<rp>）</rp>
</ruby>。</p>
    <div class="blogs side-space">
      <a class="blog">
        <div class="blog-img">
          <img class="img" src="~/assets/top/blog.jpg">
        </div>
        <div class="blog-text">
          <p class="blog-heading">[予約受付開始] ゲストハウス「soco Rooms」が9月15日にオープンします！</p>
          <p class="blog-date">2020/9/1</p>
        </div>
      </a>

      <a class="blog">
        <div class="blog-img">
          <img class="img" src="~/assets/top/blog.jpg">
        </div>
        <div class="blog-text">
          <p class="blog-heading">[予約受付開始] ゲストハウス「soco Rooms」が9月15日にオープンします！</p>
          <p class="blog-date">2020/9/1</p>
        </div>
      </a>

      <a class="blog">
        <div class="blog-img">
          <img class="img" src="~/assets/top/blog.jpg">
        </div>
        <div class="blog-text">
          <p class="blog-heading">[予約受付開始] ゲストハウス「soco Rooms」が9月15日にオープンします！</p>
          <p class="blog-date">2020/9/1</p>
        </div>
      </a>


    </div>
    <div class="section-bottom-button">
      <a href="">ニュースをもっと見る</a>
    </div>
    </section>


    <section class="section">
      <h2 class="h2 side-space">socoの場所</h2>
      <p class="catch-phrase side-space">京都の<ruby><rb>soco</rb>
<rp>（</rp>
<rt>ソコ</rt>
<rp>）</rp>
</ruby>まで。</p>
      <div class="side-space place">
        <div class="map-image">
          <img class="img" src="~/assets/top/map.png">
        </div>
        <div class="address-hours">
          <div class="address">
            <p class="address-name">soco Kyoto</p>
            <p class="address-text">〒602-0862 京都府上京区出水町260</p>
            <ul class="how-to-way">
              <li>神宮丸太町駅から徒歩5分</li>
              <li>神宮丸太町駅から徒歩5分</li>
              <li>神宮丸太町駅から徒歩5分</li>
            </ul>
          </div>
          <div class="business-hours">
            <p class="business-hours-title">営業時間</p>
              <table class="business-hours-table">
                <tr>
                  <th>soco Kitchen</th>
                  <td>18:00 〜 24:00</td>
                </tr>
                <tr>
                  <th>soco Bar</th>
                  <td>9:00 〜 18:00</td>
                </tr>
                <tr>
                  <th>soco Labo</th>
                  <td>9:00 〜 18:00</td>
                </tr>
                <tr>
                  <th>soco Rooms</th>
                  <td>9:00 〜 24:00</td>
                </tr>
              </table>
          </div>
        </div>
      </div>
      
    </section>


  </div>
</template>


<style>

.container {padding-top: 68px;}

.img {width: 100%; position: absolute; top: 50%; left: 50%; transform: translate(-50%, -50%);-webkit-transform: translate(-50%, -50%); -ms-transform: translate(-50%, -50%);}
.text-yellow {color: #F2CB0C;}
.main {position: relative;height: calc(100vw * 0.6); overflow: hidden;margin-bottom: 30px;}
#main-visual img {width: 100%;}
.h2 {color: #A2A2A2;font-size: 0.9rem; margin-bottom: 15px;}
.h3 { font-size: 1.1rem;}
.h3 span {position: relative;color: #A2A2A2; font-size: 0.9rem; margin-left: 80px;}
.h3 span:before {content: ""; position: absolute; width: 30px;height: 1.5px; background: #A2A2A2; top: 50%; left: -40px; transform: translateY(-50%);-webkit-transform: translateY(-50%); -ms-transform: translateY(-50%);border-radius: 10px;}
.section {text-align: center; margin-bottom: 100px;}
.catch-phrase {font-weight: 900; font-size: 1.2rem; line-height: 2.0; margin-bottom: 30px;}
.sub-text {margin-bottom: 20px;}

#floor-navi {display: flex; justify-content: space-around; margin-bottom: 40px;}
#floor-navi li {position: relative; width: 15vw; font-size: 1.2rem; padding: 5px 0;}

.selected:before {content: "";position: absolute; width: 100%;height: 2px; background: #000; bottom: 0;left: 0; box-shadow: 2px 2px 10px rgba(0,0,0,0.2); border-radius: 10px;}
.floor-not-yet {color: #A2A2A2;}
.floor-not-yet:before {content: "COMING SOON"; font-size: 0.2rem; color: #fff; font-weight: 900; position: absolute; width: 120%; padding: 5px 0; line-height: 1.2; background: rgba(162, 162, 162, 0.4); top: 50%; left:50%; transform: translate(-50%, -50%);-webkit-transform: translate(-50%, -50%); -ms-transform: translate(-50%, -50%);}

.construction {margin-bottom: 50px}
.construction img {width: 100%;} 

.floor-heading {display: flex; flex-wrap: nowrap; align-items: center;margin-bottom: 15px;}
.logo-svg {height: 20px; margin-right: 10px;}

.floor-content {margin-bottom: 70px}
.floor-content-image {position:relative; width: 100%; height: calc(100vw * 0.6);overflow:hidden;}
.floor-content-text {padding: 20px 0;}
.floor-content-text-detail {text-align: right; color: #A2A2A2; font-size: 0.9rem;margin-bottom: 0px;}
.floor-content-button {text-align: center;margin-top: 30px;}
.floor-content-button a {position: relative; display: inline-block; color: #fff; background: #F2CB0C;padding: 15px 25px; border-radius: 10px; font-weight: 900;}
.floor-content-button a:after {content:"\f105";font-family: "Font Awesome 5 Free"; font-weight: 900; margin-left: 10px; }


.person-introduction {display: flex; flex-wrap: nowrap; margin-bottom: 40px;}
.person-image {position: relative; width: 30vw; height: 30vw; overflow: hidden; border-radius: 50%;}
.person-text {flex: 1;margin-left: 10px; text-align:left;}
.person-name {font-size: 1.2rem;}
.person-hours {color: #A2A2A2; font-size: 0.9rem;}
.person-description {font-size: 0.9rem;}

.section-bottom-button a {display: inline-block; padding: 10px 15px; border-bottom: solid 2px #000; color: #000;}
.section-bottom-button a:after {content:"\f105";font-family: "Font Awesome 5 Free"; font-weight: 900; margin-left: 10px; }

.map-image {position: relative;height: calc(100vw * 0.6); overflow: hidden;margin-bottom: 20px;}

.address {text-align: center; margin-bottom: 30px;}
.address-name {font-weight: 900; font-size: 1.1rem; margin-bottom: 10px;}
.address-text {margin-bottom: 10px;}

.business-hours {text-align: center;}
.business-hours-table {table-layout: fixed;width: 100%;}
.business-hours-table th {color: #A2A2A2; text-align: center;font-weight: 400;}
.business-hours-table tr {padding: 10px 0}
.blog {display: block; margin-bottom: 50px; color: #000;}
.blog-img {position: relative; width: 100%;height: calc(100vw * 0.6);overflow:hidden;margin-bottom: 10px;}
.blog-heading {text-align:left;font-size: 1.1rem;margin-bottom: 5px; }
.blog-date {text-align: right;color: #A2A2A2; font-size:0.9rem;}

@media screen and (min-width: 820px){
.container {padding-top: 0;}
  .main {height: 400px;}
  .floor-heading {margin-bottom: 30px;}
  .construction {margin-bottom: 100px;}
  .catch-phrase {font-size: 1.5rem}
  #floor-navi li {width: 60px;}
  .floor-content-detail {display: flex; align-items: end;}
  .floor-content-detail .side-space {margin-left: 0;margin-right: 0;}
  .floor-content-image {width: 50%; height: 300px;}
  .floor-content-image img {height: 100%; height: 300px;}
  .floor-content-bottom {flex: 1; margin-left: 20px !important;}
  .floor-content-text {font-size: 0.9rem;padding: 0 0 10px; text-align: left;line-height: 2.0;}

.floor-content-button a {padding: 10px 30px;}
.person-introduction {max-width: 600px; margin-left: auto; margin-right: autol}
.person-image {width: 120px; height: 120px; margin-right: 30px;}
.place {display: flex; align-items: end;}
.map-image {width: 65%;height:350px;margin-right: 20px;}
.map-image img {height: 100%; width: auto;}
.address-hours {flex: 1;}

.business-hours-table {border-collapse: collapse;font-size: 0.9rem;}
.address, .business-hours {text-align: left;}
.business-hours-table th {text-align: left;}
 .business-hours-table tr {height: 30px;}
 .blogs {display:flex;flex-wrap: wrap;justify-content: flex-start; }
 .blog {width: 30%; margin-right: 5%;}
 .blog:nth-child(3n){margin-right:0;}
 .blog-img {height: 130px;}
 .blog-heading {line-height: 1.5;font-size: 0.9rem;}

}

</style>

<script>
  import {createClient} from '~/plugins/contentful.js'

  const client = createClient()

  export default {
    // `env` is available in the context object
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
</script>
