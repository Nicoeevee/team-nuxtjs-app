<template>
  <div id="nav-wrapper">
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
  name: "footer",
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
