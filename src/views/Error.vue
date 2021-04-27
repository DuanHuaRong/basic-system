<template>
  <div class="error">
    <h1>登录失败</h1>
    <div class="content">您登录的账号为：{{userData.userName}}。密码:{{userData.passWord}}</div>
    <div class="content">正确的账号和密码为：admin admin</div>
    <div style="width: 200px; margin: 0 auto">
      <el-button type="danger" @click="$router.go(-1)">重新登录</el-button>
    </div>
  </div>
</template>
<script>
export default {
  name: "error",
  data: function () {
    return {
      userData: {},
    };
  },
  mounted() {
    let userData=this.$store.state.userData;
    if(userData.userName){
      this.userData = userData;
    }else{
      this.$message.error('刷新之后没有用户信息，请重新登录');
      this.$router.go(-1)
    }
  },
};
</script>
<style lang="less" scoped>
.error{
  text-align: center;
}
h1 {
  color: #f56c6c;
}
.content{
  height:60px;
  line-height:60px
}
.el-button {
  width: 100%;
  border-radius: 30px;
  border: 1px solid rgba(235, 234, 234);
}
</style>
