<template>
    <div class="calendar">
    
    <div class="calendar-title">
        <button @click="prevMonth" :class="{'calendar-btn': true, 'calendar-arrow prev-arrow': true, 'calender-hidden': !formatMonth}"></button>
        <button @click="prevWeek" :class="{'calendar-btn': true, 'calendar-arrow prev-arrow': true, 'calender-hidden': formatMonth}"></button>
        <div class="calendar-sapn">{{ formatDate }}</div>
        <button @click="nextMonth" :class="{'calendar-btn': true, 'calendar-arrow next-arrow': true, 'calender-hidden': !formatMonth}"></button>
        <button @click="nextWeek" :class="{'calendar-btn': true, 'calendar-arrow next-arrow': true, 'calender-hidden': formatMonth}"></button>
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
                        <li v-if="Math.random() > 0.9" class="calendar-event event-color-red">event1</li>
                        <li v-if="Math.random() > 0.9" class="calendar-event event-color-blue">event2</li>
                        <li v-if="Math.random() > 0.9" class="calendar-event event-color-green">event3</li>
                        <li v-if="Math.random() > 0.9" class="calendar-event event-color-red">event4</li>
                        <li v-if="Math.random() > 0.9" class="calendar-event event-color-red">event5</li>
                        <li v-if="Math.random() > 0.9" class="calendar-event event-color-red">event6</li>
                        <li v-if="Math.random() > 0.9" class="calendar-event event-color-red">event7</li>
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
                v-for="index2 in 7"
                :key="index2"
                class="calendar-each-box week-each-box"
            >
                <div v-if="Math.random() > 0.9" class="week-event week-event-330 event-color-red">イベント</div>
            </div>
        </div>



    </div>
  </div>
</template>
<style>
.calendar {overflow: hidden;margin: 0px auto 30px; }
.calender-hidden {display: none;}
.calendar-sapn {font-weight:900;font-size:1.2rem;}
.calendar-btn {border: none;appearance: none;background: transparent;}
.calendar-btn:hover, .calendar-btn:focus {outline: none;cursor: pointer;}
.calendar-title {display: flex;justify-content: center;position:relative;    margin-bottom: 10px;}
.calendar-wrap {border: solid 2px rgba(0,0,0,0.1);color:#a2a2a2;border-radius: 10px;}
.calendar-row {display:flex;}
.calendar-row:last-child {overflow: hidden;}
.calendar-each-box {flex:1;border-bottom: solid 2px rgba(0,0,0,0.1);border-right: solid 2px rgba(0,0,0,0.1);padding: 5px;}
.calendar-each-box:last-child {border-right: none;}
.calendar-row:last-child .calendar-each-box {border-bottom: 0;}
.calendar-change-status-wrap {position: absolute;right:0;bottom:0;}
.calendar-change-status {border: solid 2px rgba(0,0,0,0.1);border-radius: 10px;padding: 0px 30px;color:#a2a2a2;font-weight: 900;}

.calendar-status-active {background: #a2a2a2; color: #fff;}
.week-title {text-align: center;min-height: 30px;padding:5px;}
.calendar-arrow:before {font-family: "Font Awesome 5 Free"; font-weight: 900;width: 100px;display: block;font-size: 20px;}

.prev-arrow:before {content:"\f053";}
.next-arrow:before {content:"\f054";}

.event-box {height: 100px;overflow-y: scroll;}
.calendar-event {margin-bottom: 5px;padding: 0px 5px;}
.event-color-red {background: #e4474a;border-radius: 5px; color: #fff;}
.event-color-blue {background: #00bfff; border-radius: 5px; color: #fff;}
.event-color-green {background:#00756f; border-radius: 5px; color: #fff;}

.week-wrap {max-width: 750px;margin-left: auto;border-radius: 0;}
.week-youbi {display: block; font-size: 0.8rem;}
.week-row {position: relative;}
.week-row:before {content: "";position: absolute; left: -10px; top:-2px;width: 10px;height: 2px;background: rgba(0,0,0,0.1);}
.week-memori {content: "11 AM"; position: absolute; left: -50px; top:-15px;width: 40px;height: 30px;line-height: 30px;color:#a2a2a2;font-size:0.8rem;}
.week-each-box {height: 40px;padding:0;position: relative;}
.week-event {position: absolute; top: 0; width: 100%;}
.week-event-1 {height:40px;}
.week-event-130 {height:60px;}
.week-event-2 {height:80px;}
.week-event-230 {height:100px;}
.week-event-3 {height:120px;}
.week-event-330 {height:140px;}
.week-event-4 {height:160px;}
.week-event-430 {height:180px;}
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
    asyncData ({env}) {
        console.log("event is start")
      return Promise.all([
        client.getEntries({
          'content_type': 'event',
          order: '-sys.createdAt'
        })
      ]).then(([posts]) => {
        for (var post of posts.items) {
        　var date = new Date(post.fields.publishDate);
          var year = date.getFullYear();
          var month = date.getMonth() + 1;
          var day = date.getDate();
          post.fields.publishDate = `${year}/${month}/${day}`

        }
        console.log("event is")
        console.log(posts.items)
        return {
          posts: posts.items
        }
      }).catch("eerrrrrrooor is " +console.error)
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
                    weekRow.push({
                    date: startDate.get("date"),
                    });
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
                const youbiKey = startDate.format("dd");
                week.push({
                    formatYoubi: youbi[youbiKey],
                    date: startDate.get("date"),
                });
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