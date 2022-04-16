<template>
  <div id="children-monitor">
    <div class="header">
      <div class="title">家庭监控</div>
    </div>
    <div class="mid">
      <div class="content" v-for="item in videoforms" :key="item.id">
        <video autoplay>
          <source :src="item.video" type="video/mp4" />
        </video>
        <div class="status">
          <van-field :id="item.id" readOnly label="时间：" />
          <van-field readOnly v-model="item.range" label="监控范围：" />
          <van-field readOnly v-model="item.situation" label="异常情况：" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
window.onload = function () {
  window.requestAnimationFrame(getDate);
};
function getDate() {
  window.setTimeout(function () {
    window.requestAnimationFrame(getDate);
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
  // var da =
  //   // year +
  //   // " 年 " +
  //   // month +
  //   // " 月 " +
  //   // days +
  //   // " 日 " +
  //   // week[day] +
  //   // " " +
  //   // time_domain +
  //   hour + " : " + minute + " :" + second;
  // document.getElementById("time").innerHTML = da;
}
export default {
  name: "children-monitor",
  data() {
    return {
      videoforms: [
        {
          id: "indoor",
          video: require("./public/video/indoor.mp4"),
          range: "室内",
          situation: "无异常",
        },
        {
          id: "outdoor",
          video: require("./public/video/outdoor.mp4"),
          range: "室外",
          situation: "无异常",
        },
      ],
    };
  },
};
</script>
<style>
#children-monitor {
  position: absolute;
  width: 100%;
  height: 92%;
  background-color: rgb(242, 242, 242);
}
#children-monitor .header {
  position: relative;
  width: 100%;
  height: 10%;
}
#children-monitor .header .title {
  position: relative;
  height: 32%;
  width: 50%;
  font-size: 24px;
  top: 60%;
  left: 4%;
}
#children-monitor .mid {
  position: relative;
  width: 100%;
  height: 90%;
}
#children-monitor .mid .content {
  position: relative;
  width: 100%;
  height: 45%;
  margin: 5% 0 5% 0;
  background-color: #fff;
}
#children-monitor .mid .content video {
  position: relative;
  width: 100%;
  height: 62%;
}
#children-monitor .mid .content .status {
  position: relative;
  width: 100%;
  height: 38%;
}
#children-monitor .mid .content .status .van-field {
  border: 0px solid transparent;
  background-color: transparent;
  font-size: 16px;
  height: 33%;
}
</style>