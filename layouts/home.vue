<template>
  <div class="main">
    <div class="header">
      <div class="wrapper">
        <div class="wrapper_left">
          <img src="../assets/hhxy.jpg" />
        </div>
        <div class="wrapper_center">
          <ul>
            <li>
							<nuxt-link to='/'>首页</nuxt-link>
						</li>
            <li><nuxt-link to='/solution'>解决方案</nuxt-link></li>
            <li><nuxt-link to='/examples'>经典案例</nuxt-link></li>
            <li><nuxt-link to='/news'>新闻动态</nuxt-link></li>
            <li><nuxt-link to='/todo'>待定</nuxt-link></li>
          </ul>
        </div>
        <div class="wrapper_right">
          <span
            >二维码
            <img src="../assets/qrcode_localhost.png" />
          </span>
        </div>
      </div>
    </div>
    <div class="carousel">
      <el-carousel :interval="5000" arrow="always">
        <el-carousel-item v-for="item in img" :key="item">
          <img :src="item" />
        </el-carousel-item>
      </el-carousel>
    </div>
    <Nuxt></Nuxt>
    <div class="footer">
      <div>怀化市中方县城北鸭嘴岩镇（中方校区） 邮编：418000</div>
      <div>
        湘ICP备13011546号-1 湘教QS3-200505-000098 湘公网安备43120202000202号
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      img: [
        require("../assets/img1.png"),
        require("../assets/img4.png")
      ],
    };
  },
};
</script>
<style>
.main {
  width: 100%;
  height: 100%;
  /* background-color: pink; */
}
.main .header {
  width: 100%;
  height: 75px;
  border-bottom: 1px solid #ededed;
}
.header .wrapper {
  width: 1200px;
  height: 75px;
  margin: 0 auto;
}
.wrapper_left {
  width: 15%;
  height: 75px;
  float: left;
}
.wrapper_center {
  width: 65%;
  height: 75px;
  float: left;
}

.wrapper_right {
  width: 20%;
  height: 75px;
  float: left;
  text-align: right;
}

.wrapper_left img {
  width: 75px;
  height: 75px;
  display: block;
}
.wrapper_center ul {
  width: 100%;
  height: 75px;
}
.wrapper_center li {
  list-style: none;
  float: left;
  width: 20%;
  text-align: center;
  line-height: 75px;
}
.wrapper_right img {
  width: 200px;
  height: 200px;
  float: right;
  display: none;

  /* margin-top: 75px; */
}
.wrapper_right span {
  line-height: 75px;
}
.wrapper_right span:hover > img {
  display: block;
  position: relative;
  z-index: 999;
}
.carousel {
  width: 1200px;
  height: 400px;
  margin: 0 auto;
  margin-top: 10px;
}
.carousel img {
  width: 100%;
  height: 100%;
}
.footer {
  height: 65px;
  text-align: center;
  background-color: #000;
  color: #fff;
  font-size: 14px;
  overflow: hidden;
}
.footer > div:first-child {
  margin-top: 10px;
}
</style>
