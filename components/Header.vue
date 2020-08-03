<template>
<header>
    <div id="header-wrap">
    <div id="header-background"></div>
        <div id="header-logo">
            <a href="/">
            <Logo />
            </a>
        </div>
        <div id="header-catch" class="only-pc"><p>京都のXXXX</p></div>
        <ul class="header-menu only-pc" id="header-menu-left">
            <li class="only-day"><a href="/kitchen/">Kitchen</a></li>
            <li class="only-night"><a href="/bar/">Bar</a></li>
            <li class="floor-not-yet"><a href="javascript:void(0)">Works</a></li>
            <li class="floor-not-yet"><a href="javascript:void(0)">Rooms</a></li>
            <li class="floor-not-yet"><a href="javascript:void(0)">Access</a></li>
        </ul>
        <ul class="header-menu only-pc" id="header-menu-sns">
            <li><a href="" class="fb"></a></li>
            <li><a href="" class="insta"></a></li>
        </ul>
        <div class="only-sp" id="header-sp-menu">
            <input type="checkbox" name="click-hamburger" id="click-hamburger">
            <label id="header-hamburger" for="click-hamburger"　onclick="">
                <span class="hamburger-bar-wrap">
                    <span id="hamburger-bar-top" :class="{'hamburger-bar': true }"></span>
                </span>
                <span class="hamburger-bar-wrap">
                    <span id="hamburger-bar-bottom" :class="{'hamburger-bar': true }"></span>
                </span>
            </label>
            <div id="sp-modal-menu-wrap">
                <ul id="sp-modal-menu">
                    <li class="only-day"><a href="/kitchen/" :class="{ 'sp-modal-menu-a': true }">Kitchen</a></li>
                    <li class="only-night"><a href="/bar/" :class="{ 'sp-modal-menu-a': true }">Bar</a></li>
                    <li><a href="javascript:void(0)" :class="{ 'sp-modal-menu-a floor-not-yet': true }">Labo</a></li>
                    <li><a href="javascript:void(0)" :class="{ 'sp-modal-menu-a floor-not-yet': true }">Rooms</a></li>
                    <li><a href="javascript:void(0)" :class="{ 'sp-modal-menu-a floor-not-yet': true }">Access</a></li>
                </ul>
                <!--<div class="change-lang">
                <p><span class="selected-lang">日本語</span> / <span class="noselected-lang">English</span></p>
                </div>-->
            </div>
        </div>
    </div>
</header>
</template>

<style>
    header {position: fixed; background: #fff; padding: 10px 15px; width: 100%;z-index: 1000;}
    header .logo-svg {position: relative; z-index: 10000;}
    header ul {line-height: 1;}
    #header-wrap {display: flex; flex-wrap: nowrap; align-items: baseline; max-width: 800px;margin: 0 auto;}
    #header-logo{ margin: auto 0; display: block;}
    #header-logo a {display: inherit;}
    #header-catch {margin: auto 30px;}
    #header-catch p {margin-bottom: 0;}
    .header-menu {height: 100%; }
    .header-menu li {display: inline-block; padding: 0 10px;}
    .header-menu li a {color: #000;}

    #header-menu-left {margin: auto 0 auto auto; margin-left: auto; }
    #header-menu-sns li a {font-family: "Font Awesome 5 Brands"; font-weight: 900; display: block;text-align: center; color: #000;}
    #header-menu-sns { margin: auto 0 auto 20px;}

    header .floor-not-yet:before {width: 100px;}
    .no-link {color: #E5E5E5 !important;}

    .insta::before {content: '\f16d'; }
    .fb::before {content: '\f39e';}
    .twitter::before {content: '\f099';}

    #header-sp-menu {position: relative; margin-left: auto; width: 48px; height: 48px;}
    #header-hamburger {position: relative;z-index: 1000}
    .hamburger-bar-wrap {position: absolute; top: 9px;left: 9px;width: 30px;height: 30px;}
    .hamburger-bar {display: block; position: absolute; width: 17px;height: 2px; left: 7px;background: rgb(0 0 0);border-radius: 0.5px;}
    #hamburger-bar-top {top: 10px;}
    #hamburger-bar-bottom {bottom: 10px;}
    #header-background {position: absolute; top: 0;left:0;bottom:0;right:0;background:#fff; z-index:1;}
    #sp-modal-menu-wrap {position: fixed; top:0; 
    transform-origin: 0% 0%;
    transform: translate(0, calc(-100% + 68px));
    transition: all 0.5s cubic-bezier(0.77,0.2,0.05,1.0);
    left:0; right:0; box-shadow: 2px 2px 10px rgba(0,0,0,0.2); background: #fff; padding: 75px 30px 20px; z-index:-1;overflow: hidden;}
    input[id="click-hamburger"]:checked + label + div {transform: none !important;}
    #sp-modal-menu {text-align: center;}
    .sp-modal-menu-a {color: #000; display: inline-block;padding: 10px; font-size: 1.2rem;}
    .change-lang {text-align: right;}
    .noselected-lang {color: #A2A2A2;}


    input[id="click-hamburger"] {display: none;}
      input[id="click-hamburger"]:checked + label .hamburger-bar-wrap:nth-child(1) {transform: rotate(45deg) translateY(3.3px); transition: all 0.3s;}
      input[id="click-hamburger"]:checked + label .hamburger-bar-wrap:nth-child(2) {transform: rotate(-45deg) translateY(-3.3px); transition: all 0.3s;}
      
      .hamburger-bar-wrap {transition: all 0.3s;}
      @media screen and (min-width: 820px){
        header .floor-not-yet:before {width: 90% !important;}
        header {position: relative;}
        #header-background {display: none;}
        #sp-modal-menu-wrap {display: none;}
        #header-menu-sns li a {font-size: 1.2rem;}
      }
</style>

<script>

</script>