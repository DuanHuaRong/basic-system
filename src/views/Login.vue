<template>
  <div class="login-wrap">
    <div class="login-content">
      <div>
        <h2 class="ms-title">欢迎回来</h2>
        <el-form
          :model="param"
          :rules="rules"
          ref="login"
          label-width="0px"
          style="width: 100%"
        >
          <el-form-item prop="userName">
            <el-input v-model="param.userName" placeholder="用户名">
              <el-button slot="prepend" icon="el-icon-lx-people"></el-button>
            </el-input>
          </el-form-item>
          <el-form-item prop="passWord">
            <el-input
              placeholder="密码"
              type="password"
              v-model="param.passWord"
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
  name:'login',
  data: function () {
    return {
      param: {
        userName: "",
        passWord: "",
      },
      loading: false,
      rules: {
        userName: [{ required: true, message: "请输入用户名", trigger: "blur" }],
        passWord: [
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
          let { userName, passWord } = this.param;
          if (userName === "admin" && passWord === "admin") {
            this.$store.commit('updateData',this.param)
            this.$router.push({
              name: "index",
            });
          } else {
            this.$router.push({
              name: "error",
            });
          }
        } else {
          this.$message.error("请输入用户名和密码");
        }
      });
    },
  },
};
</script>

<style lang="less" scoped>
.login-wrap {
  height: 100%;
  width: 100%;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  justify-content: center;
}
.login-content {
  display: flex;
  margin: 0 auto;
  padding: 20px 45px 45px;
  background-color: #fff;
  animation-name: bounceInDown;
  animation-duration: 1s;
  animation-fill-mode: both;
  width: 350px;
  border-radius: 8px;
  box-shadow: 1px 0px 3px 0px @basicColor;
  & > div {
    width: 100%;
  }
}
/deep/ .el-input__inner {
  border-color: @basicColor;
}
/deep/ .el-input-group__prepend {
  border-color: @basicColor;
}
.ms-title {
  color: @basicColor;
}
// @-webkit-keyframes
@keyframes bounceInDown {
  0%,
  60%,
  75%,
  90%,
  to {
    -webkit-animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
    animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
  }
  0% {
    opacity: 0;
    -webkit-transform: translate3d(0, -3000px, 0);
    transform: translate3d(0, -3000px, 0);
  }
  60% {
    opacity: 1;
    -webkit-transform: translate3d(0, 25px, 0);
    transform: translate3d(0, 25px, 0);
  }
  75% {
    -webkit-transform: translate3d(0, -10px, 0);
    transform: translate3d(0, -10px, 0);
  }
  90% {
    -webkit-transform: translate3d(0, 5px, 0);
    transform: translate3d(0, 5px, 0);
  }
  to {
    -webkit-transform: none;
    transform: none;
  }
}
</style>
