<template>
  <div class="content">
    <div class="center">
      <div class="center_left">
        <div style="float: left; margin: 4px; padding-right:4px;">
          <el-button circle @click="$router.push({name: 'news'})"><i class="el-icon-back"></i></el-button>
        </div>
        <h3> {{ NewsData.title }}</h3>
        <span>{{ formatDate(NewsData.publishTime) }} </span>
        <div class="inner">
          <p style="font-family: PingFang SC;line-height: 1.5">&emsp;&emsp;{{ NewsData.content }}</p>
        </div>
        <div class="inner_footer">
          <el-link type="primary" @click="qiehuan(-1)">上一篇</el-link>
          <el-link type="primary" @click="qiehuan(0)">下一篇</el-link>
        </div>
      </div>
      <div class="center_right">
        <div class="right_item">
          相关推荐
        </div>
        <div v-for="i in tuijian.slice(tuijian.length-5,tuijian.length-1)" class="right_item">
          <div class="item_top">
            <span> <i class="fa fa-calendar-times-o"></i>{{ formatDate(i.publishTime) }} </span>
            <span>{{ i.title }}</span>
          </div>
          <div class="item_bootom">

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
      NewsData: {},
      tuijian: []
    };
  },
  created() {
    this.NewsData = this.$route.params.key;
    this.findAll();
  },
  methods: {
    async findAll() {
      const data = await article_findAll();
      this.tuijian = data.data;
      console.log(this.tuijian)
    },
    //时间戳转换方法    time:需要被转换的时间戳数字
    formatDate(time) {
      var date = new Date(parseInt(time));
      var year = date.getFullYear();
      var mon = date.getMonth() + 1;
      var day = date.getDate();
      return year + '/' + mon + '/' + day;
    },
    qiehuan(card){
        for(let i=0;i<this.tuijian.length;i++){
          if(card==-1){
            if(this.tuijian[i].id==this.NewsData.id){
                    if(i==0){
                      this.$message('没有上一条新闻');
                    }else{this.NewsData=this.tuijian[i-1];}}}
                  else if(card==0){
                 if(this.tuijian[i].id==this.NewsData.id){
                      console.log(i);
                      this.NewsData=this.tuijian[++i];
                      if(i==this.tuijian.length){
                        this.$message('没有下一条新闻');
                        this.NewsData=this.tuijian[i-1];
                        break;
                      }
            }
                  }

        }

    }
  }
};
</script>
<style scoped>
.inner {
  padding: 10px;
  margin-top: 10px;
  width: 760px;
  height: 500px;
  background-color: #ffffff;
  border: 1px solid #dddddd;
}

.inner_footer {
  margin-top: 15px;
  display: flex;
  justify-content: space-around;
}

.content {
  width: 100%;
  background-color: #f9f9f9;
}

.center {
  margin: 4px auto auto auto;
  padding-top: 8px;
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
