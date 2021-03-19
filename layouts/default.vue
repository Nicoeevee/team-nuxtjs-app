<template>
  <div class="home_main">
    <NavBar/>
    <Nuxt class="fadein"/>
    <div class="footer_main">
      <Footer></Footer>
    </div>

  </div>
</template>
<style>
.fadein{
  animation: 1s appear;
  margin: 0;
}

.home_main {
  /*position: relative;*/
  /*z-index: 99;*/
  display: flex;
  flex-direction: column;
}

.footer_main {
  width: 100%;
  /*position: absolute;*/
  /*bottom: 0;*/
  /*z-index: 1;*/
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
