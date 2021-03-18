<template>
  <div>
    <h1>疫情防控数据</h1>
    <el-table
      :data="tableData.list"
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
      @size-change="handleSizeChange1"
      @current-change="handleCurrentChange1"
      :current-page="tableData.page"
      :page-sizes="[10, 20, 50, 100]"
      :page-size="tableData.pageSize" layout="total, sizes, prev, pager, next, jumper"
      :total="tableData.total">
    </el-pagination>
  </div>
</template>

<script>
  import {epidemic_pageQuery} from '@/api'
export default {
  layout:'default',
  data() {
    return {
      tableData: {
        page: 1,
        pageSize: 10,
        total: 10,
        list:  [{
        date: '2016-05-02',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1518 弄'
      }, {
        date: '2016-05-04',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1517 弄'
      }, {
        date: '2016-05-01',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1519 弄'
      }, {
        date: '2016-05-03',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1516 弄'
      }]
      }
    }
  },
  created() {
      this.findAll(1,10);
  },
  methods:{
    async findAll(page,pageSize){
      const data = await epidemic_pageQuery({page,pageSize})
      console.log(data)
      this.tableData=data.data;

    },
    handleSizeChange1: function(pageSize) { // 每页条数切换
      this.tableData.pageSize = pageSize
      this.handleCurrentChange1(this.tableData.page);
    },
    handleCurrentChange1: function(currentPage) {//页码切换
      this.tableData.page = currentPage
      this.currentChangePage(this.tableData.page)
    },
    //分页方法（重点）
    currentChangePage(list,currentPage) {
      let from = (currentPage - 1) * this.pageSize;
      let to = currentPage * this.pageSize;
      this.tempList = [];
      for (; from < to; from++) {
        if (list[from]) {
          this.tempList.push(list[from]);
        }
      }
    }
  },
}
</script>

<style scoped>

</style>
