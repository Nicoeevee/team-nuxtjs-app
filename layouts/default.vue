<template>
  <div class="home_main">


    <NavBar/>
    <Nuxt/>
    <div class="footer_main">
      <Footer></Footer>
    </div>
  </div>
</template>
<style>
.home_main {
  min-height: 100vh;
  position: relative;
}

.footer_main {
  width: 100%;
  position: absolute;
  bottom: 0;
}

html {
  margin: 0;
  padding: 0;
  scroll-behavior: smooth;
  font-family: 'Source Sans Pro',
  -apple-system,
  BlinkMacSystemFont,
  'Segoe UI',
  Roboto,
  'Helvetica Neue',
  Arial,
  sans-serif;
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
}

*,
*::before,
*::after {
  box-sizing: border-box;
  margin: 0;
}
</style>
