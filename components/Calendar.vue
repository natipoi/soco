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
                <span>{{ day.date }}</span>
                <div class="event-box">
                    <ul>
                        <li v-show="day.event1" :class="{ 'calendar-event': true, 'event-color-red': day.event_color_red1, 'event-color-blue': day.event_color_blue1, 'event-color-green': day.event_color_green1}">
                            <span class="only-pc">{{ day.title1 }}</span>
                        </li>
                        <li v-show="day.event2" :class="{ 'calendar-event': true, 'event-color-red': day.event_color_red1, 'event-color-blue': day.event_color_blue1, 'event-color-green': day.event_color_green1}">
                            <span class="only-pc">{{ day.title2 }}</span>
                        </li>
                        <li v-show="day.event3" :class="{ 'calendar-event': true, 'event-color-red': day.event_color_red1, 'event-color-blue': day.event_color_blue1, 'event-color-green': day.event_color_green1}">
                            <span class="only-pc">{{ day.title3 }}</span>
                        </li>
                        <li v-show="day.event4" :class="{ 'calendar-event': true, 'event-color-red': day.event_color_red1, 'event-color-blue': day.event_color_blue1, 'event-color-green': day.event_color_green1}">
                            <span class="only-pc">{{ day.title4 }}</span>
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
                >{{ day.title1 }}</div>
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
                >{{ day.title2 }}</div>
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
                >{{ day.title3 }}</div>
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
                >{{ day.title4 }}</div>
            </div>
        </div>



    </div>
  </div>
</template>
<style>
.calendar {overflow: hidden;margin: 0px auto 30px; }
.calender-hidden {display: none;}
.calendar-sapn {font-weight:900;font-size:1.2rem;}

/* .calendar-btn {border: none;appearance: none;background: transparent;}
.calendar-btn:hover, .calendar-btn:focus {outline: none;cursor: pointer;} */
.calendar-title-wrap {display: block;position:relative;margin-bottom: 10px;}
.calendar-title {display: flex;justify-content: center;}
.calendar-change-status-wrap {position: relative;}
.calendar-change-status {border: solid 2px rgba(0,0,0,0.1);border-radius: 10px;padding: 0px 30px;color:#a2a2a2;font-weight: 900;}
.calendar-wrap {border: solid 2px rgba(0,0,0,0.1);color:#a2a2a2;border-radius: 10px;}

.calendar-row {display:flex;}
.calendar-each-box {overflow: hidden;flex:1;width: 100%;border-bottom: solid 2px rgba(0,0,0,0.1);border-right: solid 2px rgba(0,0,0,0.1);padding: 5px;}
.calendar-each-box:last-child {border-right: none;}
.week-wrap .calendar-each-box {overflow: visible;}
.calendar-row:last-child .calendar-each-box {border-bottom: 0;}


.calendar-status-active {background: #a2a2a2; color: #fff;}
.week-title {text-align: center;min-height: 30px;padding:5px;}
.calendar-arrow:before {font-family: "Font Awesome 5 Free"; font-weight: 900;width: 50px;display: block;font-size: 20px;}
.calendar-arrow:hover {cursor: pointer;}
.prev-arrow:before {content:"\f053";}
.next-arrow:before {content:"\f054";}

.event-box {height: calc((96vw)/7 - 15px);overflow-y: scroll;}
.calendar-event {padding: 3px;margin-bottom: 5px;}
.event-color-red {background: #e4474a;border-radius: 5px; color: #fff;}
.event-color-blue {background: #00bfff; border-radius: 5px; color: #fff;}
.event-color-green {background:#00756f; border-radius: 5px; color: #fff;}

.week-wrap { margin-left: 50px;border-radius: 0;}
.week-youbi {display: block; font-size: 0.8rem;}
.week-row {position: relative;}
.week-row:before {content: "";position: absolute; left: -10px; top:-2px;width: 10px;height: 2px;background: rgba(0,0,0,0.1);}
.week-memori {content: "11 AM"; position: absolute; left: -50px; top:-15px;width: 40px;height: 30px;line-height: 30px;color:#a2a2a2;font-size:0.8rem;}
.week-each-box {height: 25px;padding:0;position: relative;}
.week-event {position: absolute; top: 0; width: 100%;font-size: 0.7rem;z-index: 100;}
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
    .calendar-event {padding: 0px 5px;}
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
        
        return {
            currentDate: moment(),
            formatDate: moment().format("YYYY/MM"),
            formatMonth: true
        };
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
                        let event_start_hour = event_date.format("H");
                        event_date = event_date.format("YYYY/MM/DD")
                        
                        if (week_date === event_date) {
                            obj[`event${event_cnt}`] = true
                            obj[`title${event_cnt}`] = e.fields.title
                            obj[`start_time${event_cnt}`] = event_start_hour
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
                        obj[`title${event_cnt}`] = e.fields.title,
                        obj[`start_time${event_cnt}`] = start_oclock
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

                    //     'week-event-1': day.one_hour1,
                    // 'week-event-130': day.one_half_hours1,
                    // 'week-event-2': day.two_hours1,
                    // 'week-event-230': day.two_half_hours1,
                    // 'week-event-3': day.three_hours1,
                    // 'week-event-330': day.three_half_hours1,
                    // 'week-event-4': day.four_hours1,
                    // 'week-event-430': day.four_half_hours1

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
        }
    },
    computed: {
        calendars() {
            
            return this.getCalendar();
        },
        week(){
            return this.getWeek();
        }
    }
}
</script>