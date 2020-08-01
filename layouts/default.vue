<template>
  <div :class="{ 'dark_mode': active }">
    <Header />
    <Nuxt />
    <Footer />
    <div class="day-and-night-switch-wrap">
      <div class="day-and-night-switch">
        <span id="swith-selected-bg" :class="{ 'change-switch': active }"></span>
        <span :class="{ 'day-and-night-btn': true, 'switch-selected': day }" @click="onClick">昼</span>
        <span :class="{ 'day-and-night-btn': true, 'switch-selected': !day }" @click="onClick">夜</span>
      </div>
    </div>
    
</div>
  </div>
</template>

<style>

.day-and-night-switch-wrap {position:fixed; bottom: 10px; right: 10px;}
.day-and-night-switch {position: relative; height: 45px; background: #000; border-radius: 50px;border: solid 3px #000;overflow:hidden;}
.day-and-night-btn {position:relative; color: #fff;font-size: 1.3rem; display: inline-block; width: 50px;height: 39px;line-height: 39px;text-align: center;border-radius: 50px;z-index: 100;}
.switch-selected {color: #000;}
#swith-selected-bg {position: absolute; background: #fff; height: 39px;width: 55px; top: 0;border-radius: 50px; transition: transform .3s; transform: translateX(0)}
.change-switch {transform: translateX(55px) !important;}


.dark_mode {background: #000 !important;}
.dark_mode p, .dark_mode a, .dark_mode li, .dark_mode .h3, .dark_mode td {color: #fff;}
.dark_mode a {border-color: #fff !important;}
.dark_mode #header-background, .dark_mode #sp-modal-menu-wrap {background: #000 !important;}
.dark_mode .logo-svg {fill: #fff;}
.dark_mode .hamburger-bar {background: #fff !important;}
.dark_mode footer {background: #fff !important;}
.dark_mode footer p {color: #000 !important;}
.dark_mode footer .logo-svg {fill: #000;}
.dark_mode .selected:before {background: #fff !important;}


html { color: #000001; font-size: 14px;}
body {margin: 0 auto; font-family: "San Francisco", Sans-Serif;}
body * {margin: 0; padding: 0; box-sizing: border-box;}
.side-space {margin-left: 8vw;margin-right: 8vw; }
a {text-decoration: none; color: #969594}
ul {list-style-type: none;list-style-position: inside;margin-bottom: 20px; line-height: 2.0}
h1 {margin: 40px 0; font-size: 1.4rem;}
h4 {margin-bottom: 10px;font-weight: 400;font-size: 1.0rem;}
p {margin-bottom: 0;font-weight: 400; font-size: 1.0rem; line-height: 2.0;}
.gray {color: #A2A2A2 !important;}
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
      return {
        active: this.$active(),
        day: this.$day()
    }
  },
  methods: {
    onClick() {
      this.active = !this.active
      this.day = !this.day

    }
  }

}

</script>
