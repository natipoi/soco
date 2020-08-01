<template>
  <div :class="{ 'dark_mode_background': active }">
    <Header />
    <Nuxt />
    <Footer />
    
</div>
  </div>
</template>

<style>
.dark_mode_background {background: #000 !important;}
.dark_mode_white_background {background: #fff !important;}
.dark_mode_color {color: #fff !important;}
.dark_mode_balck_color {color: #000 !important;}
.dark_mode_a_color {color: #fff !important; border-color: #fff !important;}
.dark_mode .logo-svg {fill: #fff !important;}
.dark_mode_white .logo-svg {fill: #000 !important;}

html { color: #000001; font-size: 14px;}
body {margin: 0 auto; font-family: "San Francisco", Sans-Serif;}
body * {margin: 0; padding: 0; box-sizing: border-box;}
.side-space {margin-left: 8vw;margin-right: 8vw; }
a {text-decoration: none; color: #969594}
ul {list-style-type: none;list-style-position: inside;margin-bottom: 20px; line-height: 2.0}
h1 {margin: 40px 0; font-size: 1.4rem;}
h4 {margin-bottom: 10px;font-weight: 400;font-size: 1.0rem;}
p {margin-bottom: 0;font-weight: 400; font-size: 1.0rem; line-height: 2.0;}
.p1 {font-size: 0.9rem;}
.p1-m0 {font-size: 1.1rem; margin:0}
.p3 {font-size: 0.8rem; color: #969594}
.p4 {font-size: 1.0rem; font-weight: 900; margin:0;}
table {text-align: left;border-collapse:separate;border-spacing: 10px}
.box {padding: 30px 0;}

.only-pc {display: none;}
.sp-br {display: block;}


@media screen and (min-width: 820px){
p {font-size: 0.9rem}
  .only-pc {display: block;}
  .only-sp {display: none;}
  .sp-br {display: inline;}
  .side-space { margin-left: 0; margin-right: 0;}
  .section {max-width: 800px;margin: 0 auto;}
}
</style>

<script>
export default {
  data() {
    var now = new Date();
    var hour = now.getHours();
    // 5時〜18時の間はお昼モード
    var firstActive =  hour >= 5 && hour < 18 ? false : true;
    return {
      active: firstActive
    }
  }
}

</script>
