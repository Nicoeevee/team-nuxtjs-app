<template>
  <div class="container">
    <h1>疫情防控数据</h1>
    <el-table
      :data="list"
      border
      style="width: 100%">
      <el-table-column
        label="国家"
        prop="country"
        width="180">
      </el-table-column>
      <el-table-column
        label="行政省"
        prop="province"
        width="180">
      </el-table-column>
      <el-table-column
        label="死亡人数"
        prop="dead">
      </el-table-column>
      <el-table-column
        label="感染人数"
        prop="confirmed">
      </el-table-column>
      <el-table-column
        label="疑似人数"
        prop="suspected">
      </el-table-column>
      <el-table-column
        label="治愈"
        prop="cure">
      </el-table-column>
      <el-table-column
        label="重症"
        prop="severe">
      </el-table-column>
      <el-table-column
        label="境外输入"
        prop="outside">
      </el-table-column>
    </el-table>
    <div class="pagination">
      <el-pagination
        :current-page="page"
        :page-size="pageSize"
        :page-sizes="[10, 20, 30, 50]"
        :total="total"
        background
        layout="total, sizes, prev, pager, next, jumper"
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange">
      </el-pagination>
    </div>

  </div>
</template>

<script>
import {epidemic_pageQuery} from '@/api'

export default {
  layout: 'default',
  data() {
    return {
      page: 1,
      pageSize: 10,
      total: 10,
      list: []
    }
  },
  created() {
    this.findAll(this.page, this.pageSize);
  },
  methods: {
    // 查询
    async findAll(page, pageSize) {
      const data = await epidemic_pageQuery({page, pageSize})
      this.list = data.data.list;
      this.total = data.data.total

    },
    //分页查询
    handleSizeChange(val) {
      this.pageSize = val
      this.findAll(this.page, this.pageSize)
    },
    handleCurrentChange(val) {
      this.page = val
      this.findAll(this.page, this.pageSize)
    },


  },
}
</script>

<style scoped>
.container {
  margin: auto;
  padding: 16px 32px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  text-align: center;
  width: 100%;
}

.pagination::before,
.pagination::after {
  content: '';
  display: table;
  clear: both;
}

.el-pagination {
  float: right;
  margin: 8px;
}
</style>
