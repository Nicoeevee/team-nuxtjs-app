<template>
  <div id="nav-wrapper">
    <el-row type="flex" class="row-bg" justify="center">
      <el-col :span="4">
        <el-image
          style="width: 50px; height: 50px"
          :src="logo"
          fit="fit">
        </el-image>
      </el-col>
      <el-col :span="8">
        <el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal" @select="handleSelect">
          <el-menu-item index="1" @click="$router.push({name: 'index'})">首页</el-menu-item>
          <el-menu-item index="2" @click="$router.push({name: 'news'})">新闻</el-menu-item>
          <el-menu-item index="3" @click="$router.push({name: 'examples'})">案例</el-menu-item>
          <el-menu-item index="4" @click="$router.push({name: 'solution'})">解决方案</el-menu-item>
          <el-menu-item index="5" @click="$router.push({name: 'playground'})">playground</el-menu-item>
        </el-menu>
      </el-col>
      <el-col :span="4">
         <span
         >二维码
            <img :src="qrcode"/>
          </span>
        <el-popover
          placement="bottom-end"
          title="二维码"
          width="100"
          trigger="hover">
          <div style="text-align: right; margin: 0">
            <img :src="qrcode"/>
          </div>
          <el-button slot="reference">二维码</el-button>
        </el-popover>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  name: "the_nav",
  data() {
    return {
      activeIndex: '1',
      activeIndex2: '1',
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

img {
  width: 75px;
  height: 75px;
  display: block;
}

span img {
  width: 200px;
  height: 200px;
  float: right;
  display: none;
  /* margin-top: 75px; */
}

span:hover > img {
  display: block;
  position: absolute;
  z-index: 999;
}
</style>
