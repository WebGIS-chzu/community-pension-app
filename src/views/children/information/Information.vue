<template>
  <div id="children-information">
    <div class="header">
      <div class="title">消息</div>
      <van-icon name="plus" />
      <van-icon name="todo-list-o" />
    </div>
    <div class="mid">
      <van-search placeholder="搜索" />
      <div class="chat-box" v-for="item in inform" :key="item.id">
        <img :src="item.src" alt="头像" />
        <div class="name">
          <span>{{ item.name }}</span>
        </div>
        <div class="content">
          <span>{{ item.content }}</span>
        </div>
        <div class="time">
          <span>{{ item.time }}</span>
        </div>
        <van-badge :content="item.read" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "children-information",
  data() {
    return {
      inform: [
        {
          id: 1,
          src: require("./public/img/notice.png"),
          name: "系统通知",
          content: "",
          time: "03/06",
          read: "",
        },
        {
          id: 2,
          src: require("./public/img/older-man.png"),
          name: "老爸",
          content: "我们马上就要回家去了",
          time: "上午8：52",
          read: "1",
        },
        {
          id: 3,
          src: require("./public/img/older-women.png"),
          name: "老妈",
          content: "等会和你爸去市场买菜",
          time: "上午7：40",
          read: "",
        },
      ],
    };
  },
};
</script>
<style>
#children-information {
  position: absolute;
  width: 100%;
  height: 92%;
  background-color: rgb(242, 242, 242);
}
#children-information .header {
  position: relative;
  width: 100%;
  height: 10%;
}
#children-information .header .title {
  position: relative;
  height: 32%;
  width: 50%;
  font-size: 24px;
  top: 60%;
  left: 4%;
}
#children-information .header .van-icon-todo-list-o {
  position: relative;
  float: right;
  right: 4%;
  font-size: 28px;
  top: 30%;
}
#children-information .header .van-icon-plus {
  position: relative;
  float: right;
  right: 2%;
  font-size: 24px;
  top: 30%;
}
#children-information .mid {
  position: relative;
  width: 100%;
  height: 90%;
  background-color: #fff;
}
#children-information .mid .van-search {
  background-color: rgb(242, 242, 242);
}
#children-information .mid .van-search .van-search__content {
  border-radius: 10px;
  background-color: #fff;
}
#children-information .mid .chat-box {
  position: relative;
  width: 100%;
  height: 10%;
  border-bottom: 1px solid rgba(162, 162, 162, 0.6);
}
#children-information .mid .chat-box img {
  position: relative;
  float: left;
  height: 90%;
  top: 5%;
  left: 2%;
  border-radius: 999px;
}
#children-information .mid .chat-box .name {
  position: relative;
  width: 50%;
  left: 4%;
  top: 15%;
  font-size: 19px;
  font-weight: 600;
}
#children-information .mid .chat-box .content {
  position: relative;
  height: 30%;
  width: 70%;
  left: 4%;
  top: 20%;
  font-size: 14px;
  color: rgb(162, 162, 162);
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
}
#children-information .mid .chat-box .time {
  position: relative;
  float: right;
  top: -50%;
  right: 2%;
  font-size: 14px;
  color: rgb(162, 162, 162);
}
#children-information .mid .chat-box .van-badge{
  position: relative;
  float: right;
  right: -14%;
  width: 7%;
  height: 25%;
  font-size: 14px;
}
</style>