

var now = new Date();
var hour = now.getHours();
// 5時〜18時の間はお昼モード
console.log("hour is ", hour)
var firstActive = hour >= 5 && hour < 18 ? false : true;



// var path = global.module.paths;

// if (path.indexOf("kitchen") > -1) {

// } else if (path.indexOf("bar") > -1) {

// }

export var active = function(value) {
    return firstActive;
};


// injectを利用して、関数hogeを"hoge"という名前で共通化
export default ({ app }, inject) => {
    inject("active", active);
};
