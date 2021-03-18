<template>
  <div class="container">
    <h1>在这里瞎写</h1>
  </div>
  <!--  <el-container style="height: 500px; border: 1px solid #eee">-->
  <!--    <el-container>-->
  <!--      <el-header style="text-align: right; font-size: 12px">-->
  <!--        <el-dropdown>-->
  <!--          <i class="el-icon-setting" style="margin-right: 15px"></i>-->
  <!--          <el-dropdown-menu slot="dropdown">-->
  <!--            <el-dropdown-item>View</el-dropdown-item>-->
  <!--            <el-dropdown-item>Add</el-dropdown-item>-->
  <!--            <el-dropdown-item>Delete</el-dropdown-item>-->
  <!--          </el-dropdown-menu>-->
  <!--        </el-dropdown>-->
  <!--        <span>Tom</span>-->
  <!--      </el-header>-->

  <!--      <el-main>-->
  <!--        <el-table :data="tableData">-->
  <!--          <el-table-column prop="date" label="Date" width="140">-->
  <!--          </el-table-column>-->
  <!--          <el-table-column prop="name" label="Name" width="120">-->
  <!--          </el-table-column>-->
  <!--          <el-table-column prop="address" label="Address">-->
  <!--          </el-table-column>-->
  <!--        </el-table>-->
  <!--      </el-main>-->
  <!--    </el-container>-->
  <!--  </el-container>-->
</template>
<style>
.container {
  padding-top: 8px;
  margin: auto;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  text-align: center;
}
</style>

<script>
export default {
  layout: 'default',
  data() {
    const item = {
      date: '2016-05-02',
      name: 'Tom',
      address: 'No. 189, Grove St, Los Angeles'
    };
    return {
      tableData: Array(20).fill(item)
    }
  }
};
</script>
