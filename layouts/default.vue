<template>
  <div :class="{ 'dark_mode': active }" id="wrap">
    <Header />
    <Nuxt 
      :active=active
    />
    <Footer />
    <div class="day-and-night-switch-wrap">
      <div class="day-and-night-switch">
        <span id="switch-selected-bg" :class="{ 'change-switch': active }"></span>
        <span :class="{ 'day-and-night-btn day-btn': true, 'switch-selected': !active }" @click="onClick" style="padding-left: 5px;">昼</span>
        <span :class="{ 'day-and-night-btn night-btn': true, 'switch-selected': active }" @click="onClick" style="padding-right: 5px;">夜</span>
      </div>
    </div>
    
</div>
</template>

<style>
.container {padding-top: 68px;}

.day-and-night-switch-wrap {position:fixed; bottom: 10px; right: 10px;z-index: 1000;}
.day-and-night-switch {position: relative; height: 45px; background: #000; border-radius: 50px;border: solid 3px #000;overflow:hidden; box-shadow: -2px -2px 10px rgba(0,0,0,0.2);z-index: 10000;}
.day-and-night-btn {position:relative;font-size: 1.3rem; display: inline-block; width: 50px;height: 39px;line-height: 42px;text-align: center;border-radius: 50px;z-index: 100;}
.day-and-night-btn:hover {cursor: pointer;}
.day-btn {color: #000;}
.night-btn {color: #fff;}
#switch-selected-bg {position: absolute; background: #fff; height: 39px;width: 55px; top: 0;border-radius: 50px; transition: transform .3s; transform: translateX(0px)}
.change-switch {transform: translateX(50px) !important;background: #000 !important; transition: all 0.2s;}



html { color: #000001; font-size: 14px;}
body {margin: 0 auto; font-family: heisei-maru-gothic-std, sans-serif; -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;}
body * {margin: 0; padding: 0; box-sizing: border-box;}
button {outline: none;border: none;background: transparent;appearance: none;}
button:hover, button:focus {outline: none;}
.main {position: relative; height: calc(100vw * 0.5); overflow: hidden;margin-bottom: 30px;}
.img {width: 100%; position: absolute; top: 50%; left: 50%; transform: translate(-50%, -50%);-webkit-transform: translate(-50%, -50%); -ms-transform: translate(-50%, -50%);}
rt { margin-bottom: 0px; transform: translateY(0%) !important; -webkit-transform: translateY(50%); -ms-transform: translateY(0%);}
.side-space {margin-left: 8vw;margin-right: 8vw; }
a {text-decoration: none; color: #969594}
ul {list-style-type: none;list-style-position: inside;margin-bottom: 20px; line-height: 2.0}
h1 {margin: 40px 0; font-size: 1.4rem;}
h4 {margin-bottom: 10px;font-weight: 400;font-size: 1.0rem;}
.section {margin-bottom: 100px;}
p {margin-bottom: 0;font-weight: 400; font-size: 1.0rem; line-height: 2.0;}
.only-night,.only-night-flex {display: none !important;}


.only-day {display: inline-block;}
.only-day-flex {display: flex;}
.gray {color: #A2A2A2 !important;}
.p1 {font-size: 0.9rem;}
.p1-m0 {font-size: 1.1rem; margin:0}
.p3 {font-size: 0.8rem; color: #969594}
.p4 {font-size: 1.0rem; font-weight: 900; margin:0;}
table {text-align: left;border-collapse:separate;border-spacing: 10px}
.box {padding: 30px 0;}
.positive-button {margin: 0 auto;text-align: center;}

.positive-button a {position: relative; display: inline-block; background: #F2CB0C; color: #fff; padding: 10px 25px; border-radius: 10px; font-weight: 900; }
.positive-button a:after {content:"\f105";font-family: "Font Awesome 5 Free"; font-weight: 900; margin-left: 10px; }

.floor-not-yet { position: relative;color: #A2A2A2 !important;text-align: center;}
.floor-not-yet:before {content: "COMING SOON"; font-size: 0.5rem; color: #fff; font-weight: 900; position: absolute; width: 120%; padding: 5px 0; line-height: 1.2; background: rgba(162, 162, 162, 0.6); top: 50%; left:50%; transform: translate(-50%, -50%);-webkit-transform: translate(-50%, -50%); -ms-transform: translate(-50%, -50%);}
.positive-button .floor-not-yet:before {width: 120%; padding: 20px 0; font-size: 1.0rem;}

.only-pc {display: none;}
.sp-br {display: block;}


.dark_mode, .dark_mode, .dark_mode header  {background: #000 !important; transition: all 0.2s;}
.dark_mode p, .dark_mode a, .dark_mode li, .dark_mode .h3, .dark_mode td {color: #fff; transition: all 0.2s;}
.dark_mode a {color: #fff !important; border-color: #fff !important; transition: all 0.2s;}
.dark_mode #header-background, .dark_mode #sp-modal-menu-wrap {background: #000 !important; transition: all 0.2s;}
.dark_mode .logo-svg {fill: #fff; transition: fill 0.2s;}
.dark_mode .hamburger-bar {background: #fff !important; transition: all 0.2s;}
.dark_mode footer {background: #fff !important; transition: all 0.2s;}
.dark_mode footer p {color: #000 !important; transition: all 0.2s;}
.dark_mode footer .logo-svg {fill: #000; transition: all 0.2s;}
.dark_mode .selected:before, .dark_mode .day-and-night-switch {background: #fff !important; transition: all 0.2s;}
.dark_mode .day-and-night-switch {border-color: #fff;}
.dark_mode .contents-mv-h1:before {content: "Bar"}
.dark_mode .only-night {display: inline-block !important;}
.dark_mode .only-night-flex {display: flex !important;}
.dark_mode .only-day, .dark_mode .only-day-flex {display: none;}
.dark_mode .contents-navi li:last-child, .contents-navi li:nth-child(6) {border-color: #fff; transition: all 0.2s;}
.dark_mode .contents-navi-wrap {box-shadow: 2px 0 10px rgba(255,255,255,0.5);}
.dark_mode .story-main-body, .dark_mode .story-h1 {color: #fff;}
.dark_mode  a.no-link {color: rgba(229, 229, 229, 0.3) !important;}

p, a, li, .h3, td, .switch-selected, footer p  {transition: all 0.2s;}
#header-background, #sp-modal-menu-wrap, .hamburger-bar, footer, .selected:before, .day-and-night-switch, header { transition: all 0.2s;}
.logo-svg {transition: all 0.2s;}


@media screen and (min-width: 820px){
  .container {padding-top: 0;}
  .logo-svg{max-width: 100px; min-width:90px;display: block;}
  .logo-svg a, .logo-svg svg {display:inherit !important;}
  p, li {font-size: 0.9rem}
  .only-pc {display: block;}
  .only-sp {display: none;}
  .sp-br {display: inline;}
  .side-space { margin-left: 0; margin-right: 0;}
  .section {max-width: 800px;    margin: 0 auto 120px !important;}
  .day-and-night-switch-wrap {bottom: 50px;right: 50px;zoom: 1.2;}
  .positive-button a {padding: 10px 30px;}
  

  .place {display: flex; align-items: end;}
  
  .address-hours {flex: 1;}

  .business-hours-table {border-collapse: collapse;font-size: 0.9rem;}
  .address, .business-hours {text-align: left;}
  .business-hours-table th {text-align: left;}
  .business-hours-table tr {height: 30px;}
   .day-and-night-btn {line-height: 1.2;padding: 4px 0;}
  .day-and-night-btn:after {content: "soco"; display: block;font-size: 0.7rem;}

}

/* article design */
.atrticle-box1 { margin-bottom: 50px; }
.atrticle-box1 a {display: block; color: #000;}
.atrticle-box1-img {position: relative; width: 100%;height: calc(100vw * 0.6);overflow:hidden;margin-bottom: 10px;}
.atrticle-box1-heading {text-align:left;font-size: 1.1rem;margin-bottom: 5px; }
.atrticle-box1-date {text-align: right; font-size:0.9rem;}

@media screen and (min-width: 820px){
  .atrticles-box1 {display:flex;flex-wrap: wrap;justify-content: flex-start; }
  .atrticle-box1 {width: 30%; margin-right: 5%;}
  .atrticle-box1:nth-child(3n){margin-right:0;}
  .atrticle-box1-img {height: 150px;}
  .atrticle-box1-heading {line-height: 1.5;font-size: 0.9rem;}
  .atrticle-box1-date {font-size:0.8rem;}
}

/* contents page main visual design */
.contents-mv {position: relative; height: calc(100vw * 0.5); overflow: hidden;margin-bottom: 30px;}
.contents-mv-text {position: absolute; width: 100%; text-align: center; top: 50%; left: 50%; transform: translate(-50%, -30%);-webkit-transform: translate(-50%, -50%); -ms-transform: translate(-50%, -50%); z-index: 2;}
.contents-mv-h1 {position: relative; color: #00BFFF; margin-top: 0; margin-bottom: 0px;font-weight: 900; font-size: 3.0rem;text-shadow: 0px 0px 10px rgba(0,0,0,0.8);}
.contents-mv-h1:before {content: "Kitchen"}
.contents-mv-heading {color: #fff; font-size: 0.9rem;line-height: 1.7;    text-shadow: 0px 0px 2px rgba(0,0,0,0.8);font-weight: 900;}
.contents-mv-image-wrap {position: relative; z-index: 1; height: 100%;width: 100%;}


@media screen and (min-width: 820px){
    .contents-mv {margin-bottom: 0;}
}

/* contents navi */
@media screen and (min-width: 820px){

    .contents-navi-wrap {box-shadow: 2px 0 10px rgba(0,0,0,0.1); margin-bottom: 80px;}
    .contents-navi {display: flex; flex-wrap: nowrap; justify-content:space-between; max-width: 800px; margin: 0 auto;}
    .contents-navi li { margin: 20px 0px; width: 120px; text-align: center; max-width: calc(100vw / 6);}
    .contents-navi li a {color: #000;}
    .contents-navi li:last-child, .navi li:nth-child(6) {border-left: solid 1px #000;}
    .contents-navi li:hover {cursor: pointer;}
}
</style>

<script>
export default {
  data() {
    var firstActive = true;
  　var path = this.$route.path;
    path = path.split("/");
    if (path[1] === "bar") {
      firstActive = true;
    } else if (path[1] === "kitchen") {
      firstActive = false;
    } else {
      const japanStandardTime = new Date().toLocaleString({ timeZone: 'Asia/Tokyo' });
      const hour = new Date(japanStandardTime).getHours();
      // 5時〜18時の間はお昼モード
      if ( parseInt(hour) >= 5 && parseInt(hour) < 18 ) {
        firstActive = false
      }
    }
    return {
      active: firstActive
    }
  },
  mounted() {
    Typekit.load({async: true})
  },
  methods: {
    onClick() {
      this.active = !this.active
      if (process.client) {
        var path = location.pathname;
        path = path.split("/");
        if (path[1] === "bar") {
          window.location.href = "https://soco-kyoto.com/kitchen/"
        } else if (path[1] === "kitchen") {
          window.location.href = "https://soco-kyoto.com/bar/"
        }
      }
      
    }
  }

}

</script>
