<template>
<footer :class="{ 'dark_mode_white_background': active }">
    <div id="footer-wrap" :class="{ 'side-space': true, 'dark_mode_white_background': active }">
        <div :class="{ 'footer-logo': true, 'dark_mode_white': active }">
            <Logo />
            <p :class="{ 'logo-bottom-text': true, 'dark_mode_balck_color': active }">soco kyoto</p>
        </div>

        <div class="footer-info">
            <p :class="{ 'footer-addres': true, 'dark_mode_balck_color': active }">〒602-0862 京都府上京区出水町260</p>
            <p :class="{ 'footer-tel': true, 'dark_mode_balck_color': active }">Tel: 070-6548-8399</p>
            <p :class="{ 'footer-email': true, 'dark_mode_balck_color': active }">Email: support@soco-kyoto.com</p>
        </div>

        <div class="copyright">
            <p :class="{ 'dark_mode_balck_color': active }">COPYRIGHT  soco kyoto.</p>
        </div>

    </div>
</footer>
</template>

<style>
      footer { background: #000; color: #fff; padding-top: 30px;}
      .footer-logo {text-align: center; margin-bottom: 20px;}
      .footer-logo .logo-svg {fill: #fff; height: 30px !important;}
      .logo-bottom-text {font-size: 0.8rem; margin-top: -5px;}

      .footer-info {margin-bottom: 20px;}

      .copyright {text-align: center;padding: 20px 0;}

      @media screen and (min-width: 820px){

      }
</style>

<script>
export default {
  data() {
      return {
        active: this.$active(),
        day: this.$day()
      }
    }
}

</script>