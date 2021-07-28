<template>
<div>
<section class="section side-space">
  <div class="section-inner">
  <h2 class="h2 gray">About</h2>
  <p :class="{ 'catch-phrase': true }">
      会社概要
  </p>
  <table class="table">
    <tr>
      <th>会社名</th>
      <td>株式会社SOCO（ソコ）</td>
    </tr>
    <tr>
      <th>代表者</th>
      <td>水野 啓</td>
    </tr>
    <tr>
      <th>所在地</th>
      <td>京都府京都市上京区出水町260番地</td>
    </tr>
    <tr>
      <th>電話番号</th>
      <td>075-285-4385</td>
    </tr>
    <tr>
      <th>メールアドレス</th>
      <td>soco@soco-kyoto.com</td>
    </tr>
    <tr>
      <th>設立年月日</th>
      <td>2021年6月15日</td>
    </tr>
    <tr>
      <th>主たる事業内容</th>
      <td>ギャラリー・イベントスペース運営</td>
    </tr>
    <tr>
      <th>資本金</th>
      <td>1,000,000円</td>
    </tr>
  </table>
  </div>
</section>
<style>
  .section { padding-top: 100px !important;}
  .section-inner {text-align: center; display: inline-block;}
  .h2 { font-size: 0.9rem; margin-bottom: 10px; font-weight: 400; text-align: left;}
  .catch-phrase {font-weight: 900; font-size: 1.2rem; line-height: 1; margin-bottom: 30px;text-align: left;}
  
  .table {
    font-family: "Hiragino Kaku Gothic ProN","メイリオ", sans-serif;
    font-size: 1.0rem;
    border-spacing: 0;
  }
  
  .table th {
    padding-left: 0;
    text-align: left;
    padding-right: 3rem;
  }

  @media screen and (max-width: 767px){
    .table th,.table td {
      display: block;
    }
    .table td {
      padding-bottom: 1rem;
    }

  }
  @media screen and (min-width: 768px){
    .section { padding-top: 80px !important;text-align: center;}
    .catch-phrase {font-size: 1.5rem; margin-bottom: 30px;}
    .table {
      font-size: 1.2rem;
    }
    .table th,.table td {
      padding-top: 1rem;
      padding-bottom: 1rem;
    }
    
  }
  
</style>
</div>
</template>



<script>
  import {createClient} from '~/plugins/contentful.js'

  const client = createClient()
  export default {

    head () {
        return {
            title: "SOCOの会社情報 | 京都・河原町のキッチン・バー＆イベント",
            meta: [
                { hid: 'og:title', property: 'og:title', content: "SOCOの会社情報 | 京都・河原町のキッチン・バー＆イベント" },
                { hid: 'og:url', property: 'og:url', content: `https://soco-kyoto.com/company/` },
                // { hid: 'og:image', property: 'og:image', content: this.post.fields.heroImage.fields.file.url },
            ],
            link: [
                { hid:"canonical", rel: "canonical", href: `https://soco-kyoto.com/company/` }
            ]
        }
    }
  }
</script>