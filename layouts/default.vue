<template>
  <div :class="{ 'dark_mode': active }">
    <Header />
    <Nuxt />
    <Footer />
    <div class="day-and-night-switch-wrap">
      <div class="day-and-night-switch">
        <span id="swith-selected-bg" :class="{ 'change-switch': active }"></span>
        <span :class="{ 'day-and-night-btn': true, 'switch-selected': day }" @click="onClick" style="padding-left: 5px;">昼</span>
        <span :class="{ 'day-and-night-btn': true, 'switch-selected': !day }" @click="onClick" style="padding-right: 5px;">夜</span>
      </div>
    </div>
    
</div>
  </div>
</template>

<style>
.container {padding-top: 68px;}

.day-and-night-switch-wrap {position:fixed; bottom: 10px; right: 10px;z-index: 1000;}
.day-and-night-switch {position: relative; height: 45px; background: #000; border-radius: 50px;border: solid 3px #000;overflow:hidden; box-shadow: -2px -2px 10px rgba(0,0,0,0.2);z-index: 10000;}
.day-and-night-btn {position:relative; color: #fff;font-size: 1.3rem; display: inline-block; width: 50px;height: 39px;line-height: 42px;text-align: center;border-radius: 50px;z-index: 100;}
.day-and-night-btn:hover {cursor: pointer;}
.switch-selected {color: #000;}
#swith-selected-bg {position: absolute; background: #fff; height: 39px;width: 55px; top: 0;border-radius: 50px; transition: transform .3s; transform: translateX(0px)}
.change-switch {transform: translateX(50px) !important;}


.dark_mode, .dark_mode,.change-switch, .dark_mode header  {background: #000 !important; transition: background 0.2s;}
.dark_mode p, .dark_mode a, .dark_mode li, .dark_mode .h3, .dark_mode td {color: #fff; transition: all 0.2s;}
.dark_mode a {color: #fff !important; border-color: #fff !important; transition: all 0.2s;}
.dark_mode #header-background, .dark_mode #sp-modal-menu-wrap {background: #000 !important; transition: all 0.2s;}
.dark_mode .logo-svg {fill: #fff; transition: fill 0.2s;}
.dark_mode .hamburger-bar {background: #fff !important; transition: background 0.2s;}
.dark_mode footer {background: #fff !important; transition: background 0.2s;}
.dark_mode footer p, .dark_mode .day-and-night-btn {color: #000 !important; transition: color 0.2s;}
.dark_mode footer .logo-svg {fill: #000; transition: fill 0.2s;}
.dark_mode .selected:before, .dark_mode .day-and-night-switch {background: #fff !important; transition: background 0.2s;}
.dark_mode .day-and-night-switch {border-color: #fff;}
.dark_mode .switch-selected {color: #fff !important; transition: color 0.2s;}
.dark_mode .kitchen-bar-h1:before {content: "Bar"}
.dark_mode .only-night {display: block;}
.dark_mode .only-day {display: none;}

p, a, li, .h3, td, .switch-selected, footer p, .day-and-night-btn  {transition: color 0.2s;}
#header-background, #sp-modal-menu-wrap, .hamburger-bar, footer, .selected:before, .day-and-night-switch, .change-switch, header { transition: background 0.2s;}
.logo-svg {transition: fill 0.2s;}


html { color: #000001; font-size: 14px;}
body {margin: 0 auto; font-family: heisei-maru-gothic-std, sans-serif; -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;}
body * {margin: 0; padding: 0; box-sizing: border-box;}
.main {position: relative; height: calc(100vw * 0.6); overflow: hidden;margin-bottom: 30px;}
.img {width: 100%; position: absolute; top: 50%; left: 50%; transform: translate(-50%, -50%);-webkit-transform: translate(-50%, -50%); -ms-transform: translate(-50%, -50%);}
rt { margin-bottom: -8px; transform: translateY(8px);}
.side-space {margin-left: 8vw;margin-right: 8vw; }
a {text-decoration: none; color: #969594}
ul {list-style-type: none;list-style-position: inside;margin-bottom: 20px; line-height: 2.0}
h1 {margin: 40px 0; font-size: 1.4rem;}
h4 {margin-bottom: 10px;font-weight: 400;font-size: 1.0rem;}
.section {margin-bottom: 100px;}
p {margin-bottom: 0;font-weight: 400; font-size: 1.0rem; line-height: 2.0;}
.only-night {display: none;}
.only-day {display: block;}
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

.only-pc {display: none;}
.sp-br {display: block;}


@media screen and (min-width: 820px){
  .container {padding-top: 0;}
  p, li {font-size: 0.9rem}
  .only-pc {display: block;}
  .only-sp {display: none;}
  .sp-br {display: inline;}
  .side-space { margin-left: 0; margin-right: 0;}
  .section {max-width: 800px;    margin: 0 auto 120px !important;}
  .day-and-night-switch-wrap {bottom: 20px;right: 20px;zoom: 1.2;}
  .positive-button a {padding: 10px 30px;}
  .place {display: flex; align-items: end;}
  .map-image {width: 65%;height:350px;margin-right: 20px;}
  .address-hours {flex: 1;}

  .business-hours-table {border-collapse: collapse;font-size: 0.9rem;}
  .address, .business-hours {text-align: left;}
  .business-hours-table th {text-align: left;}
  .business-hours-table tr {height: 30px;}
}
</style>

<script>
export default {
  data() {
    return {
        active: this.$active(),
        day: this.$day()
      }
  },
  mounted() {
      Typekit.load({async: true})
      
  },
  methods: {
    onClick() {
      this.active = !this.active
      this.day = !this.day

    }
  }

}

</script>
