<template>
  <div id="children-personal">
    <div class="header">
      <img class="portrait" :src="form.src" alt="子女头像" />
      <div class="info">
        <div class="name">{{form.name}}</div>
        <div class="number">ID：{{form.id}}</div>
        <div class="status">+状态</div>
        <van-cell is-link>
          <van-icon name="qr" />
        </van-cell>
      </div>
    </div>
    <div class="mid">
      <van-cell class="first" title="我的家人" :icon="require('./public/img/family.png')" is-link />
      <van-cell title="朋友圈" :icon="require('./public/img/friend.png')" is-link />
      <van-cell title="设置" :icon="require('./public/img/set-up.png')" is-link />
      <van-cell title="退出" to="/login" :icon="require('./public/img/log-out.png')" is-link />
    </div>
  </div>
</template>

<script>
export default {
  name: "children-personal",
  data() {
    return {
      form:{
        src:require('./public/img/portrait.png'),
        name:"周奥施",
        id:"1000724"
      },
    };
  },
};
</script>
<style>
#children-personal {
  position: absolute;
  width: 96%;
  height: 90%;
  padding: 2%;
  background-color: rgb(242, 242, 242);
}
#children-personal .header {
  position: relative;
  width: 100%;
  height: 28%;
}
#children-personal .header .portrait {
  position: relative;
  height: 30%;
  float: left;
  margin-top: 20%;
  margin-left: 5%;
}
#children-personal .header .info {
  position: relative;
  width: 72%;
  height: 60%;
  top: 35%;
  left: 25%;
}
#children-personal .header .info .name {
  position: absolute;
  height: 30%;
  font-size: 28px;
  text-align: left;
}
#children-personal .header .info .number {
  position: absolute;
  height: 30%;
  top: 35%;
  font-size: 18px;
}
#children-personal .header .info .status {
  position: absolute;
  text-align: center;
  height: 18%;
  width: 18%;
  top: 65%;
  font-size: 16px;
  border-radius: 24px;
  border: 0.5px solid rgb(200, 200, 200);
  background-color: rgb(246, 246, 246);
}
#children-personal .header .info .van-cell {
  position: relative;
  float: right;
  width: 30%;
  font-size: 24px;
  background-color: transparent;
}
#children-personal .header .info .van-cell .van-cell__right-icon{
  color: #000;
}
#children-personal .mid {
  position: relative;
  width: 100%;
  height: 72%;
}
#children-personal .mid .van-cell{
  height: 9%;
  padding-top: 4%;
  font-size: 24px;
  border-bottom: 1px solid #fff;
}
#children-personal .mid .first{
  margin-bottom: 3%;
}
#children-personal .mid .van-cell .van-icon{
  position: relative;
  top: -20%;
  font-size: 32px;
}
#children-personal .mid .van-cell .van-icon-arrow{
  position: relative;
  top: 0;
  font-size: 24px;
  color: #000;
}
</style>