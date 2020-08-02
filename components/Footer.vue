<template>
<footer>
    <div id="footer-wrap" :class="{ 'side-space': true }">
        <div :class="{ 'footer-logo': true}">
            <Logo />
            <p :class="{ 'logo-bottom-text': true }">soco kyoto</p>
        </div>

        <div class="footer-info">
            <p :class="{ 'footer-addres': true }">〒602-0862 京都府上京区出水町260</p>
            <p :class="{ 'footer-tel': true }">Tel: 070-6548-8399</p>
            <p :class="{ 'footer-email': true }">Email: support@soco-kyoto.com</p>
        </div>

        <div class="copyright">
            <p>COPYRIGHT  soco kyoto.</p>
        </div>

    </div>
</footer>
</template>

<style>
      footer { background: #000; color: #fff; padding-top: 30px;text-align: center;}
      #footer-wrap {max-width: 800px;margin: 0 auto;}
      .footer-logo {text-align: center; margin-bottom: 20px;}
      .footer-logo .logo-svg {fill: #fff; height: 30px !important;}
      .logo-bottom-text {font-size: 0.8rem; margin-top: -5px;}

      .footer-info {margin-bottom: 20px;}

      .copyright {text-align: center;padding: 20px 0;}

      @media screen and (min-width: 820px){

      }
</style>
