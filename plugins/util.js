

var now = new Date();
var hour = now.getHours();
// 5時〜18時の間はお昼モード
var firstActive = hour >= 5 && hour < 18 ? false : true;
var dayStatus = firstActive ? false : true;

export var active = function(value) {
    return firstActive;
};

export var day = function(value) {
  return dayStatus;
};

// injectを利用して、関数hogeを"hoge"という名前で共通化
export default ({ app }, inject) => {
    inject("active", active);
    inject("day", day);
};
