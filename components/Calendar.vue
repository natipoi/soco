<template>
    <div class="calendar">
    
    <div class="calendar-title-wrap">
        <div class="calendar-title">
            <button @click="prevMonth" :class="{'calendar-btn': true, 'calendar-arrow prev-arrow': true, 'calender-hidden': !formatMonth}"></button>
            <button @click="prevWeek" :class="{'calendar-btn': true, 'calendar-arrow prev-arrow': true, 'calender-hidden': formatMonth}"></button>
            <div class="calendar-sapn">{{ formatDate }}</div>
            <button @click="nextMonth" :class="{'calendar-btn': true, 'calendar-arrow next-arrow': true, 'calender-hidden': !formatMonth}"></button>
            <button @click="nextWeek" :class="{'calendar-btn': true, 'calendar-arrow next-arrow': true, 'calender-hidden': formatMonth}"></button>
        </div>
        <div class="calendar-change-status-wrap">
        <button @click="formatChangeToWeek" :class="{ 'calendar-status-active': !formatMonth, 'calendar-change-status': true, 'calendar-btn': true}">週</button>
        <button @click="formatChangeToMonth" :class="{ 'calendar-status-active': formatMonth, 'calendar-change-status': true, 'calendar-btn': true}">月</button>
        </div>
    </div>
    <div :class="{ 'calendar-wrap': true, 'calender-hidden': !formatMonth}">
        <div class="calendar-row">
            <div class="calendar-each-box week-title">日</div>
            <div class="calendar-each-box week-title">月</div>
            <div class="calendar-each-box week-title">火</div>
            <div class="calendar-each-box week-title">水</div>
            <div class="calendar-each-box week-title">木</div>
            <div class="calendar-each-box week-title">金</div>
            <div class="calendar-each-box week-title">土</div>
        </div>
        <div
            v-for="(week, index) in calendars"
            :key="index"
            class="calendar-row"
        >
            <div
            v-for="(day, index) in week"
            :key="index"
            class="calendar-each-box"
            >
                <div v-show="day.event1" class="calendar-sp-event-link" :date="day.full_date" @click="calendarClick"></div>
                <span>{{ day.date }}</span>
                <div class="event-box">
                    
                    <ul>
                        <li v-show="day.event1" :class="{ 'calendar-event': true, 'event-color-red': day.event_color_red1, 'event-color-blue': day.event_color_blue1, 'event-color-green': day.event_color_green1}">
                            <nuxt-link :to="`/events/${day.slug1}`">
                                <span class="only-pc">{{ day.title1 }}</span>
                                <span class="only-pc">{{ day.start_time1 }}〜{{ day.end_time1 }}</span>
                            </nuxt-link>
                        </li>
                        <li v-show="day.event2" :class="{ 'calendar-event': true, 'event-color-red': day.event_color_red1, 'event-color-blue': day.event_color_blue1, 'event-color-green': day.event_color_green1}">
                            <nuxt-link :to="`/events/${day.slug2}`">
                                <span class="only-pc">{{ day.title2 }}</span>
                                <span class="only-pc">{{ day.start_time2 }}〜{{ day.end_time2 }}</span>
                            </nuxt-link>
                        </li>
                        <li v-show="day.event3" :class="{ 'calendar-event': true, 'event-color-red': day.event_color_red1, 'event-color-blue': day.event_color_blue1, 'event-color-green': day.event_color_green1}">
                            <nuxt-link :to="`/events/${day.slug3}`">
                                <span class="only-pc">{{ day.title3 }}</span>
                                <span class="only-pc">{{ day.start_time3 }}〜{{ day.end_time3 }}</span>
                            </nuxt-link>
                        </li>
                        <li v-show="day.event4" :class="{ 'calendar-event': true, 'event-color-red': day.event_color_red1, 'event-color-blue': day.event_color_blue1, 'event-color-green': day.event_color_green1}">
                            <nuxt-link :to="`/events/${day.slug4}`">
                                <span class="only-pc">{{ day.title4 }}</span>
                                <span class="only-pc">{{ day.start_time4 }}〜{{ day.end_time4 }}</span>
                            </nuxt-link>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </div>

    <div :class="{ 'calendar-wrap': true, 'calender-hidden': formatMonth, 'week-wrap': true}">
        <div class="calendar-row">
            <div
                v-for="(day, index) in week"
                :key="index"
                class="calendar-each-box week-title"
            >
                <span class="week-youbi">{{ day.formatYoubi }}</span><span class="week-day">{{ day.date }}</span>

            </div>
        </div>
        <div 
            v-for="index in 14"
            :key="index"
            class="calendar-row week-row"
        >
            <div class="week-memori">{{ index + 9 }}:00</div>
            <div 
                v-for="(day, index2) in week"
                :key="index2"
                class="calendar-each-box week-each-box"
            >
                <div v-show="day.start_time1 == String(index + 9)" 
                  :class="{ 
                    'week-event': true, 
                    'event-color-red': day.event_color_red1, 
                    'event-color-blue': day.event_color_blue1, 
                    'event-color-green': day.event_color_green1,
                    'week-event-1': day.one_hour1,
                    'week-event-130': day.one_half_hours1,
                    'week-event-2': day.two_hours1,
                    'week-event-230': day.two_half_hours1,
                    'week-event-3': day.three_hours1,
                    'week-event-330': day.three_half_hours1,
                    'week-event-4': day.four_hours1,
                    'week-event-430': day.four_half_hours1,
                    'week-event-5': day.five_hours1,
                    'week-event-530': day.five_half_hours1,
                    'week-event-6': day.six_hours1,
                    'week-event-630': day.six_half_hours1,
                    'week-event-7': day.seven_hours1,
                    'week-event-730': day.seven_half_hours1,
                    'week-event-8': day.eight_hours1,
                    'week-event-830': day.eight_half_hours1,
                    'week-event-9': day.nine_hours1,
                    'week-event-930': day.nine_half_hours1,
                    'week-event-10': day.ten_hours1,
                    'week-event-1030': day.ten_half_hours1
                   }"
                ><nuxt-link :to="`/events/${day.slug1}`" class="week-event-link">{{ day.title1 }}</nuxt-link></div>
                <div v-show="day.start_time2 == String(index + 9)" 
                  :class="{ 
                    'week-event': true, 
                    'event-color-red': day.event_color_red2, 
                    'event-color-blue': day.event_color_blue2, 
                    'event-color-green': day.event_color_green2,
                    'week-event-1': day.one_hour2,
                    'week-event-130': day.one_half_hours2,
                    'week-event-2': day.two_hours2,
                    'week-event-230': day.two_half_hours2,
                    'week-event-3': day.three_hours2,
                    'week-event-330': day.three_half_hours2,
                    'week-event-4': day.four_hours2,
                    'week-event-430': day.four_half_hours2,
                    'week-event-5': day.five_hours2,
                    'week-event-530': day.five_half_hours2,
                    'week-event-6': day.six_hours2,
                    'week-event-630': day.six_half_hours2,
                    'week-event-7': day.seven_hours2,
                    'week-event-730': day.seven_half_hours2,
                    'week-event-8': day.eight_hours2,
                    'week-event-830': day.eight_half_hours2,
                    'week-event-9': day.nine_hours2,
                    'week-event-930': day.nine_half_hours2,
                    'week-event-10': day.ten_hours2,
                    'week-event-1030': day.ten_half_hours2
                   }"
                ><nuxt-link :to="`/events/${day.slug2}`" class="week-event-link">{{ day.title2 }}</nuxt-link></div>
                <div v-show="day.start_time3 == String(index + 9)" 
                  :class="{ 
                    'week-event': true, 
                    'event-color-red': day.event_color_red3, 
                    'event-color-blue': day.event_color_blue3, 
                    'event-color-green': day.event_color_green3,
                    'week-event-1': day.one_hour3,
                    'week-event-130': day.one_half_hours3,
                    'week-event-2': day.two_hours3,
                    'week-event-230': day.two_half_hours3,
                    'week-event-3': day.three_hours3,
                    'week-event-330': day.three_half_hours3,
                    'week-event-4': day.four_hours3,
                    'week-event-430': day.four_half_hours3,
                    'week-event-5': day.five_hours3,
                    'week-event-530': day.five_half_hours3,
                    'week-event-6': day.six_hours3,
                    'week-event-630': day.six_half_hours3,
                    'week-event-7': day.seven_hours3,
                    'week-event-730': day.seven_half_hours3,
                    'week-event-8': day.eight_hours3,
                    'week-event-830': day.eight_half_hours3,
                    'week-event-9': day.nine_hours3,
                    'week-event-930': day.nine_half_hours3,
                    'week-event-10': day.ten_hours3,
                    'week-event-1030': day.ten_half_hours3
                   }"
                ><nuxt-link :to="`/events/${day.slug3}`" class="week-event-link">{{ day.title3 }}</nuxt-link></div>
                <div v-show="day.start_time4 == String(index + 9)" 
                  :class="{ 
                    'week-event': true, 
                    'event-color-red': day.event_color_red4, 
                    'event-color-blue': day.event_color_blue4, 
                    'event-color-green': day.event_color_green4,
                    'week-event-1': day.one_hour4,
                    'week-event-130': day.one_half_hours4,
                    'week-event-2': day.two_hours4,
                    'week-event-230': day.two_half_hours4,
                    'week-event-3': day.three_hours4,
                    'week-event-330': day.three_half_hours4,
                    'week-event-4': day.four_hours4,
                    'week-event-430': day.four_half_hours4,
                    'week-event-5': day.five_hours4,
                    'week-event-530': day.five_half_hours4,
                    'week-event-6': day.six_hours4,
                    'week-event-630': day.six_half_hours4,
                    'week-event-7': day.seven_hours4,
                    'week-event-730': day.seven_half_hours4,
                    'week-event-8': day.eight_hours4,
                    'week-event-830': day.eight_half_hours4,
                    'week-event-9': day.nine_hours4,
                    'week-event-930': day.nine_half_hours4,
                    'week-event-10': day.ten_hours4,
                    'week-event-1030': day.ten_half_hours4
                   }"
                ><nuxt-link :to="`/events/${day.slug4}`" class="week-event-link">{{ day.title4 }}</nuxt-link></div>
            </div>
        </div>
    </div>

    <div class="event-details-popup-wrap">
        <div class="event-details-bg" @click="eventDetailClick"></div>
        <div class="event-details-popup">
            <div class="event-details-date">{{ day_events.date }}</div>
            <div class="event-details-suchedule-wrap">
            <div class="event-details-suchedule">
                
                <div 
                    v-for="index in 15"
                    :key="index"
                    class="event-details-time-box">
                    <div v-show="day_events[`${index + 9}`]" :class="{'popup-event': true}">
                        <nuxt-link
                            :to="`/events/` + day_events[`${index + 9}`].get('slug')"
                            :class="{ 
                                'week-event': true, 
                                'event-color-red': day_events[`${index + 9}`].get('event_color_red'), 
                                'event-color-blue': day_events[`${index + 9}`].get('event_color_blue'), 
                                'event-color-green': day_events[`${index + 9}`].get('event_color_green'),
                                'week-event-1': day_events[`${index + 9}`].get('one_hour'),
                                'week-event-130': day_events[`${index + 9}`].get('one_half_hours'),
                                'week-event-2': day_events[`${index + 9}`].get('two_hours'),
                                'week-event-230': day_events[`${index + 9}`].get('two_half_hours'),
                                'week-event-3': day_events[`${index + 9}`].get('three_hours'),
                                'week-event-330': day_events[`${index + 9}`].get('three_half_hours'),
                                'week-event-4': day_events[`${index + 9}`].get('four_hours'),
                                'week-event-430': day_events[`${index + 9}`].get('four_half_hours'),
                                'week-event-5': day_events[`${index + 9}`].get('five_hours'),
                                'week-event-530': day_events[`${index + 9}`].get('five_half_hours'),
                                'week-event-6': day_events[`${index + 9}`].get('six_hours'),
                                'week-event-630': day_events[`${index + 9}`].get('six_half_hours'),
                                'week-event-7': day_events[`${index + 9}`].get('seven_hours'),
                                'week-event-730': day_events[`${index + 9}`].get('seven_half_hours'),
                                'week-event-8': day_events[`${index + 9}`].get('eight_hours'),
                                'week-event-830': day_events[`${index + 9}`].get('eight_half_hours'),
                                'week-event-9': day_events[`${index + 9}`].get('nine_hours'),
                                'week-event-930': day_events[`${index + 9}`].get('nine_half_hours'),
                                'week-event-10': day_events[`${index + 9}`].get('ten_hours'),
                                'week-event-1030': day_events[`${index + 9}`].get('ten_half_hours')
                            }"
                        >
                            <p class="popup-event-title">{{ day_events[`${index + 9}`].get("title") }}</p>
                            <p class="popup-event-description">{{ day_events[`${index + 9}`].get("description") }}</p>
                        </nuxt-link>
                    </div>
                </div>

            </div>
            </div>
        </div>
    </div>
  </div>
