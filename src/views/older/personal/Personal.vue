<template>
  <div id="older-personal">
    <div class="header">
      <img src="./public/img/older-man.png" alt="老人头像" />
      <div class="infomation">
        <div class="name">周毅润</div>
        <van-icon name="qr"/>
        <div class="table">
          <div class="address">
            <div class="title">家庭住址:</div>
            <div class="result">清荷园小区3栋3单元304</div>
          </div>
          <div class="phone">
            <div class="title">联系方式:</div>
            <div class="result">19856916317</div>
          </div>
        </div>
      </div>
    </div>
    <div class="mid">
      <van-cell class="option family" title="我的家人" :icon="require('./public/img/family.png')" is-link />
      <van-cell class="option friend" title="朋友圈" :icon="require('./public/img/friend.png')" is-link />
      <van-cell class="option healthy" title="健康" :icon="require('./public/img/healthy.png')" is-link />
      <van-cell class="option consume" title="家庭消费" :icon="require('./public/img/consume.png')" is-link />
      <van-cell class="option set-up" title="设置" :icon="require('./public/img/set-up.png')" is-link />
      <van-cell class="option log-out" title="登出" :icon="require('./public/img/log-out.png')" is-link to="/login"/>
    </div>
  </div>
</template>

<script>
export default {
  name: "older-personal",
  data() {
    return {};
  },
};

</script>
<style>
#older-personal {
  position: absolute;
  width: 100%;
  height: 92%;
  background-color: rgb(242, 242, 242);
}
#older-personal .header {
  width: 100%;
  height: 25%;
  background-color: #fff;
}
#older-personal .header img {
  position: relative;
  margin-top: 12%;
  margin-left: 5%;
  float: left;
  height: 45%;
}
#older-personal .header .infomation {
  position: relative;
  float: right;
  margin-top: 12%;
  margin-right: 5%;
  width: 65%;
  height: 70%;
}
#older-personal .header .infomation .name {
  float: left;
  font-size: 28px;
}
#older-personal .header .infomation .van-icon {
  margin-top: 3%;
  float: right;
  font-size: 28px;
}
#older-personal .header .infomation .table {
  float: left;
  width: 100%;
  padding: 3% 0 0 0;
  font-size: 24px;
}
#older-personal .header .infomation .table .title {
  float: left;
  width: 40%;
}
#older-personal .header .infomation .table .result {
  float: left;
  width: 60%;
  margin-top: 1%;
}
#older-personal .mid {
  width: 100%;
  height: 75%;
}
#older-personal .mid .option {
  margin-top: 3%;
  width: 100%;
  height: 12%;
  padding: 0%;
}
#older-personal .mid .option .van-cell__left-icon{
  top: 10%;
  left: 2%;
  height: 80%;
}
#older-personal .mid .option .van-cell__left-icon .van-icon__image{
  height: 100%;
  width: 100%;
}
#older-personal .mid .option .van-cell__title{
  position: relative;
  top: 30%;
  left: 2%;
  font-size: 32px;
}
#older-personal .mid .option .van-cell__right-icon{
  color: #000;
  top: 35%;
  font-size: 32px;
}
</style>