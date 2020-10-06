<template>
    <div class="side-space place" id="map">
    <div class="map-image">
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3267.497146102844!2d135.76732111485703!3d35.01929088035394!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6001088aebfe2c75%3A0xbaf87636ce970575!2z44CSNjAyLTA4NjIg5Lqs6YO95bqc5Lqs6YO95biC5LiK5Lqs5Yy65Ye65rC055S677yS77yW77yQ!5e0!3m2!1sja!2sjp!4v1596409148670!5m2!1sja!2sjp" width="100%" height="100%" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>
    </div>
    <div class="address-hours">
        <div class="address">
        <p :class="{ 'address-name': true }">soco Kyoto</p>
        <p :class="{ 'address-text': true }">〒602-0862<br>京都市上京区河原町通丸太町上る出水町260</p>
        <ul class="how-to-way">
            <li>市バス河原町丸太町下車すぐ</li>
            <li>京阪神宮丸太町から徒歩5分</li>
            <li>お車でお越しの方は近隣のコインパーキングをご利用ください。</li>
        </ul>
        </div>
        <div class="business-hours">
        <p :class="{ 'business-hours-title': true }">営業時間</p>
            <table class="business-hours-table">
            <tr>
                <th class="gray">soco Kitchen</th>
                <td>11:00 〜 15:00</td>
            </tr>
            <tr>
                <th class="gray">soco Bar</th>
                <td>18:00 〜 Late</td>
            </tr>
            <!--<tr>
                <th class="gray">soco Labo</th>
                <td>9:00 〜 18:00</td>
            </tr>
            <tr>
                <th class="gray">soco Rooms</th>
                <td>9:00 〜 24:00</td>
            </tr>-->
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
.address-hours {flex: 1;}
.business-hours-table {border-collapse: collapse;font-size: 0.9rem;}
.address, .business-hours {text-align: left;}
.business-hours-table th {text-align: left;}
.business-hours-table tr {height: 30px;}

}
</style>
