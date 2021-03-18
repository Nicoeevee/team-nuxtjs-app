<template>
  <div class="container">
    <h1 style="font-size:10rem">岂止于大</h1>
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

<style>

.container {
  padding-top: 8px;
  margin: auto;
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
