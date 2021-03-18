<template>
  <div class="content">
    <div class="center">
      <div class="center_left">
        <div class="article" v-for="i in 6" :key="i">
          <div class="article_title">
            标题
          </div>
          <div class="article_content">
            内容
            <div class="article_footer">
              <span>200 浏览dd</span>
              <span>
                <i class="fa fa-comment" aria-hidden="true"></i>评论
              </span>
              <span
              ><i class="fa fa-thumbs-o-up" aria-hidden="true"></i>点赞</span
              >
            </div>
          </div>
        </div>
      </div>

      <div class="center_right">
        <div class="right_title">
          推荐
        </div>
        <div class="right_item" v-for="o in 6" :key="o">
          <div class="item_top">
            <span> <i class="fa fa-calendar-times-o"></i> 2021-3-18 </span>
            <span><i class="fa fa-eye"></i> 20</span>
          </div>
          <div class="item_bootom">
            内容
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
  export default {
    layout: "home"

  };
</script>
<style scoped>
  .content {
    width: 100%;
    background-color: #f9f9f9;
    overflow: hidden;
  }
  .center {
    margin: 10px auto;
    width: 1100px;
    overflow: hidden;
  }
  .center_left {
    width: 780px;
    margin-right: 20px;
    min-height: 500px;
    background-color: #fff;
    float: left;
    border-radius: 5px;
    box-sizing: border-box;
    padding: 10px;
  }
  .center_right {
    width: 300px;
    min-height: 500px;
    background-color: #fff;
    float: left;
    border-radius: 5px;
    box-sizing: border-box;
    padding: 10px;
  }

  .article {
    width: 100%;
    /* height: 300px; */
    /* background-color: red; */
    border-bottom: 1px solid #ddd;
    margin-bottom: 15px;
  }
  .article_title {
    /* font-size: 20px; */
    font-weight: bold;
    margin-bottom: 10px;
  }

  .article_footer {
    text-align: right;
    margin-top: 20px;
    margin-bottom: 40px;
  }
  .article_footer > span {
    margin-left: 10px;
  }
  .right_title {
    padding-bottom: 10px;
    box-sizing: border-box;
    /* background-color: red; */
    border-bottom: 1px solid #ddd;
  }
  .right_item {
    padding: 5px;
    border-bottom: 1px solid #ddd;
    font-size: 15px;
    color: #515a6e;
  }
  .item_top > span {
    margin-right: 11px;
  }
  .item_bootom {
    margin-top: 11px;
    margin-bottom: 11px;
  }
</style>
