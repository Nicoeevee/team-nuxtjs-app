<template>
  <div class="container">
    <section class="section-process">
      <div class="section-container">
        <div class="process-steps-container container-medium with-padding">
          <div class="process-step-container process-step-1">
            <div class="process-step-title-container">
              <h1 class="process-step-title">着手开发。</h1>
              <div class="process-step-title-overlay">着手开发。</div>
            </div>
          </div>
          <div class="process-step-container process-step-2">
            <div class="process-step-title-container">
              <h1 class="process-step-title">立即预览。</h1>
              <div class="process-step-title-overlay">立即预览。</div>
            </div>
          </div>
          <div class="process-step-container process-step-3">
            <div class="process-step-title-container">
              <h1 class="process-step-title">轻松部署。</h1>
              <div class="process-step-title-overlay">轻松部署。</div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <div class="carousel">
      <el-carousel :interval="5000" arrow="hover" height="560px" indicator-position="outside">
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
.section-process {
  margin:72px;
  --gradient-color-1: #ef008f;
  --gradient-color-2: #6ec3f4;
  --gradient-color-3: #7038ff;
  --gradient-color-4: #c9c9c9;
}

.section-process .process-steps-container .process-step-container .process-step-title-container {
  margin-top: -16px;
  position: relative;
}

.section-process .process-steps-container .process-step-container .process-step-title-container .process-step-title, .section-process .process-steps-container .process-step-container .process-step-title-container .process-step-title-overlay {
  font-family: -apple-system, system-ui, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
  font-size: 156px;
  font-weight: 900;
  margin: 0;
  line-height: 1.3em;
  letter-spacing: -4px;
}

.section-process .process-steps-container .process-step-container .process-step-title-container .process-step-title-overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: auto;
  height: 100%;
  opacity: 1;
  -webkit-text-fill-color: transparent;
  -webkit-background-clip: text;
}

.section-process .process-steps-container .process-step-container.process-step-1 .process-step-title-overlay {
  background-image: linear-gradient(90deg, var(--gradient-color-1), var(--gradient-color-2));
  animation: animated-gradient-title-1 8s infinite;
}

.section-process .process-steps-container .process-step-container.process-step-2 .process-step-title-overlay {
  background-image: linear-gradient(90deg, var(--gradient-color-2), var(--gradient-color-3));
  animation: animated-gradient-title-2 8s infinite;
}

.section-process .process-steps-container .process-step-container.process-step-3 .process-step-title-overlay {
  background-image: linear-gradient(90deg, var(--gradient-color-3), var(--gradient-color-1));
  animation: animated-gradient-title-3 8s infinite;
}

@keyframes animated-gradient-title-1 {
  0%, 16.667%, 100% {
    opacity: 1;
  }
  33.333%, 83.333% {
    opacity: 0;
  }
}

@keyframes animated-gradient-title-2 {
  0%, 16.667%, 66.667%, 100% {
    opacity: 0;
  }
  33.333%, 50% {
    opacity: 1;
  }
}

@keyframes animated-gradient-title-3 {
  0%, 50%, 100% {
    opacity: 0;
  }
  66.667%, 83.333% {
    opacity: 1;
  }
}

.container {
  display: flex;
  flex-direction: column;
  align-items: center;
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
