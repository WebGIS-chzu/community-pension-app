<template>
  <div id="children">
    <router-view />
    <van-tabbar class="nav-bar" v-model="active">
      <van-tabbar-item to="/children/home" icon="wap-home-o"
        >首页</van-tabbar-item
      >
      <van-tabbar-item to="/children/monitor" class="monitor">
        <span>自定义</span>
        <template #icon="props">
          <img :src="props.active ? icon.active : icon.inactive" />
        </template>
      </van-tabbar-item>
      <van-tabbar-item to="/children/information" icon="chat-o"
        >消息</van-tabbar-item
      >
      <van-tabbar-item to="/children/personal" icon="manager-o"
        >我的</van-tabbar-item
      >
    </van-tabbar>
  </div>
</template>

<script>
export default {
  name: "children",
  data() {
    const active = 0;
    const icon = {
      active: require("./public/img/monitor-1.png"),
      inactive: require("./public/img/monitor.png"),
    };
    return {
      active,
      icon,
    };
  },
};
</script>
<style>
#children {
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
.nav-bar .monitor .van-tabbar-item__icon img{
  width: 40px;
  height: 40px;
}
</style>