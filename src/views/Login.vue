<template>
  <div class="login-wrap">
    <div class="login-content">
      <div class="ms-login">
        <div class="ms-title">接单系统</div>
        <el-form
          :model="param"
          :rules="rules"
          ref="login"
          label-width="0px"
          class="ms-content"
        >
          <el-form-item prop="user">
            <el-input v-model="param.user" placeholder="账号">
              <el-button slot="prepend" icon="el-icon-lx-people"></el-button>
            </el-input>
          </el-form-item>
          <el-form-item prop="pwd">
            <el-input
              placeholder="密码"
              type="password"
              v-model="param.pwd"
              @keyup.enter.native="submitForm()"
            >
              <el-button slot="prepend" icon="el-icon-lx-lock"></el-button>
            </el-input>
          </el-form-item>
          <div class="login-btn">
            <el-button @click="submitForm()" :loading="loading">登录</el-button>
          </div>
        </el-form>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data: function () {
    return {
      param: {
        user: "",
        pwd: "",
      },
      loading: false,
      rules: {
        user: [{ required: true, message: "请输入用户名", trigger: "blur" }],
        pwd: [
          { required: true, message: "请输入密码", trigger: "blur" },
          { min: 3, message: "密码长度最少为3位", trigger: "blur" },
        ],
      },
    };
  },
  methods: {
    submitForm() {
      this.$refs.login.validate((valid) => {
        if (valid) {
        
        } else {
          this.$message.error("请输入用户名和密码");
        }
      });
    },
  },
};
</script>

<style scoped>
.login-wrap {
  width: 100vw;
  height: 100vh;
  background-image: url(../assets/img/login-bg.jpg);
  background-size: 100% 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
}
.ms-title {
  width: 100%;
  line-height: 50px;
  text-align: center;
  font-size: 24px;
  color: #fff;
  border-bottom: 1px solid #ddd;
}
.login-content {
  display: flex;
  margin: 0 auto;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 1px 0px 5px 0px rgb(144, 122, 122);
}
.ms-login {
  width: 300px;
}
.login-logo {
  width: 300px;
  margin-right: 20px;
}
.ms-content {
  padding: 60px 30px;
}
.login-btn {
  text-align: center;
}
.login-btn button {
  width: 100%;
  height: 36px;
  margin-bottom: 10px;
}
.login-tips {
  font-size: 12px;
  line-height: 30px;
  color: #fff;
}
</style>
