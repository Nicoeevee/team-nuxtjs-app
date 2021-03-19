<template>
  <div class="container">
    <h1 class="index_slogan"><span>
      着手开发。
      立即预览。
      轻松部署。
    </span></h1>
    <div class="carousel">
      <el-carousel :interval="5000" indicator-position="outside" arrow="hover" height="560px">
        <el-carousel-item v-for="img in images" :key="img">
          <img :src="img" alt="轮播图">/>
        </el-carousel-item>
      </el-carousel>
    </div>
    <Nuxt></Nuxt>
  </div>
</template>

<script>
export default {
  layout: 'default',
  data() {
    return {
      images: [
        require("../assets/unsplash00.jpg"),
        require("../assets/unsplash01.jpg"),
        require("../assets/unsplash02.jpg")
      ],
    };
  },
}
</script>

<style scoped>
.index_slogan {
  font-size: 9rem;
}
.index_slogan > span{
  color: #5BA6DF;
  /*text-shadow: 1px 1px 10px #5BA6DF;*/
  background-image: -webkit-linear-gradient(left, #c90f2d, #e62bad 25%, #7d2ac9 50%, #1623e6 75%, #2EC7C9 100%);
  -webkit-text-fill-color: transparent;
  -webkit-background-clip: text;
  -webkit-background-size: 200% 100%;
  -webkit-animation: masked-animation 4s infinite linear;
  font-family:Chaparral Pro Light;
  letter-spacing:2px;
}

@keyframes masked-animation {
  0% {
    background-position: 0 0;
  }
  100% {
    background-position: -100% 0;
  }
}
.index_slogan > span {
  word-break: normal;
  width: auto;
  display: block;
  line-height: 1em;
  white-space: pre-wrap;
  word-wrap: break-word;
  overflow: hidden;
}

.container {
  margin: 0;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  text-align: center;
}

.carousel {
  width: 100%;
  height: 100vh;
  margin: 0;
}

.carousel img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}
</style>
