<template>
  <div class="error404">
    <!-- <div class="error404-body-con">
      <el-card class="box-card">
        <div class="error404-body-con-title">4 <span>0</span>4</div>
        <p class="error404-body-con-message">
          YOU&nbsp;&nbsp;LOOK&nbsp;&nbsp;LOST
        </p>
        <div class="error404-btn-con">
          <el-button
            @click="goHome"
            size="large"
            style="width: 200px;"
            type="text"
            >返回首页</el-button
          >
          <el-button
            @click="backPage"
            size="large"
            style="width: 200px;margin-left: 40px;"
            type="primary"
            >返回上一页</el-button
          >
        </div>
      </el-card>
    </div> -->
    <div class="error-body">
      <div class="number404">
        <div class="number4-1 "></div>
        <div class="number0 "></div>
        <div class="number4-2 "></div>
      </div>
      <!-- 线条 -->
      <span class="line1"></span>
      <span class="line2"></span>
      <span class="line3"></span>
      <span class="line4"></span>
      <!-- 左侧圆点 -->
      <div class="circle circle-left">
        <span class="circle1"></span>
        <span class="circle2"></span>
        <span class="circle3"></span>
        <span class="circle4"></span>
      </div>
      <!-- 右侧原点 -->
      <div class="circle circle-right">
        <span class="circle1"></span>
        <span class="circle2"></span>
        <span class="circle3"></span>
        <span class="circle4"></span>
      </div>
      <!-- 图片定位 -->
      <div class="pic pic1"></div>
      <!-- 文字 -->
      <div class="text">对不起，我迷路了，页面丢失了</div>
    </div>

    <div class="diamond">
      <div class="diamond-back"></div>
      <div class="diamond-front"></div>
      <span class="diamond-line"></span>
      <span class="diamond-arrow"></span>
      <span class="diamond-text" @click="backPage">返回上一级</span>
    </div>
  </div>
</template>

<script>
export default {
  name: "Error404",
  methods: {
    backPage() {
      this.$router.go(-1);
    },
    goHome() {
      this.$router.push({
        path: "/"
      });
    }
  }
};
</script>
<style lang="less" scoped>
@diamond-back-color: #fff;
@diamond-front-color: #1ba784;

@keyframes error404animation {
  0% {
    transform: rotateZ(0deg);
  }
  20% {
    transform: rotateZ(-60deg);
  }
  40% {
    transform: rotateZ(-10deg);
  }
  60% {
    transform: rotateZ(50deg);
  }
  80% {
    transform: rotateZ(-20deg);
  }
  100% {
    transform: rotateZ(0deg);
  }
}

