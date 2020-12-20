<template>
    <div>
        <div class="main-menu-wrap">
            <a href="/kitchen/" class="main-menu-box kitchen-bar-box">
                <div class="main-menu-a"><p class="box-title">Kitchen<span>&</span>Bar</p></div>
                <div class="main-menu-hover">〇〇〇〇〇〇〇〇〇〇〇〇〇〇〇〇〇〇〇〇〇〇〇〇〇〇〇〇〇〇〇〇〇〇〇〇〇〇〇〇〇〇〇〇〇〇〇〇</div>
            </a>
            <a href="javascript:void(0)" class="main-menu-box talk-box">
                <div class="main-menu-a"><p class="box-title">talk</p></div>
                <div class="main-menu-hover">〇〇〇〇〇〇〇〇〇〇〇〇〇〇〇〇〇〇〇〇〇〇〇〇〇〇〇〇〇〇〇〇〇〇〇〇〇〇〇〇〇〇〇〇〇〇〇〇</div>
            </a>
            <a href="javascript:void(0)" class="main-menu-box rooms-box">
                <div class="main-menu-a"><p class="box-title">rooms</p></div>
                <div class="main-menu-hover">〇〇〇〇〇〇〇〇〇〇〇〇〇〇〇〇〇〇〇〇〇〇〇〇〇〇〇〇〇〇〇〇〇〇〇〇〇〇〇〇〇〇〇〇〇〇〇〇</div>
            </a>
            <a href="javascript:void(0)" class="main-menu-box live-box">
                <div class="main-menu-a"><p class="box-title">live</p></div>
                <div class="main-menu-hover">〇〇〇〇〇〇〇〇〇〇〇〇〇〇〇〇〇〇〇〇〇〇〇〇〇〇〇〇〇〇〇〇〇〇〇〇〇〇〇〇〇〇〇〇〇〇〇〇</div>
            </a>
            <a href="javascript:void(0)" class="main-menu-box gallery-box">
                <div class="main-menu-a"><p class="box-title">gallery</p></div>
                <div class="main-menu-hover">〇〇〇〇〇〇〇〇〇〇〇〇〇〇〇〇〇〇〇〇〇〇〇〇〇〇〇〇〇〇〇〇〇〇〇〇〇〇〇〇〇〇〇〇〇〇〇〇</div>
            </a>
            <a href="javascript:void(0)" class="main-menu-box honey-box">
                <div class="main-menu-a"><p class="box-title">honey</p></div>
                <div class="main-menu-hover">〇〇〇〇〇〇〇〇〇〇〇〇〇〇〇〇〇〇〇〇〇〇〇〇〇〇〇〇〇〇〇〇〇〇〇〇〇〇〇〇〇〇〇〇〇〇〇〇</div>
            </a>
            <a href="javascript:void(0)" class="main-menu-box therapy-box">
                <div class="main-menu-a"><p class="box-title">therapy</p></div>
                <div class="main-menu-hover">〇〇〇〇〇〇〇〇〇〇〇〇〇〇〇〇〇〇〇〇〇〇〇〇〇〇〇〇〇〇〇〇〇〇〇〇〇〇〇〇〇〇〇〇〇〇〇〇</div>
            </a>
        </div>
    </div>
</template>

<style>
.main-menu-wrap {max-width: 800px;height: 600px; background: url(~assets/top/pipe-background.png) no-repeat center center/auto 100%;margin: 60px auto 30px; position: relative;zoom: 1.1;}
.main-menu-box {position: absolute;background: gray; }
.main-menu-box:before {content:"";position: absolute;top: 0; left:0;right: 0; bottom:0;background: rgba(0,0,0,0.4);}
.kitchen-bar-box {top: -5%;left: 25%;width: 250px;height: 200px; background: url(~assets/top/food-box.jpg) no-repeat center center/100% auto;}
.talk-box {top: 0%;right: 14%;width: 150px;height: 120px;background: url(~assets/top/talk-box.jpg) no-repeat center center/100% auto;}
.therapy-box{top: calc(15% + 150px);left: 10%;width: 180px; height:140px;}
.live-box{top: calc(10% + 100px);right: 5%;width: 200px;height: 160px;background: url(~assets/top/live-box.jpg) no-repeat center center/auto 100%;}
.gallery-box{top: calc(15% + 150px + 100px);left: 40%;width: 180px;height: 130px;background: url(~assets/top/gallery-box.jpg) no-repeat center center/100% auto;}
.honey-box {top: calc(20% + 150px + 100px + 130px + 7%);left: 40%;width: 130px;height: 100px;}
.rooms-box {top: calc(15% + 100px + 150px + 20%);right: 10%;width: 140px;height: 110px;}
.box-title {position: absolute;top: 50%;left: 50%;transform: translate(-50%, -50%);color: #fff;text-align: center;line-height: 1.3;font-size: 1.2rem;font-weight:900;}
.box-title span {display: block;}
.main-menu-hover {position: absolute;top:0;left:0;right:0;bottom:0;background:rgba(0,0,0,0.9);opacity: 0;transition: opacity 0.3s;padding: 5px;font-size: 0.8rem;overflow: hidden;}
.main-menu-box:hover .main-menu-hover {display: block;opacity: 1;transition: opacity 0.3s;}

@media screen and (max-width: 880px) {
    .main-menu-wrap {zoom: 1.0;}
}
@media screen and (max-width: 800px) {
    .main-menu-wrap {zoom: 0.9;}
}
@media screen and (max-width: 720px) {
    .main-menu-wrap {zoom: 0.8;}
}
@media screen and (max-width: 640px) {
    .main-menu-wrap {zoom: 0.7;}
}
@media screen and (max-width: 560px) {
    .main-menu-wrap {zoom: 0.6;}
}
@media screen and (max-width: 480px) {
    .main-menu-wrap {zoom: 0.5;}
}
@media screen and (max-width: 400px) {
    .main-menu-wrap {zoom: 0.4;}
}
</style>