<template>
  <div class="container">
    <section class="section-process">
      <div class="section-container">
        <div class="process-steps-container container-medium with-padding">
          <div class="process-step-container process-step-1">
            <div class="process-step-title-container">
              <h1 class="process-step-title">着手开发</h1>
              <div class="process-step-title-overlay">着手开发</div>
            </div>
          </div>
          <div class="process-step-container process-step-2">
            <div class="process-step-title-container">
              <h1 class="process-step-title">立即预览</h1>
              <div class="process-step-title-overlay">立即预览</div>
            </div>
          </div>
          <div class="process-step-container process-step-3">
            <div class="process-step-title-container">
              <h1 class="process-step-title">轻松部署</h1>
              <div class="process-step-title-overlay">轻松部署</div>
            </div>
          </div>
        </div>
      </div>

      <div class="hero_buttons">
        <el-button class="buttons_black" type="primary" plain>Start Deploying</el-button>
        <el-button class="buttons_gray" type="primary" plain>Get a Demo</el-button>
      </div>
      <h2 class="hero_description__3Ma5E">Vercel combines the best developer experience with an obsessive focus on end-user performance.
        <br> Our platform enables frontend teams to do their best work.</h2>


      <div class="tiny-heading_heading__eUMPB" style="text-align: center">
        <small class="tiny-heading_heading_small" >Explore the Vercel way</small>
      </div>
    </section>
    <div class="carousel">
      <el-carousel :interval="5000"  arrow="hover" height="560px" indicator-position="none">
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

<style lang="less" scoped>
.hero_buttons{
  width: 600px;
  display: flex;
  justify-content: space-between;
  margin: 40px 0 80px 0;
  .el-button{
    width: 200px;
    height: 50px;
    font-weight:500;
    font-size: 1rem;
  }
  .buttons_black {
    color: #fff;
    background-color: #000;
    border-color: #000;
    &:hover{
      color: #000;
      background-color: #fff;
      border-color: #000;
    }
  }

  .buttons_gray {
    color: #666 ;
    background-color: #fff;
    border-color: #999;
    &:hover{
      color: #000;
      background-color: #fff;
      border-color: #000;
    }
  }
}

.hero_description__3Ma5E{
  line-height: 35px!important;
  color: #666;
  font-weight: 400;
  font-size: 1.25rem;
  letter-spacing: -.02em;
  text-align: center;
  margin: 10px 0 54px;
}

.tiny-heading_heading_small{
  font-size: 0.75rem;
  letter-spacing: 0.2rem;
  margin-top: 0;
  padding-left: 0.2rem;
  color: #000000;
}

.section-process {
  /*text-align: center;*/
  margin-left: 128px;
  margin-bottom: 64px;
  margin-top: 64px;
  --gradient-color-1: #007CF0;
  --gradient-color-2: #00DFD8;
  --gradient-color-3: #7928CA;
  --gradient-color-4: #FF0080;
  --gradient-color-5: #FF4D4D;
  --gradient-color-6: #F9CB28;
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
  background-image: linear-gradient(90deg, var(--gradient-color-3), var(--gradient-color-4));
  animation: animated-gradient-title-2 8s infinite;
}

.section-process .process-steps-container .process-step-container.process-step-3 .process-step-title-overlay {
  background-image: linear-gradient(90deg, var(--gradient-color-5), var(--gradient-color-6));
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
  height: 100%;
  margin: 0;
  padding: 10px 5px;
  /*box-shadow: 0 2px 4px rgba(0, 0, 0, .12), 0 0 6px rgba(0, 0, 0, .04)*/
}

.carousel img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}
</style>
