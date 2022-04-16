<template>
  <div id="worker">
    <router-view />
    <van-tabbar class="nav-bar" v-model="active">
      <van-tabbar-item to="/worker/home" icon="wap-home-o"
        >首页</van-tabbar-item
      >
      <van-tabbar-item to="/worker/order" icon="balance-list-o"
        >订单</van-tabbar-item
      >
      <van-tabbar-item to="/worker/information" icon="chat-o"
        >消息</van-tabbar-item
      >
      <van-tabbar-item to="/worker/personal" icon="manager-o"
        >我的</van-tabbar-item
      >
    </van-tabbar>
  </div>
</template>

<script>
export default {
  name: "worker",
  data() {
    const active = 0;
    return {
      active,
    };
  },
};
</script>
<style>
#worker {
  position: absolute;
  width: 100%;
  height: 100%;
}
#worker .nav-bar {
  height: 8%;
  z-index: 10;
}
#worker .nav-bar .van-tabbar-item .van-tabbar-item__icon .van-icon {
  font-size: 40px;
}
</style>