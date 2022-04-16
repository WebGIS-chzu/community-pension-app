<template>
  <div id="worker-order">
    <div class="header">
      <div class="order-text">我的接单</div>
    </div>
    <div class="mid">
      <div class="content" v-for="item in inform" :key="item.id">
        <img :src="item.src" alt="老人头像" />
        <van-field class="name" readOnly v-model="item.name" label="服务老人:" />
        <van-field class="type" readOnly v-model="item.type" label="服务类型:" />
        <van-field class="time" readOnly v-model="item.time" label="服务时间:" />
        <div class="w-true text" v-if="item.whether">
          <span>{{item.text}}</span>
        </div>
        <div class="w-false text" v-if="!item.whether">
          <span>{{item.text}}</span>
        </div>
        <van-button class="evaluate" v-if="item.whether">客户评价</van-button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "worker-order",
  data() {
    return {
      inform: [
        {
          id: 1,
          src: require("../public/img/portrait_1.png"),
          name: "李玉秀",
          type: "陪医就诊",
          time: "2022-03-11 13:21",
          text:"正在进行",
          whether: false,
        },
        {
          id: 2,
          src: require("../public/img/portrait_2.png"),
          name: "董力",
          type: "接人接物",
          time: "2022-03-11 12:09",
          text:"已完成",
          whether: true,
        },
        {
          id: 3,
          src: require("../public/img/portrait_3.png"),
          name: "王丽",
          type: "商品代购",
          time: "2022-03-09 08:36",
          text:"已完成",
          whether: true,
        },
        {
          id: 4,
          src: require("../public/img/portrait_4.png"),
          name: "王友德",
          type: "药品管理",
          time: "2022-03-08 16:24",
          text:"已完成",
          whether: true,
        },
      ],
    };
  },
};
</script>
<style>
#worker-order {
  position: absolute;
  width: 100%;
  height: 92%;
  background-color: rgb(242, 242, 242);
}
#worker-order .header {
  position: relative;
  width: 100%;
  height: 10%;
}
#worker-order .header .order-text {
  position: relative;
  height: 32%;
  width: 50%;
  font-size: 24px;
  top: 60%;
  left: 4%;
}
#worker-order .mid {
  position: relative;
  width: 96%;
  height: 88%;
  margin: 2%;
}
#worker-order .mid .content {
  position: relative;
  width: 100%;
  height: 22%;
  margin-bottom: 2%;
  background-color: #fff;
}
#worker-order .mid .content img {
  position: relative;
  float: left;
  left: 5%;
  top: 10%;
  height: 40%;
  border-radius: 999px;
}
#worker-order .mid .content .van-field{
  border: 0px solid transparent;
  background-color: transparent;
}
#worker-order .mid .content .name {
  position: relative;
  top: 5%;
  left: 5%;
  width: 50%;
  font-size: 18px;
}
#worker-order .mid .content .name .van-field__label {
  width: 50%;
}
#worker-order .mid .content .type,
#worker-order .mid .content .time{
  position: relative;
  float: right;
  right: 10%;
  top: 10%;
  width: 70%;
  height: 20%;
}
#worker-order .mid .content .type .van-field__label,
#worker-order .mid .content .time .van-field__label{
  color: rgb(200, 200, 200);
}
.van-cell::after{
  border-bottom:0px solid
}
#worker-order .mid .content .text{
  position: relative;
  float: right;
  left: 68%;
  top: -40%;
  font-size: 15px;
}
#worker-order .mid .content .w-true{
  color: rgb(200, 200, 200);
}
#worker-order .mid .content .w-false{
  color: #000;
}
#worker-order .mid .content .evaluate{
  padding: 0%;
  position: relative;
  float: right;
  left: 78%;
  top: 25%;
  width: 18%;
  height: 22%;
  border-radius: 8px;
  background-color:rgb(18,150,219);
  color: #fff;
}
</style>