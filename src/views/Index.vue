<template>
  <div class="index">
    <h1>登录成功</h1>
    <div class="content">您登录的账号为：{{userData.userName}}。密码:{{userData.passWord}}</div>
    <div style="width: 200px; margin: 0 auto">
      <el-button @click="$router.go(-1)">重新登录</el-button>
    </div>
  </div>
</template>
<script>

export default {
  name: 'index',
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
}
</script>
<style lang="less" scoped>
.index{text-align: center;}
h1 {
  color: @basicColor;
}
.content{
  height:60px;
  line-height:60px
}
</style>
