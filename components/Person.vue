<template>
<div class="person-introduction side-space">
    <div class="person-image">
        <img class="img" src="~/assets/top/person.png">
    </div>
    <div class="person-text">
        <p :class="{ 'person-name': true }">ケイちゃん</p>
        <p class="person-hours gray">出没時間：主に夜</p>
        <p :class="{ 'person-description': true }">
        さまざまな人や文化がつながり、新しいものをつむぎ出し、それを人びとにつたえる。そんな「場」がsocoです。<br>
        生まれたばかりのsocoは、ただのハコ。そこにいのちを吹き込み、かたちを創っていくのは、socoにつどう人びと。
        </p>
    </div>
</div>
</template>

<style>

.person-introduction {display: flex; flex-wrap: nowrap; margin-bottom: 40px;}
.person-image {position: relative; width: 30vw; height: 30vw; overflow: hidden; border-radius: 50%;}
.person-text {flex: 1;margin-left: 10px; text-align:left;}
.person-name {font-size: 1.2rem;}
.person-hours {font-size: 0.9rem;}
.person-description {font-size: 0.9rem;}
@media screen and (min-width: 820px){
.person-introduction {max-width: 600px; margin-left: auto !important; margin-right: auto !important;}
.person-image {width: 120px; height: 120px; margin-right: 30px;}

}
</style>
