<template>
  <div class="content">
      <div class="center">
        <div class="center_left">
          <div v-for="i in NewsData" :key="i" class="article" @click="$router.push({name: 'news_detail', params: {key: i}})">
            <div class="article_title">
              {{ i.title }}
            </div>
            <div class="article_content">
              {{ i.content }}
              <div class="article_footer">
                <span><el-button icon="el-icon-search" circle></el-button></span>
                <span>
                <el-button type="warning" icon="el-icon-star-off" @click.stop="" circle></el-button>
               </span>
                <span>
                   <el-button type="info" icon="el-icon-message" @click.stop="" circle></el-button></span>
              </div>
            </div>
          </div>
        </div>
        <div class="center_right">
          <div class="right_title">
            推荐
          </div>
          <div v-for="o in NewsData" :key="o" class="right_item">
            <div class="item_top">
              <span> <i class="fa fa-calendar-times-o"></i> {{ formatDate(o.publishTime) }} </span>
              <!--            <span><i class="fa fa-eye"></i> 20</span>-->
            </div>
            <div class="item_bootom">
              {{ o.content.slice(0, 64) }}…
            </div>
          </div>
        </div>
      </div>
  </div>
</template>
<script>
import {article_findAll} from '@/api'

export default {
  layout: "default",
  data() {
    return {
      NewsData: [],
    };
  },
  created() {
    this.findAll()
  },
  methods: {
    async findAll() {
      const data = await article_findAll();
      this.NewsData = data.data;
    },
    //时间戳转换方法    time:需要被转换的时间戳数字
    formatDate(time) {
      var date = new Date(parseInt(time));
      var year = date.getFullYear();
      var mon = date.getMonth() + 1;
      var day = date.getDate();
      return year + '/' + mon + '/' + day;
    }
    ,
  }
};
</script>
<style scoped>
.content {
  padding-top: 16px;
  width: 100%;
  background-color: #f9f9f9;
}

.center {
  margin: auto;
  width: 1100px;
}

.center_left {
  width: 640px;
  margin-right: 16px;
  background-color: #fff;
  float: left;
  border-radius: 5px;
  box-sizing: border-box;
  padding: 10px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, .12), 0 0 8px rgba(0, 0, 0, .09)
}

.center_right {
  width: 300px;
  background-color: #fff;
  float: left;
  border-radius: 5px;
  box-sizing: border-box;
  padding: 10px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, .12), 0 0 8px rgba(0, 0, 0, .09)
}

.article {
  width: 100%;
  border-bottom: 1px solid #ddd;
  margin-bottom: 15px;
}

.article_title {
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

.item_bottom {
  margin-top: 11px;
  margin-bottom: 11px;
}
</style>
