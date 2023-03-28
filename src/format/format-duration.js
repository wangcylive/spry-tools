"use strict";
exports.__esModule = true;
function setDouble(num) {
    return (num + '').padStart(2, '0');
}
/**
 * 格式化时长
 * @param num
 * @param dayText
 * @return {string}
 */
function formatDuration(num, dayText) {
    if (dayText === void 0) { dayText = '天'; }
    num = typeof num === 'number' ? num : parseFloat(num);
    if (!isNaN(num)) {
        var strTime = '';
        var days = 0;
        var hours = 0;
        var minutes = 0;
        var seconds = 0;
        num = Math.floor(num);
        var secondsHour = 3600;
        var secondsDay = secondsHour * 24;
        days = Math.floor(num / secondsDay);
        hours = Math.floor((num % secondsDay) / secondsHour);
        minutes = Math.floor((num % secondsHour) / 60);
        seconds = num % 60;
        if (num >= secondsDay) {
            strTime = days + dayText + ' ' + setDouble(hours) + ':' + setDouble(minutes) + ':' + setDouble(seconds);
        }
        else if (num >= secondsHour) {
            strTime = hours + ':' + setDouble(minutes) + ':' + setDouble(seconds);
        }
        else if (num >= 60) {
            strTime = minutes + ':' + setDouble(seconds);
        }
        else {
            strTime = '00:' + setDouble(num);
        }
        return strTime;
    }
    return '00:00';
}
exports["default"] = formatDuration;
