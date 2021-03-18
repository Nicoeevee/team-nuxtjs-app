<template>
  <div class="container">
    <h1>疫情防控数据</h1>
    <el-table
      :data="tableData"
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
        prop="cure"
        label="嫌疑人数">
      </el-table-column>
    </el-table>

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
</template>

<script>
  import {epidemic_pageQuery} from '@/api'
export default {
  layout:'default',
  data() {
    return {
      page: 1,
      pageSize: 10,
      total: 0,
      tableData: [],
    }
  },
  created() {
      this.findAll(this.page,this.pageSize);
  },
  methods:{
    // 查询
    async findAll(page,pageSize){
      const data = await epidemic_pageQuery({page,pageSize})
      this.tableData = data.data.list;
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
.el-pagination{
  float: right;
  margin: 10px;
}
</style>
