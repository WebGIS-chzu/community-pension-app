<template>
  <div id="worker-home">
    <div class="header">
      <img class="search" src="./public/img/search.png" alt="查找" />
      <img
        class="customer-service"
        src="./public/img/customer-service.png"
        alt="客服"
      />
      <img class="more" src="./public/img/more.png" alt="更多" />
    </div>
    <div class="mid">
      <van-swipe :autoplay="3000" lazy-render>
        <van-swipe-item v-for="image in images" :key="image">
          <img :src="image" />
        </van-swipe-item>
      </van-swipe>
      <div class="notice">
        <div class="title">
          <img
            class="info"
            src="./public/img/real-time-info.png"
            alt="社区资讯"
          />
          <div class="info-text">社区资讯</div>
          <div class="all-text">全部</div>
          <img class="all" src="./public/img/all.png" alt="全部" />
        </div>
        <div class="new">
          <div class="new-text">
            【清荷园小区】
            由于疫情原因，出入本小区需要出示行程码，并带好口罩，做好疫情防控。
          </div>
        </div>
      </div>
      <div class="page-text">
        <div class="page">
          <div class="user">
            <img src="./public/img/portrait_1.png" alt="头像" />
            <div class="username">幸福一生</div>
            <div class="title">无欲无求的小黄人</div>
          </div>
          <div class="content">
            <h3>如何科学的照顾生活不能自理的老人？</h3>
            <p>
              1.调节好自己的生活状态。建议请个护工白天照料，或者几天照料一
              次。否则长期全身心照顾老人很容易令人精神崩溃。不放心外人照料
              的话，可以装监控。
            </p>
          </div>
        </div>
        <div class="page">
          <div class="user">
            <img src="./public/img/portrait_2.png" alt="头像" />
            <div class="username">王太翔</div>
            <div class="title">数学天路的朝圣者</div>
          </div>
          <div class="content">
            <h3>如何心平气和的照顾老人</h3>
            <p>
              亲人年纪大了，身体不方便，平时做不了太多事，晚年也需要人陪
              伴，会很没有安全感。作为晚辈，我们对他们不应该只是生活.上的照
              顾，更多应该去关心、爱他们，爱是要用行动和语言表达出来的，但
              这个比较难，真正的爱能够让别人感受得到，你是真心对她好。老人
              晚年会比较敏感，容易发脾气，更多是想引起我们的注意，其实是很
              在意我们。也想让我们关注他们。
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "worker-home",
  data() {
    const images = [
      require("./public/img/pic_1.png"),
      require("./public/img/pic_2.png"),
      require("./public/img/pic_3.png"),
      require("./public/img/pic_4.png"),
    ];
    return { images };
  },
};
</script>
<style>
#worker-home {
  position: absolute;
  width: 100%;
  height: 92%;
  background-color: rgb(242, 242, 242);
}
#worker-home .header {
  position: relative;
  width: 100%;
  height: 10%;
}
#worker-home .header .search {
  position: relative;
  float: left;
  top: 65%;
  left: 5%;
  height: 35%;
}
#worker-home .header .customer-service {
  position: relative;
  float: left;
  top: 65%;
  left: 10%;
  height: 35%;
}
#worker-home .header .more {
  position: relative;
  float: right;
  top: 65%;
  right: 5%;
  height: 35%;
}
#worker-home .mid {
  position: relative;
  width: 100%;
  height: 90%;
}
#worker-home .mid .van-swipe {
  position: relative;
  margin: 2%;
  width: 96%;
  height: 27%;
}
#worker-home .mid .van-swipe .van-swipe__track .van-swipe-item img {
  width: 100%;
}
#worker-home .mid .notice {
  position: relative;
  width: 100%;
  height: 12%;
  top: -1%;
  background-color: #fff;
}
#worker-home .mid .notice .title {
  position: relative;
  height: 30%;
  width: 100%;
}
#worker-home .mid .notice .title .info {
  position: relative;
  float: left;
  left: 2%;
  height: 90%;
  top: 30%;
}
#worker-home .mid .notice .title .info-text {
  position: relative;
  float: left;
  height: 90%;
  top: 35%;
  left: 2%;
}
#worker-home .mid .notice .title .all {
  position: relative;
  float: right;
  height: 60%;
  top: 60%;
  left: 4%;
}
#worker-home .mid .notice .title .all-text {
  position: relative;
  float: right;
  height: 60%;
  top: 60%;
  right: 6%;
  font-size: 12px;
}
#worker-home .mid .notice .new {
  position: relative;
  height: 55%;
  width: 98%;
  left: 1%;
  top: 10%;
  background-color: rgb(234, 234, 234);
  border-radius: 16px;
}
#worker-home .mid .notice .new .new-text {
  position: relative;
  width: 98%;
  height: 60%;
  top: 30%;
  left: 2%;
  font-size: 14px;
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
}
#worker-home .mid .page-text {
  position: relative;
  width: 100%;
  height: 60%;
  overflow-y: auto;
}
#worker-home .mid .page {
  width: 96%;
  margin-bottom: 3%;
  background-color: #fff;
  max-height: 240px;
  padding: 2%;
  overflow-y: hidden;
}
#worker-home .mid .page .user {
  position: relative;
  width: 96%;
}
#worker-home .mid .page .user img {
  position: relative;
  float: left;
  top: 5px;
  left: 5px;
  width: 50px;
  border-radius: 999px;
}
#worker-home .mid .page .user .username {
  position: relative;
  width: 60%;
  font-size: 16px;
  font-weight: bolder;
  left: 10px;
  top: 8px;
}
#worker-home .mid .page .user .title {
  position: relative;
  width: 90%;
  font-size: 14px;
  font-weight: bolder;
  left: 10px;
  top: 8px;
  color: rgb(150, 150, 150);
}
#worker-home .mid .page .content h3 {
  width: 96%;
  margin-top: 30px;
  margin-left: 10px;
  margin-bottom: 10px;
}
#worker-home .mid .page .content h4 {
  margin-top: 10px;
  margin-left: 10px;
  margin-bottom: 10px;
}
#worker-home .mid .page .content p {
  width: 96%;
  margin-left: 15px;
  text-indent: 32px;
  margin-top: 0;
  margin-bottom: 0;
}
</style>