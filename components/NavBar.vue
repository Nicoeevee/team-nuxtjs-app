<template>
  <div id="nav-wrapper">
    <div class="nav_container">
      <Logo></Logo>
      <el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal" @select="handleSelect"  active-text-color="black" >
        <el-menu-item index="/" @click="$router.push({name: 'index'})">首页</el-menu-item>
        <el-menu-item index="/news" @click="$router.push({name: 'news'})">新闻</el-menu-item>
        <el-menu-item index="/examples" @click="$router.push({name: 'examples'})">案例</el-menu-item>
        <el-menu-item index="/solution" @click="$router.push({name: 'solution'})">疫情防控</el-menu-item>
<!--        <el-menu-item index="/playground" @click="$router.push({name: 'playground'})">playground</el-menu-item>-->
      </el-menu>
      <div class="more">
        <el-link type="info"> 加入我们
          <img :src="qrcode" alt="qrcode"/></el-link>
        <el-popover
          placement="bottom-end"
          title="二维码"
          width="100"
          trigger="hover">
          <div style="text-align: right; margin: 0">
            <img :src="qrcode" alt="qrcode"/>
          </div>
          <el-button slot="reference">分享</el-button>
        </el-popover>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "the_nav",
  data() {
    return {
      activeIndex: this.$route.path ?? '/',
      logo:
        require("../assets/hhxy.jpg"),
      qrcode:
        require("../assets/qrcode_localhost.png"),
    };
  },
  methods: {
    handleSelect(key, keyPath) {
      console.log(key, keyPath);
    }
  }
}
</script>

<style scoped>
.nav_container {
  box-shadow: 0 12px 10px -10px rgba(0,0,0,0.12);
  display: flex;
  justify-content: space-around;
  align-items: center;
  text-align: center;
}

.el-popover img {
  width: 75px;
  height: 75px;
  display: block;
}

.more img {
  width: 75px;
  height: 75px;
  float: right;
  display: none;
  /* margin-top: 75px; */
}

.more:hover img {
  margin-top: 16px;
  display: block;
  position: absolute;
  z-index: 999;
}
</style>