</template>
<style>
html, body {
  overflow: auto;
  height: 100%;
}
.event-details-popup-wrap {display: none;position: fixed; top: 0%;left:0%;bottom: 0%;right: 0%;z-index: 1000;}
.event-details-popup {position: absolute;top: 20%; left: 10%; bottom: 10%; right:10%;background: #fff;border-radius: 5px;overflow: hidden;z-index: 10000;}
.event-details-bg {position: absolute;top: 0; left: 0; bottom: 0; right:0;background: rgba(0,0,0,0.8);z-index: 1000;}
.event-details-suchedule-wrap {overflow-y: scroll;position: absolute;
    top: 46px;
    left: 10px;
    right: 0;
    bottom: 0;}

.event-details-date {text-align: left;padding: 20px 0 5px 10px;box-shadow: 2px 2px 5px rgba(0,0,0,0.2);font-weight: 900;}
.event-details-suchedule {margin-left: 45px;border-left: solid 1px rgba(0,0,0,0.1);}
.event-details-time-box {position: relative; border-bottom: solid 1px rgba(0,0,0,0.1);border-right: solid 1px rgba(0,0,0,0.1);height: 30px;}
.event-details-time-box:before {content: "11:00"; position: absolute; top: -8px;left: -45px;font-size:0.7rem;color: #a2a2a2}
.event-details-time-box:after {content: ""; position: absolute; top: -1px;left: -10px;width: 10px;height: 1px;background: rgba(0,0,0,0.1);font-size:0.7rem;}
.event-details-time-box:first-child {height: 20px;}
.event-details-time-box:first-child::before, .event-details-time-box:first-child::after {display: none;}
.event-details-time-box:nth-child(2)::before {content: "11:00";}
.event-details-time-box:nth-child(3)::before {content: "12:00";}
.event-details-time-box:nth-child(4)::before {content: "13:00";}
.event-details-time-box:nth-child(5)::before {content: "14:00";}
.event-details-time-box:nth-child(6)::before {content: "15:00";}
.event-details-time-box:nth-child(7)::before {content: "16:00";}
.event-details-time-box:nth-child(8)::before {content: "17:00";}
.event-details-time-box:nth-child(9)::before {content: "18:00";}
.event-details-time-box:nth-child(10)::before {content: "19:00";}
.event-details-time-box:nth-child(11)::before {content: "20:00";}
.event-details-time-box:nth-child(12)::before {content: "21:00";}
.event-details-time-box:nth-child(13)::before {content: "22:00";}
.event-details-time-box:nth-child(14)::before {content: "23:00";}
.event-details-time-box:nth-child(15)::before {content: "24:00";}
.popup-event .week-event {padding: 5px 10px;overflow: hidden}
.popup-event p {text-align: left;}
.popup-event-title {font-weight: 900;}
.popup-event-description {font-size:0.9rem;}
.calendar {overflow: hidden;margin: 0px auto 30px; }
.calender-hidden {display: none;}
.calendar-sapn {font-weight:900;font-size:1.2rem;}

.calendar-title-wrap {display: block;position:relative;margin-bottom: 10px;}
.calendar-title {display: flex;justify-content: center;}
.calendar-change-status-wrap {position: relative;}
.calendar-change-status {border: solid 2px rgba(0,0,0,0.1);border-radius: 10px;padding: 0px 30px;color:#a2a2a2;font-weight: 900;}
.calendar-wrap {border: solid 2px rgba(0,0,0,0.1);color:#a2a2a2;border-radius: 10px;}

.calendar-row {display:flex;}
.calendar-each-box {position: relative;overflow: hidden;flex:1;width: 100%;border-bottom: solid 2px rgba(0,0,0,0.1);border-right: solid 2px rgba(0,0,0,0.1);padding: 5px;}
.calendar-each-box:last-child {border-right: none;}
.week-wrap .calendar-each-box {overflow: visible;}
.calendar-row:last-child .calendar-each-box {border-bottom: 0;}


.calendar-status-active {background: #a2a2a2; color: #fff;}
.week-title {text-align: center;min-height: 30px;padding:5px;}
.calendar-arrow:before {font-family: "Font Awesome 5 Free"; font-weight: 900;width: 50px;display: block;font-size: 20px;}
.calendar-arrow:hover {cursor: pointer;}
.prev-arrow:before {content:"\f053";}
.next-arrow:before {content:"\f054";}

.event-box {height: calc((96vw)/7 - 15px);overflow-y: scroll;position: relative;}
.calendar-sp-event-link {position: absolute; top: 0; left:0; right:0; bottom:0;z-index:100;}
.calendar-event {padding: 3px;margin-bottom: 5px;}
.event-color-red {background: #e4474a;border-radius: 5px; color: #fff;}
.event-color-blue {background: #00bfff; border-radius: 5px; color: #fff;}
.event-color-green {background:#00756f; border-radius: 5px; color: #fff;}
.event-color-red a, .event-color-blue a, .event-color-green a {color: #fff;}
.week-wrap { margin-left: 50px;border-radius: 0;}
.week-youbi {display: block; font-size: 0.8rem;}
.week-row {position: relative;}
.week-row:before {content: "";position: absolute; left: -10px; top:-2px;width: 10px;height: 2px;background: rgba(0,0,0,0.1);}
.week-memori {content: "11 AM"; position: absolute; left: -50px; top:-15px;width: 40px;height: 30px;line-height: 30px;color:#a2a2a2;font-size:0.8rem;}
.week-each-box {height: 25px;padding:0;position: relative;}
.week-event {display: block;position: absolute; top: 0; width: 100%;font-size: 0.7rem;z-index: 100;}
.week-event-1 {height:25px;}
.week-event-130 {height:37.5px;}
.week-event-2 {height:50px;}
.week-event-230 {height:62.5px;}
.week-event-3 {height:75px;}
.week-event-330 {height:87.5px;}
.week-event-4 {height:100px;}
.week-event-430 {height:112.5px;}
.week-event-5 {height:125px;}
.week-event-530 {height:137.5px;}
.week-event-6 {height:150px;}
.week-event-630 {height:162.5px;}
.week-event-7 {height:175px;}
.week-event-730 {height:187.5px;}
.week-event-8 {height:200px;}
.week-event-830 {height:212.5px;}
.week-event-9 {height:250px;}
.week-event-930 {height:162.5px;}
.week-event-10 {height:275px;}
.week-event-link {display: block;height: 100%;color: #fff}

.popup-event .week-event-1 {height:50px;}
.popup-event .week-event-130 {height:75px;}
.popup-event .week-event-2 {height:100px;}
.popup-event .week-event-230 {height:125px;}
.popup-event .week-event-3 {height:150px;}
.popup-event .week-event-330 {height:175px;}
.popup-event .week-event-4 {height:200px;}
.popup-event .week-event-430 {height:225px;}
.popup-event .week-event-5 {height:250px;}
.popup-event .week-event-530 {height:275px;}
.popup-event .week-event-6 {height:300px;}
.popup-event .week-event-630 {height:325px;}
.popup-event .week-event-7 {height:350px;}
.popup-event .week-event-730 {height:375px;}
.popup-event .week-event-8 {height:400px;}
.popup-event .week-event-830 {height:425px;}
.popup-event .week-event-9 {height:450px;}
.popup-event .week-event-930 {height:475px;}
.popup-event .week-event-10 {height:500px;}
.popup-event .week-event-link {display: block;height: 100%;}
/* dark_mode */
.dark_mode .calendar-wrap, .dark_mode .calendar-each-box, .calendar-change-status {border-color: #fff !important;}
.dark_mode .calendar-wrap, .dark_mode .week-memori, .dark_mode .calendar-title,.dark_mode .calendar-arrow:before {color: #fff;}
.dark_mode .week-row:before {background: #fff;}

@media screen and (max-width: 820px) {
    .calender-side {margin-left: 2vw;margin-right:2vw;}
}
@media screen and (min-width: 821px) {

    /* .calender-side {margin-left: 2vw;margin-right:2vw;} */
    .calendar-title-wrap {display: flex;justify-content: center;}
    .calendar-change-status-wrap {position: absolute;right:0;bottom:0;}
    .calendar-event {padding: 3px 5px;}
    .calendar-event span {line-height: 1.1rem;}
    .calendar-event span:last-child {font-size: 0.8rem;}
    .calendar-sp-event-link {display: none !important;}
    .event-box {height: 100px;}
    .week-wrap {max-width: 93%;}
    .week-each-box {height: 40px;}
    .week-event {font-size: 1.0rem;}

    .week-event-1 {height:40px;}
    .week-event-130 {height:60px;}
    .week-event-2 {height:80px;}
    .week-event-230 {height:100px;}
    .week-event-3 {height:120px;}
    .week-event-330 {height:140px;}
    .week-event-4 {height:160px;}
    .week-event-430 {height:180px;}
    .week-event-5 {height:200px;}
    .week-event-530 {height:220px;}
    .week-event-6 {height:240px;}
    .week-event-630 {height:260px;}
    .week-event-7 {height:280px;}
    .week-event-730 {height:300px;}
    .week-event-8 {height:320px;}
    .week-event-830 {height:340px;}
    .week-event-9 {height:360px;}
    .week-event-930 {height:380px;}
    .week-event-10 {height:400px;}
}
</style>
<script>

import moment from "moment";
import {createClient} from '~/plugins/contentful.js'
const client = createClient()
export default {
    
    data() {
        var obj = {
            currentDate: moment(),
            formatDate: moment().format("YYYY/MM"),
            formatMonth: true,
            popupDate: moment(new Date())
        }
        return obj
    },
    props: {
        event: {
            type: Array,
            default: ''
        }
    },
    methods: {
        
        getStartDate() {
            let date = moment(this.currentDate);
            date.startOf("month");
            const youbiNum = date.day();
            return date.subtract(youbiNum, "days");
        },
        getEndDate() {
            let date = moment(this.currentDate);
            date.endOf("month");
            const youbiNum = date.day();
            return date.add(6 - youbiNum, "days");
        },
        getCalendar() {
            
            let startDate = this.getStartDate();
            const endDate = this.getEndDate();
            const weekNumber = Math.ceil(endDate.diff(startDate, "days") / 7);
            let calendars = [];
            for (let week = 0; week < weekNumber; week++) {
                let weekRow = [];
                for (let day = 0; day < 7; day++) {
                    // let e = event.filter
                    var obj = {};
                    var week_date = moment(startDate);
                    week_date = week_date.format("YYYY/MM/DD")
                    var event_cnt = 1;
                    for (var e of this.event) {

                        var event_date = moment(e.fields.event_start_time);
                        let event_start_hour = event_date.format("H:mm");
                        let event_end_hour = moment(e.fields.event_end_time).format("H:mm");
                        event_date = event_date.format("YYYY/MM/DD")
                        
                        if (week_date === event_date) {
                            obj[`event${event_cnt}`] = true
                            obj[`title${event_cnt}`] = e.fields.title
                            obj[`start_time${event_cnt}`] = event_start_hour
                            obj[`end_time${event_cnt}`] = event_end_hour
                            obj[`slug${event_cnt}`] = e.fields.slug
                            obj["full_date"] = e.fields.event_start_time
                            if (e.fields.category === "gallery") {
                                obj[`event_color_red${event_cnt}`] = true
                            } else if (e.fields.category === "talk") {
                                obj[`event_color_blue${event_cnt}`] = true
                            } else if (e.fields.category === "live") {
                                obj[`event_color_green${event_cnt}`] = true
                            }
                            event_cnt ++;
                        }
                    }
                    obj["date"] = startDate.get("date")
                    
                    
                    weekRow.push(obj);
                    startDate.add(1, "days");
                }
                calendars.push(weekRow);
            }
            return calendars;
        },
        nextMonth() {
            this.currentDate = moment(this.currentDate).add(1, "month");
            this.formatDate = this.currentDate.format("YYYY/MM")
            this.getCalendar();
        },
        prevMonth() {
            this.currentDate = moment(this.currentDate).subtract(1, "month");
            this.formatDate = this.currentDate.format("YYYY/MM")
            this.getCalendar();
        },
        getStartWeekDate(){
            let date = moment(this.currentDate);
            date.startOf("week");
            const youbiNum = date.day();
            return date.subtract(youbiNum, "days");
        },
        getEndWeekDate(){
            let date = moment(this.currentDate);
            date.endOf("week");
            const youbiNum = date.day();
            return date.add(6 - youbiNum, "days");
        },
        getWeek() {
            let startDate = this.getStartWeekDate();
            const endDate = this.getEndWeekDate();
            let week = [];
            const youbi = {
                "Su": "日",
                "Mo": "月",
                "Tu": "火",
                "We": "水",
                "Th": "木",
                "Fr": "金",
                "Sa": "土"
            }
            for (let day = 0; day < 7; day++) {
                var obj = {};
                var week_date = moment(startDate);
                week_date = week_date.format("YYYY/MM/DD")
                var event_cnt = 1;
                for (var e of this.event) {
                    var start_date = moment(e.fields.event_start_time);
                    let end_date = moment(e.fields.event_end_time);
                    let start_oclock = start_date.format("H");
                    let start_hour = start_date.hours();
                    let end_hour = end_date.hours();
                    let start_minutes = start_date.minutes();
                    let end_minutes = end_date.minutes();
                    let event_hours = (end_hour - start_hour) * 60 + (end_minutes - start_minutes);
                    start_date = start_date.format("YYYY/MM/DD")
                    
                    if (week_date === start_date) {
                        obj[`event${event_cnt}`] = true
                        obj[`title${event_cnt}`] = e.fields.title
                        obj[`start_time${event_cnt}`] = start_oclock
                        obj[`slug${event_cnt}`] = e.fields.slug
                        if (e.fields.category === "gallery") {
                            obj[`event_color_red${event_cnt}`] = true
                        } else if (e.fields.category === "talk") {
                            obj[`event_color_blue${event_cnt}`] = true
                        } else if (e.fields.category === "live") {
                            obj[`event_color_green${event_cnt}`] = true
                        }
                        if (event_hours === 60) {
                            obj[`one_hour${event_cnt}`] = true
                        } else if (event_hours === 90) {
                            obj[`one_half_hours${event_cnt}`] = true
                        } else if (event_hours === 120) {
                            obj[`two_hours${event_cnt}`] = true
                        } else if (event_hours === 150) {
                            obj[`two_half_hours${event_cnt}`] = true
                        } else if (event_hours === 180) {
                            obj[`three_hours${event_cnt}`] = true
                        } else if (event_hours === 210) {
                            obj[`three_half_hours${event_cnt}`] = true
                        } else if (event_hours === 240) {
                            obj[`four_hours${event_cnt}`] = true
                        } else if (event_hours === 270) {
                            obj[`four_half_hours${event_cnt}`] = true
                        } else if (event_hours === 300) {
                            obj[`five_hours${event_cnt}`] = true
                        } else if (event_hours === 330) {
                            obj[`five_half_hours${event_cnt}`] = true
                        } else if (event_hours === 360) {
                            obj[`six_hours${event_cnt}`] = true
                        } else if (event_hours === 390) {
                            obj[`six_half_hours${event_cnt}`] = true
                        } else if (event_hours === 420) {
                            obj[`seven_hours${event_cnt}`] = true
                        } else if (event_hours === 450) {
                            obj[`seven_half_hours${event_cnt}`] = true
                        } else if (event_hours === 480) {
                            obj[`eight_hours${event_cnt}`] = true
                        } else if (event_hours === 510) {
                            obj[`eight_half_hours${event_cnt}`] = true
                        } else if (event_hours === 540) {
                            obj[`nine_hours${event_cnt}`] = true
                        } else if (event_hours === 570) {
                            obj[`nine_half_hours${event_cnt}`] = true
                        } else if (event_hours === 600) {
                            obj[`ten_hours${event_cnt}`] = true
                        }
                        event_cnt ++;
                    }
                }
                const youbiKey = startDate.format("dd");
                obj["formatYoubi"] = youbi[youbiKey];
                obj["date"] = startDate.get("date")
                week.push(obj);
                startDate.add(1, "days");
            }
 
            return week;
        },
        nextWeek() {
            this.currentDate = moment(this.currentDate).add(1, "week");
            const startMonth = this.getStartWeekDate();
            const endMonth = this.getEndWeekDate();
            if (startMonth.month() !== endMonth.month()) {
                console.log(startMonth.year())
                console.log(endMonth.year())
                if (startMonth.year() !== endMonth.year()) {
                    this.formatDate = startMonth.format("YYYY/MM") + "〜" + endMonth.format("YYYY/MM");
                } else {
                    this.formatDate = this.currentDate.format("YYYY") + "/" + startMonth.format("MM") + "〜" + endMonth.format("MM");
                }
                
            } else {
                this.formatDate = this.currentDate.format("YYYY/MM")
            }
            this.getWeek();
        },
        prevWeek() {
            this.currentDate = moment(this.currentDate).subtract(1, "week");
            const startMonth = this.getStartWeekDate();
            const endMonth = this.getEndWeekDate();
            if (startMonth.month() !== endMonth.month()) {
                console.log(startMonth.year())
                console.log(endMonth.year())
                if (startMonth.year() !== endMonth.year()) {
                    this.formatDate = startMonth.format("YYYY/MM") + "〜" + endMonth.format("YYYY/MM");
                } else {
                    this.formatDate = this.currentDate.format("YYYY") + "/" + startMonth.format("MM") + "〜" + endMonth.format("MM");
                }
                
            } else {
                this.formatDate = this.currentDate.format("YYYY/MM")
            }
            this.getWeek();
        },
        formatChangeToMonth(){
            this.formatMonth = true
        },
        formatChangeToWeek(){
            this.formatMonth = false
        },
        showEvents(){
            let selected_day = this.popupDate.format("YYYY/MM/DD");
            var events = {}
            for (var e of this.event) {
                let event_date = moment(e.fields.event_start_time);
                let event_day = event_date.format("YYYY/MM/DD");
                if (selected_day === event_day) {
                    var start_date = moment(e.fields.event_start_time);
                    let end_date = moment(e.fields.event_end_time);
                    let start_oclock = start_date.format("H");
                    let start_hour = start_date.hours();
                    let end_hour = end_date.hours();
                    let start_minutes = start_date.minutes();
                    let end_minutes = end_date.minutes();
                    let event_hours = (end_hour - start_hour) * 60 + (end_minutes - start_minutes);

                    var map = new Map();
                    events[`${start_oclock}`] = map
                    events['date'] = event_date.format("MM月D日");
                    map.set("title", e.fields.title);
                    map.set("slug", e.fields.slug);
                    map.set("description", e.fields.description);
                    if (e.fields.category === "gallery") { map.set(`event_color_red`,true)
                    } else if (e.fields.category === "talk") { map.set(`event_color_blue`,true)
                    } else if (e.fields.category === "live") { map.set(`event_color_green`, true)
                    }
                    if (event_hours === 60) { map.set(`one_hour`, true)
                    } else if (event_hours === 90) {
                        map.set(`one_half_hours`, true)
                    } else if (event_hours === 120) {
                        map.set(`two_hours`, true)
                    } else if (event_hours === 150) {
                        map.set(`two_half_hours`, true)
                    } else if (event_hours === 180) {
                        map.set(`three_hours`, true)
                    } else if (event_hours === 210) {
                        map.set(`three_half_hours`, true)
                    } else if (event_hours === 240) {
                        map.set(`four_hours`, true)
                    } else if (event_hours === 270) {
                        map.set(`four_half_hours`, true)
                    } else if (event_hours === 300) {
                        map.set(`five_hours`, true)
                    } else if (event_hours === 330) {
                        map.set(`five_half_hours`, true)
                    } else if (event_hours === 360) {
                        map.set(`six_hours`, true)
                    } else if (event_hours === 390) {
                        map.set(`six_half_hours`, true)
                    } else if (event_hours === 420) {
                        map.set(`seven_hours`, true)
                    } else if (event_hours === 450) {
                        map.set(`seven_half_hours`, true)
                    } else if (event_hours === 480) {
                        map.set(`eight_hours`, true)
                    } else if (event_hours === 510) {
                        map.set(`eight_half_hours`, true)
                    } else if (event_hours === 540) {
                        map.set(`nine_hours`, true)
                    } else if (event_hours === 570) {
                        map.set(`nine_half_hours`, true)
                    } else if (event_hours === 600) {
                        map.set(`ten_hours`, true)
                    }
                    
                }
            }
            return events
        },
        calendarClick(ele){
            this.popupDate = moment(ele.currentTarget.getAttribute('date'));
            this.showEvents()
            $(".event-details-popup-wrap").fadeIn(300);
        },
        eventDetailClick(e) {
            $(".event-details-popup-wrap").fadeOut(300);
        },
        handleTouchMove(e) {
            e.preventDefault();
        }
    },
    computed: {
        calendars() {
            return this.getCalendar();
        },
        week(){
            return this.getWeek();
        },
        day_events(){
            return this.showEvents();
        }
    }
}
</script>