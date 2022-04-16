<template>
  <div id="older-information">
    <div class="header">
      <span>消 息</span>
      <van-icon name="plus" size="36" />
      <van-search placeholder="搜索" />
    </div>
    <div class="mid">
      <div class="chat-box">
        <van-image
          round
          fit="cover"
          :src="require('./public/img/older-women.png')"
        />
        <div class="name">老伴</div>
        <div class="time">下午 8：53</div>
      </div>
      <div class="chat-box">
        <van-image
          round
          fit="cover"
          :src="require('./public/img/daughter.png')"
        />
        <div class="name">周航航</div>
        <div class="time">下午 6：30</div>
      </div>
      <div class="chat-box">
        <van-image
          round
          fit="cover"
          :src="require('./public/img/son-in-law.png')"
        />
        <div class="name">周奥施</div>
        <div class="time">下午 5：30</div>
      </div>
      <div class="chat-box">
        <van-image
          round
          fit="cover"
          :src="require('./public/img/older-women.png')"
        />
        <div class="name">王友德</div>
        <div class="time">上午 9：38</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "older-information",
  data() {
    return {};
  },
};
</script>
<style>
#older-information {
  position: absolute;
  width: 100%;
  height: 92%;
  background-color: #fff;
}
#older-information .header {
  width: 100%;
  height: 20%;
  background-color: rgb(242, 242, 242);
}
#older-information .header span {
  position: relative;
  top: 22%;
  font-size: 28px;
  margin-left: 8%;
}
#older-information .header .van-icon {
  position: relative;
  float: right;
  margin-right: 5%;
  top: 22%;
}
#older-information .header .van-search {
  margin: 10% 2% 0 2%;
  height: 50%;
  background: transparent;
}
#older-information .header .van-search .van-search__content {
  height: 80%;
  border-radius: 15px;
  background-color: #fff;
}
#older-information
  .header
  .van-search
  .van-search__content
  .van-field
  .van-field__value
  .van-field__body
  .van-field__control {
  position: relative;
  top: 3px;
  font-size: 30px;
}
#older-information
  .header
  .van-search
  .van-search__content
  .van-field
  .van-field__left-icon {
  width: 15%;
}
#older-information
  .header
  .van-search
  .van-search__content
  .van-field
  .van-field__left-icon
  .van-icon {
  font-size: 40px;
  color: rgb(162, 162, 162);
}
#older-information .mid {
  width: 100%;
  height: 80%;
  background-color: #fff;
}
#older-information .mid .chat-box {
  width: 100%;
  height: 12%;
  border-bottom: 1px solid rgba(162, 162, 162, 0.6);
}
#older-information .mid .chat-box .van-image {
  margin-left: 2%;
  height: 100%;
  float: left;
}
#older-information .mid .chat-box .name {
  position: relative;
  height: 50%;
  width: 30%;
  margin-top: 4%;
  margin-left: 1%;
  font-size: 28px;
  float: left;
}
#older-information .mid .chat-box .time {
  position: relative;
  height: 50%;
  width: 30%;
  margin-top: 6%;
  margin-right: 1%;
  font-size: 24px;
  color: rgb(162, 162, 162);
  float: right;
}
</style>