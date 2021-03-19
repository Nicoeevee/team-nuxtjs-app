<template>
  <div class="container">
    <h1>疫情防控数据</h1>
    <el-table
      :data="list"
      border
      style="width: 100%">
      <el-table-column
        prop="country"
        label="国家"
        width="180">
      </el-table-column>
      <el-table-column
        prop="province"
        label="行政省"
        width="180">
      </el-table-column>
      <el-table-column
        prop="dead"
        label="死亡人数">
      </el-table-column>
      <el-table-column
        prop="confirmed"
        label="感染人数">
      </el-table-column>
      <el-table-column
        prop="suspected"
        label="疑似人数">
      </el-table-column>
      <el-table-column
        prop="cure"
        label="治愈">
      </el-table-column>
      <el-table-column
        prop="severe"
        label="重症">
      </el-table-column>
      <el-table-column
        prop="outside"
        label="境外输入">
      </el-table-column>
    </el-table>


    <div  class="pagination">
      <el-pagination
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
        :current-page="page"
        :page-sizes="[10, 20, 30, 50]"
        :page-size="pageSize"
        layout="total, sizes, prev, pager, next, jumper"
        background
        :total="total">
      </el-pagination>
    </div>

  </div>
</template>

<script>
  import {epidemic_pageQuery} from '@/api'
export default {
  layout:'default',
  data() {
    return {
        page: 1,
        pageSize: 10,
        total: 10,
        list:  []
    }
  },
  created() {
      this.findAll(this.page,this.pageSize);
  },
  methods:{
    // 查询
    async findAll(page,pageSize){
      const data = await epidemic_pageQuery({page,pageSize})
      this.list = data.data.list;
      this.total = data.data.total

    },
    //分页查询
    handleSizeChange(val) {
      this.pageSize = val
      this.findAll(this.page,this.pageSize)
    },
    handleCurrentChange(val) {
      this.page = val
      this.findAll(this.page,this.pageSize)
    },


  },
}
</script>

<style scoped>
.container {
  padding: 15px;
  min-height: 87vh;
}
.pagination::before,
.pagination::after{
  content: '';
  display: table;
  clear: both;
}
  .el-pagination{
    float: right;
    margin: 10px;
  }
</style>
