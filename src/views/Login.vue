<template>
  <div class="loginWrapper">
    <el-form
      :model="loginForm"
      class="loginForm"
      autocomplete="on"
      label-position="left"
    >
      <div class="titleWrapper">
        <h3 class="title">LOGIN</h3>
      </div>
      <div class="contentWrapper">
        <el-form-item>
          <el-input
            v-model="loginForm.username"
            placeholder="用户名"
            prefix-icon="el-icon-user"
          >
          </el-input>
        </el-form-item>
        <el-form-item>
          <el-input
            v-model="loginForm.password"
            placeholder="密码"
            prefix-icon="el-icon-key"
          ></el-input>
        </el-form-item>

        <el-button type="primary" style="width: 100%; margin-bottom: 30px"
          >登录</el-button
        >
        <div class="forgetPassword">忘记密码</div>
      </div>
    </el-form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      loginForm: {
        username: "",
        password: "",
      },
    };
  },
  methods: {
    onSubmit() {
      console.log("submit!");
    },
  },
};
</script>
<style lang="less">
/* 修复input 背景不协调 和光标变色 */
/* Detail see https://github.com/PanJiaChen/vue-element-admin/pull/927 */

@bg: #283443;
@light_gray: #fff;
@cursor: #fff;

/* reset element-ui css */
.loginWrapper {
  .el-input {
    display: inline-block;
    height: 47px;
    width: 85%;
    padding-left: 20px;

    input {
      background: transparent;
      border: 0px;
      -webkit-appearance: none;
      border-radius: 0px;
      padding: 12px 5px 12px 15px;
      color: @light_gray;
      height: 47px;
      caret-color: @cursor;

      &:-webkit-autofill {
        box-shadow: 0 0 0px 1000px @bg inset !important;
        -webkit-text-fill-color: @cursor !important;
      }
    }
  }

  .el-form-item {
    border: 1px solid rgba(255, 255, 255, 0.1);
    background: rgba(0, 0, 0, 0.1);
    border-radius: 5px;
    color: #454545;
  }
}
</style>

<style lang="less" scoped>
@bg: #2d3a4b;
@dark_gray: #889aa4;
@light_gray: #eee;

.loginWrapper {
  position: absolute;
  top: 0;
  bottom: 0;
  width: 100%;
  background-color: @bg;
  .loginForm {
    width: 520px;
    max-width: 100%;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -70%);
    .titleWrapper {
      color: @light_gray;
      text-align: center;
      padding-top: 20px;
      margin-bottom: 40px;
      font-size: 26px;
    }
    .contentWrapper {
      .forgetPassword {
        padding-right: 10px;
        font-size: 12px;
        color: @light_gray;
        text-align: right;
      }
      .forgetPassword:hover {
        color: #76b1f9;
        cursor: pointer;
      }
    }
  }
}
</style>