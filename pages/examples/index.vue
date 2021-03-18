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
  </div>

</template>

<script>
export default{
  layout:'default'
}
</script>

<style scoped>
 .content{
   height: 100%;
   width: 100%;
 }
 .neirong
 {
   margin-top: 40px;
   height: 419px;
   display: flex;
   justify-content: space-around;
 }
 .neirong>div
 {

  text-align: center;
   height: 300px;
   width: 500px;
   /*border: 1px solid red;*/
 }
 .div1{
   background:url('../../assets/paas.png') no-repeat ;
 }
 .div2{
   background:url('../../assets/saas.png') no-repeat ;
  }
 .div3{
   background:url('../../assets/developer.png') no-repeat;
   }
  .inner{
    display: flex;
   justify-content: center;
    margin-top: 40px;
  }
</style>
