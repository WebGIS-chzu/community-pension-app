<template>
  <div id="older">
    <router-view />
    <van-tabbar class="nav-bar" v-model="active">
      <van-tabbar-item to="/older/home" icon="wap-home-o">首页</van-tabbar-item>
      <van-tabbar-item to="/older/information" icon="chat-o"
        >消息</van-tabbar-item
      >
      <van-tabbar-item to="/older/personal" icon="contact"
        >我的</van-tabbar-item
      >
    </van-tabbar>
  </div>
</template>


<script>
export default {
  data() {
    const active = 0;
    return { active };
  },
};
</script>
<style>
#older {
  position: absolute;
  width: 100%;
  height: 100%;
}
.nav-bar {
  height: 8%;
  z-index: 10;
}
.nav-bar .van-tabbar-item .van-tabbar-item__icon .van-icon {
  font-size: 40px;
}
</style>