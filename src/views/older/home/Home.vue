<template>
  <div id="older-home">
    <div class="header">
      <van-icon :name="require('./public/img/position.png')" size="40" />
      <span>清荷园小区</span>
    </div>
    <div class="mid">
      <van-search
        class="search"
        v-model="value"
        shape="round"
        show-action
        placeholder="请输入搜索关键词"
      >
        <template #action>
          <div>搜索</div>
        </template>
      </van-search>
      <div class="mid-jump">
        <div class="service">
          <span>社区服务</span>
          <img src="./public/img/service.png" alt="社区服务" />
        </div>
        <div class="activity">
          <span>社区活动</span>
          <img src="./public/img/activity.png" alt="社区活动" />
        </div>
      </div>
      <div class="mid-home">
        <div class="user">
          <img src="./public/img/worker.png" alt="护工头像" />
          <div class="username">社区管理员</div>
          <div class="publish-time">2022-04-07 发表文章</div>
        </div>
        <div class="content">
          <div class="title">老年人体质虚弱如何调理</div>
          <div class="text">
            <h4>1、老年人体质虚弱如何调理之多锻炼</h4>
            <p>
              生命在于运动。老年人生命活力在衰竭,就更需要运动来提高自己的生命活力。老年人运动的强度不宜过大,避免运动损伤。而且在运动过程中应当有同伴进行陪护,一旦发生意外也好施救。
            </p>
            <h4>2、老年人体质虚弱如何调理之多食用水果</h4>
            <p>
              由于老年人肠胃功能变差,胃口变差不爱吃饭,导致摄入的营养不均衡,身体缺乏维生素。建议老年人多食用水果,尤其是富含维生素C、维生素E的“年轻果”。
            </p>
            <h4>3、老年人体质虚弱如何调理之保持乐观心态</h4>
            <p>
              老年人的身体比较虚弱,而且比较容易患上一些高血压或者糖尿病等疾病。就会因此而产生一种消极悲观的心态的。长期的话,很容易引发其他的心里疾病的。因此老年人平时要保持乐观的心态,可以穿一些新的衣服,或者是看京剧表演等方式,来让自己的心情开阔,同时可以提高身体的抗病能力的。
            </p>
            <h4>4、老年人体质虚弱如何调理之温补</h4>
            <p>
              老年人体质变弱在中医上叫做虚证,可以采用温补的手段进行缓解。日常可以服用一些滋补类的食物或药品,但注意肾功能、肝功能不好的老年人要分别药物的排泄方式是什么,避免对脏器造成损伤。
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "older-home",
  data() {
    return {
      value: "",
    };
  },
};
</script>
<style>
#older-home {
  position: absolute;
  width: 100%;
  height: 92%;
  background-color: rgb(129, 211, 248);
}
#older-home .header {
  height: 15%;
  margin: 0;
  border-color: rgb(129, 211, 248);
  /* background-color: #fff; */
}
#older-home .header .van-icon {
  position: relative;
  margin-top: 16%;
  margin-left: 5%;
  margin-right: 5%;
}
#older-home .header span {
  position: relative;
  bottom: 10%;
  font-size: 24px;
  color: #fff;
}
#older-home .mid {
  width: 94%;
  height: 85%;
  margin: 0;
  padding: 5% 3% 2% 3%;
  background-color: rgb(242, 242, 242);
  border-top-left-radius: 25px;
  border-top-right-radius: 25px;
}
#older-home .mid .search {
  position: relative;
  height: 10%;
  width: 92%;
  margin: 0 4% 2% 4%;
  background-color: transparent;
}
#older-home .mid .search .van-search__content {
  height: 80%;
  border: 2px solid rgb(129, 211, 248);
}
#older-home
  .mid
  .search
  .van-search__content
  .van-field
  .van-field__value
  .van-field__body
  .van-field__control {
  position: relative;
  top: 3px;
  font-size: 18px;
}
#older-home .mid .search .van-search__action {
  height: 80%;
  font-size: 20px;
  /* background-color: rgb(129, 211, 248);
  border-radius: 25px; */
}
#older-home .mid .search .van-search__action div {
  position: relative;
  top: 5%;
}
.van-field__left-icon .van-icon {
  top: 10%;
  font-size: 24px;
}
#older-home .mid .mid-jump {
  position: relative;
  height: 15%;
  width: 100%;
  padding: 2% 0 2% 0;
}
#older-home .mid .mid-jump .service {
  position: relative;
  float: left;
  height: 100%;
  width: 48%;
  border-radius: 24px;
  background-color: rgb(245, 154, 35);
}
#older-home .mid .mid-jump .activity {
  position: relative;
  float: right;
  height: 100%;
  width: 48%;
  border-radius: 24px;
  background-color: rgb(113, 182, 4);
}
#older-home .mid .mid-jump .service img,
#older-home .mid .mid-jump .activity img {
  width: 80px;
  position: relative;
  top: 10px;
}
#older-home .mid .mid-jump .service span,
#older-home .mid .mid-jump .activity span {
  position: relative;
  bottom: 18px;
  font-size: 22px;
  font-weight: bold;
  color: #fff;
}
#older-home .mid .mid-home {
  position: relative;
  height: 68%;
  width: 94%;
  padding: 5% 3% 2% 3%;
  border-top-left-radius: 25px;
  border-top-right-radius: 25px;
  background-color: #fff;
}
#older-home .mid .mid-home .user {
  position: relative;
  width: 100%;
  height: 20%;
}
#older-home .mid .mid-home .user img {
  position: relative;
  top: 10%;
  left: 2%;
  float: left;
  border-radius: 999px;
  height: 80%;
}
#older-home .mid .mid-home .user .username {
  position: relative;
  left: 5%;
  top: 15%;
  width: 100%;
  height: 20%;
  margin: 0;
  font-size: 22px;
}
#older-home .mid .mid-home .user .publish-time {
  position: relative;
  top: 35%;
  left: 5%;
  height: 20%;
  font-size: 16px;
  color: rgb(133, 133, 133);
}
#older-home .mid .mid-home .content {
  position: relative;
  width: 100%;
  height: 80%;
  overflow-y: auto;
}
#older-home .mid .mid-home .content .title {
  font-size: 28px;
  margin: 5%;
}
#older-home .mid .mid-home .content .text p {
  font-size: 18px;
  margin: 5%;
  text-indent: 36px;
}
</style>