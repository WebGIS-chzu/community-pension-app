<template>
  <div id="login">
    <van-button
      to="/older/home"
      round
      block
      type="primary"
      native-type="submit"
    >
      养老端
    </van-button>
    <van-button
      to="/worker/home"
      round
      block
      type="primary"
      native-type="submit"
    >
      护工端
    </van-button>
    <van-button
      to="/children/home"
      round
      block
      type="primary"
      native-type="submit"
    >
      子女端
    </van-button>
  </div>
</template>

<script>
export default {
  name: "login",
  data() {
    return {};
  },
};
</script>
<style>
#login {
  position: absolute;
  width: 100%;
  height: 100%;
}
#login .van-button {
  position: relative;
  left: 10%;
  margin-top: 20%;
  width: 80%;
}
</style>