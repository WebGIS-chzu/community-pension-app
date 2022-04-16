<template>
  <div id="children-home">
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
            <div class="username">问道康养社区</div>
            <div class="title">养老的百科全书</div>
          </div>
          <div class="content">
            <h3>养老护理小知识，关于老人的基本照料！</h3>
            <p>
              俗话说"家有一老如有一宝"，长辈在家庭中给我们带去的幸福感是不
              能代替的，在我们逐渐长大的过程之中，父母长辈也在逐渐老去。所
              以面对长辈我们更应该关心、爱护他们，让其晚年生活可以更加舒适
              与开心。
            </p>
          </div>
        </div>
        <div class="page">
          <div class="user">
            <img src="./public/img/portrait_2.png" alt="头像" />
            <div class="username">Physio Boya</div>
            <div class="title">爸妈的小棉袄</div>
          </div>
          <div class="content">
            <h3>养老问题的本质、核心是什么？</h3>
            <p>
              从提问者对题目的措辞中可以看出作者对养老领域的现状是担忧的，
              不满的或者保守一点说是在思考该如何完善提高的。如果想充分的展
              开这个方面的思考，首先，有必要理解一下什么是养老。 进而通过参
              考海内外的优秀养老模式，综合考虑中国国情来前瞻性的推断-下最
              理想的养老模式。而后通过比较现状和未来较全面的养老模式，我们
              就可以知道这个拼图中我们缺少的版块在哪里，制度要如何提高，个
              人又有哪些力所能及的事情或者应对现状的临时措施。
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "children-home",
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
#children-home {
  position: absolute;
  width: 100%;
  height: 92%;
  background-color: rgb(242, 242, 242);
}
#children-home .header {
  position: relative;
  width: 100%;
  height: 10%;
}
#children-home .header .search {
  position: relative;
  float: left;
  top: 65%;
  left: 5%;
  height: 35%;
}
#children-home .header .customer-service {
  position: relative;
  float: left;
  top: 65%;
  left: 10%;
  height: 35%;
}
#children-home .header .more {
  position: relative;
  float: right;
  top: 65%;
  right: 5%;
  height: 35%;
}
#children-home .mid {
  position: relative;
  width: 100%;
  height: 90%;
}
#children-home .mid .van-swipe {
  position: relative;
  margin: 2%;
  width: 96%;
  height: 27%;
}
#children-home .mid .van-swipe .van-swipe__track .van-swipe-item img {
  width: 100%;
}
#children-home .mid .notice {
  position: relative;
  width: 100%;
  height: 12%;
  top: -1%;
  background-color: #fff;
}
#children-home .mid .notice .title {
  position: relative;
  height: 30%;
  width: 100%;
}
#children-home .mid .notice .title .info {
  position: relative;
  float: left;
  left: 2%;
  height: 90%;
  top: 30%;
}
#children-home .mid .notice .title .info-text {
  position: relative;
  float: left;
  height: 90%;
  top: 35%;
  left: 2%;
}
#children-home .mid .notice .title .all {
  position: relative;
  float: right;
  height: 60%;
  top: 60%;
  left: 4%;
}
#children-home .mid .notice .title .all-text {
  position: relative;
  float: right;
  height: 60%;
  top: 60%;
  right: 6%;
  font-size: 12px;
}
#children-home .mid .notice .new {
  position: relative;
  height: 55%;
  width: 98%;
  left: 1%;
  top: 10%;
  background-color: rgb(234, 234, 234);
  border-radius: 16px;
}
#children-home .mid .notice .new .new-text {
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
#children-home .mid .page-text {
  position: relative;
  width: 100%;
  height: 60%;
  overflow-y: auto;
}
#children-home .mid .page {
  width: 96%;
  margin-bottom: 3%;
  background-color: #fff;
  max-height: 240px;
  padding: 2%;
  overflow-y: hidden;
}
#children-home .mid .page .user {
  position: relative;
  width: 96%;
}
#children-home .mid .page .user img {
  position: relative;
  float: left;
  top: 5px;
  left: 5px;
  width: 50px;
  border-radius: 999px;
}
#children-home .mid .page .user .username {
  position: relative;
  width: 60%;
  font-size: 16px;
  font-weight: bolder;
  left: 10px;
  top: 8px;
}
#children-home .mid .page .user .title {
  position: relative;
  width: 90%;
  font-size: 14px;
  font-weight: bolder;
  left: 10px;
  top: 8px;
  color: rgb(150, 150, 150);
}
#children-home .mid .page .content h3 {
  width: 96%;
  margin-top: 30px;
  margin-left: 10px;
  margin-bottom: 10px;
}
#children-home .mid .page .content h4 {
  margin-top: 10px;
  margin-left: 10px;
  margin-bottom: 10px;
}
#children-home .mid .page .content p {
  width: 96%;
  margin-left: 15px;
  text-indent: 32px;
  margin-top: 0;
  margin-bottom: 0;
}
</style>