<template>
    <div class="side-space place">
    <div class="map-image">
        <img src="~/assets/top/map.jpg" alt="地図" class="img">
    </div>
    <div class="address-hours">
        <div class="address">
        <p :class="{ 'address-name': true }">soco Kyoto</p>
        <p :class="{ 'address-text': true }">〒602-0862 京都府上京区出水町260</p>
        <ul class="how-to-way">
            <li>神宮丸太町駅から徒歩5分</li>
            <li>神宮丸太町駅から徒歩5分</li>
            <li>神宮丸太町駅から徒歩5分</li>
        </ul>
        </div>
        <div class="business-hours">
        <p :class="{ 'business-hours-title': true }">営業時間</p>
            <table class="business-hours-table">
            <tr>
                <th class="gray">soco Kitchen</th>
                <td>18:00 〜 24:00</td>
            </tr>
            <tr>
                <th class="gray">soco Bar</th>
                <td>9:00 〜 18:00</td>
            </tr>
            <tr>
                <th class="gray">soco Labo</th>
                <td>9:00 〜 18:00</td>
            </tr>
            <tr>
                <th class="gray">soco Rooms</th>
                <td>9:00 〜 24:00</td>
            </tr>
            </table>
        </div>
    </div>
    </div>
</template>

<style>
.map-image {position: relative;height: calc(100vw * 0.6); overflow: hidden;margin-bottom: 20px;}

.address {text-align: center; margin-bottom: 30px;}
.address-name {font-weight: 900; font-size: 1.1rem; margin-bottom: 10px;}
.address-text {margin-bottom: 10px;}

.business-hours {text-align: center;}
.business-hours-table {table-layout: fixed;width: 100%;}
.business-hours-table th { text-align: center;font-weight: 400;}
.business-hours-table tr {padding: 10px 0}

@media screen and (min-width: 820px){
.container {padding-top: 0;}

.map-image {width: 65%;height:350px;margin-right: 20px;}
.map-image img {height: 100%; width: auto;}
.address-hours {flex: 1;}

.business-hours-table {border-collapse: collapse;font-size: 0.9rem;}
.address, .business-hours {text-align: left;}
.business-hours-table th {text-align: left;}
.business-hours-table tr {height: 30px;}

}
</style>
