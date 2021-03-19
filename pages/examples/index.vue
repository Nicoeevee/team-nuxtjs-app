<template>
  <div class="content">
    <div class="inner">
      <h1>商办空间数字化转型—站式数据平台</h1>
    </div>

    <div class="neirong">
      <div class="div1">
      </div>
      <div class="div2">
      </div>
      <div class="div3">
      </div>
    </div>

    <div class="footer">
      <h2>立即体验Vercel, 开启数字空间创新运营体验</h2>
      <el-button round type="danger" @click="hrefVercel()">立即体验</el-button>
    </div>

  </div>

</template>

<script>
export default {
  layout: 'default',
  methods: {
    hrefVercel() {
      window.open('https://vercel.com')
    }
  }
}
</script>

<style scoped>
.footer {
  width: 100%;
  height: 300px;
  background-color: #f5f7fa;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}

.footer > h2 {
  margin-bottom: 20px;
}

.content {
  height: 100%;
  width: 100%;
}

.neirong {
  margin-top: 40px;
  height: 419px;
  display: flex;
  justify-content: space-around;
}

.neirong > div {
  margin-top: 20px;
  text-align: center;
  height: 300px;
  width: 500px;
}

.div1 {
  background: url('../../assets/paas.png') no-repeat;
}

.div2 {
  background: url('../../assets/saas.png') no-repeat;
}

.div3 {
  background: url('../../assets/developer.png') no-repeat;
}

.inner {
  display: flex;
  justify-content: center;
  margin-top: 40px;
}
</style>
