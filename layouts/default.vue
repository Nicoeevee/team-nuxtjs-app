<template>
  <div class="site">
    <NavBar/>
    <Nuxt class="fadein site_content"/>
    <Footer/>
  </div>
</template>
<style>
.site {
  display: flex;
  min-height: 100vh;
  flex-direction: column;
}

.site_content {
  flex: 1;
}

.fadein {
  animation: 1s appear;
  margin: 0;
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