@keyframes number0 {
  from {
    transform: rotate(0);
  }
  to {
    transform: rotate(360deg);
  }
}
// .error404 {
//   &-body-con {
//     width: 700px;
//     height: 500px;
//     position: absolute;
//     left: 50%;
//     top: 50%;
//     transform: translate(-50%, -50%);
//     &-title {
//       text-align: center;
//       font-size: 240px;
//       font-weight: 700;
//       color: #2d8cf0;
//       height: 260px;
//       line-height: 260px;
//       margin-top: 40px;
//       span {
//         display: inline-block;
//         color: #19be6b;
//         font-size: 230px;
//         animation: error404animation 3s ease 0s infinite alternate;
//       }
//     }
//     &-message {
//       display: block;
//       text-align: center;
//       font-size: 30px;
//       font-weight: 500;
//       letter-spacing: 12px;
//       color: #dddde2;
//     }
//   }
//   &-btn-con {
//     text-align: center;
//     padding: 20px 0;
//     margin-bottom: 40px;
//   }
// }
.error404 {
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100%;
  background-color: #2c3835;
  .error-body {
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 660px;
    height: 420px;
    background-image: url("../assets/error/bg.png");
    background-size: contain;
    box-shadow: 0px 0px 0px 10px #1ba784;
    transform: translateY(50%);
    .number404 {
      display: flex;
      width: 360px;
      height: 186px;
      .number4-1 {
        background-image: url("../assets/error/number4.png");
        width: 110px;
        height: 144px;
        background-size: cover;
      }
      .number0 {
        background-image: url("../assets/error/number0.png");
        width: 145px;
        height: 143px;
        background-size: cover;
        animation: number0 9s linear infinite;
      }
      .number4-2 {
        background-image: url("../assets/error/number4.png");
        width: 110px;
        height: 144px;
        background-size: cover;
      }
    }
    .line1 {
      position: absolute;
      top: 268px;
      left: 145px;
      transform: rotate(-53deg);
      width: 66px;
      height: 3px;
      background-color: #1ba784;
      animation: move-line 3s 0s linear infinite;
    }
    .line2 {
      position: absolute;
      top: 151px;
      left: 400px;
      transform: rotate(-53deg);
      width: 66px;
      height: 3px;
      background-color: #1ba784;
      animation: move-line 3s 3s linear infinite;
      // animation: move-line3 3s linear infinite alternate;
    }
    .line3 {
      position: absolute;
      top: 190px;
      left: 435px;
      transform: rotate(-53deg);
      width: 33px;
      height: 3px;
      background-color: #1ba784;
      animation: move-line 3s 2s linear infinite;
    }
    .line4 {
      position: absolute;
      top: 271px;
      left: 408px;
      transform: rotate(-53deg);
      width: 33px;
      height: 3px;
      background-color: #1ba784;
      animation: move-line 9s 1s linear infinite;
    }
    //
    .circle {
      position: absolute;
      width: 70px;
      height: 30px;
      display: flex;
      flex-wrap: wrap;
      justify-content: space-around;
      span {
        display: block;
        width: 6px;
        height: 6px;
        border-radius: 50%;
        margin-right: 30px;
        background-color: #ccc;
        transform: scale(1);
      }
      .circle1 {
        animation: point-flash 5s linear infinite;
      }
      .circle2 {
        margin: -6px;
        animation: point-flash 4s 1s linear infinite;
      }
      .circle3 {
        margin: -21px;
        animation: point-flash 2s 2s linear infinite;
      }
      .circle4 {
        margin: 15px;
        animation: point-flash 3s 3s linear infinite;
      }
    }
    //
    .circle-left {
      left: -100px;
      bottom: -30px;
    }
    .circle-right {
      right: -100px;
      top: 25%;
    }
    .pic {
      position: absolute;
      width: 50px;
      height: 50px;
    }
    .pic1 {
      left: -10px;
      bottom: 10%;
      background-image: url("../assets/error/pic1.png");
      background-size: contain;
    }
    .text {
      position: absolute;
      top: 75%;
      font-size: 16px;
      font-family: Microsoft YaHei;
      font-weight: 300;
      color: #1ba784;
      &::before {
        content: "";
        display: inline-block;
        width: 12px;
        height: 12px;
        border-radius: 50%;
        background-color: #1ba784;
        margin-right: 10px;
      }
      &::after {
        content: "";
        display: inline-block;
        width: 12px;
        height: 12px;
        border-radius: 50%;
        background-color: #1ba784;
        margin-left: 10px;
      }
    }
  }
}
@keyframes point-flash {
  0% {
    transform: scale(1);
  }
  25% {
    transform: scale(1.2);
  }
  50% {
    transform: scale(1);
  }
  75% {
    transform: scale(0);
  }
  100% {
    transform: scale(1);
  }
}
@keyframes move-line3 {
  from {
  }
  to {
    margin-left: 16px;
    margin-top: -20px;
  }
}
@keyframes move-line {
  0% {
    // transform: translateY(0) rotate(-53deg);
    margin-top: 0px;
  }
  25% {
    // transform: translateY(-50%) rotate(-53deg);
    margin-top: 10px;
  }
  50% {
    // transform:translateY(0) rotate(-53deg);
    margin-top: 0px;
  }
  75% {
    // transform: translateY(50%) rotate(-53deg);
    margin-top: -10px;
  }
  100% {
    // transform: translateY(0) rotate(-53deg);
    margin-top: 0px;
  }
}
// 菱形
.diamond {
  position: relative;
  top: 300px;
  left: -100px;
  .diamond-back {
    position: absolute;
    left: 0;
    top: 0;
    width: 210px;
    height: 60px;
    background-color: @diamond-back-color;
    &::before {
      content: "";
      border: 30px solid transparent;
      border-left-color: @diamond-back-color;
      position: absolute;
      left: 210px;
    }
    &::after {
      content: "";
      border: 30px solid transparent;
      border-right-color: @diamond-back-color;
      position: absolute;
      left: -60px;
    }
  }
  .diamond-front {
    position: absolute;
    left: 2px;
    top: 4px;
    width: 206px;
    height: 52px;
    background-color: @diamond-front-color;
    z-index: 1;
    cursor: pointer;
    &::before {
      content: "";
      border: 26px solid transparent;
      border-left-color: @diamond-front-color;
      position: absolute;
      left: 206px;
    }
    &::after {
      content: "";
      border: 26px solid transparent;
      border-right-color: @diamond-front-color;
      position: absolute;
      left: -52px;
    }

    &:hover {
      transition: 0.5s;
      background-color: rgb(16, 117, 16);
      &::before {
        border-left-color: rgb(16, 117, 16);
        transition: 0.5s;
      }
      &::after {
        border-right-color: rgb(16, 117, 16);
        transition: 0.5s;
      }
    }
  }
  .diamond-line {
    position: absolute;
    top: 28px;
    left: -55px;
    width: 320px;
    height: 4px;
    background: @diamond-back-color;
  }
  .diamond-arrow {
    position: absolute;
    top: 15px;
    left: -50px;
    width: 30px;
    height: 30px;
    border-left: 4px solid @diamond-back-color;
    border-bottom: 4px solid @diamond-back-color;
    transform: rotate(45deg);
  }
  .diamond-text {
    width: 100px;
    position: absolute;
    top: 18px;
    left: 60px;
    color: white;
    font-size: 16px;
    font-family: Microsoft YaHei;
    font-weight: bold;
    text-decoration: underline;
    z-index: 2;
    cursor: pointer;
  }
}
</style>
