<template>
  <div id="lay-out">
    <div class="status-bar">
      <div id="time" class="time"></div>
      <img src="./public/img/status_3.png" alt="状态栏图标" />
      <img src="./public/img/status_2.png" alt="状态栏图标" />
      <img src="./public/img/status_1.png" alt="状态栏图标" />
    </div>
    <router-view />
  </div>
</template>

<script>
export default {
  name: "lay-out",
  data() {
    return {};
  },
};
window.onload = function () {
  window.requestAnimationFrame(getTime);
};
function getTime() {
  window.setTimeout(function () {
    window.requestAnimationFrame(getTime);
  }, 1000 / 2);
  var d = new Date();
  var year = d.getFullYear(); //获取年
  var month = d.getMonth() + 1; //获取月，从 Date 对象返回月份 (0 ~ 11)，故在此处+1
  var day = d.getDay(); //获取日
  var days = d.getDate(); //获取日期
  var hour = d.getHours(); //获取小时
  var minute = d.getMinutes(); //获取分钟
  var second = d.getSeconds(); //获取秒
  if (month < 10) month = "0" + month;
  if (days < 10) days = "0" + days;

  if (hour < 10) hour = "0" + hour;
  if (minute < 10) minute = "0" + minute;
  if (second < 10) second = "0" + second;

  var week = new Array(
    "星期日",
    "星期一",
    "星期二",
    "星期三",
    "星期四",
    "星期五",
    "星期六"
  );
  var da =
    // year +
    // " 年 " +
    // month +
    // " 月 " +
    // days +
    // " 日 " +
    // week[day] +
    // " " +
    // time_domain +
    hour + " : " + minute + " :" + second;
  document.getElementById("time").innerHTML = da;
  var time =
    year +
    "-" +
    month +
    "-" +
    days +
    "   " +
    week[day] +
    "   " +
    +hour +
    ":" +
    minute +
    ":" +
    second;
  document.getElementById("indoor").value = time;
  document.getElementById("outdoor").value = time;
}
</script>
<style>
#lay-out {
  width: 100%;
  height: 100%;
  margin: 0;
}
#lay-out .status-bar {
  position: fixed;
  height: 3%;
  width: 100%;
  margin: 0;
  background-color: transparent;
  z-index: 10;
}
#lay-out .status-bar .time {
  height: 100%;
  margin-top: 1%;
  margin-left: 2%;
  font-size: 16px;
  font-weight: bolder;
  float: left;
}
#lay-out .status-bar img {
  float: right;
  margin-top: 1.5%;
  margin-right: 2%;
  height: 60%;
}
</style>