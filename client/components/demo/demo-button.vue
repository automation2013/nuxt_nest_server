<template>
  <div class="demo-button">
    <button @click="onClickGet">测试get请求</button>
    <br />
    <button @click="onClickPost">测试post请求</button>
    <br />
    <button @click="onClickCookie">测试cookie</button>
    <br />
    <button @click="onClickSession">测试session</button>
    <br />
    <button @click="onClickHttpException">测试HttpException</button>
  </div>
</template>

<script setup lang="ts">
import {
  demoCookieSession,
  demoCookieTest,
  demoGetTest,
  demoHttpException,
  demoPostTest,
} from '../../api/demo';
async function onClickGet() {
  try {
    const data = await demoGetTest({
      nameGet: '名称',
    });
    console.log(data);
    alert('get请求正常');
  } catch (e) {
    console.error(e);
    alert('get请求异常');
  }
}

async function onClickPost() {
  try {
    const data = await demoPostTest({
      namePost: '名称',
    });
    console.log(data);
    alert('post请求正常');
  } catch (e) {
    console.error(e);
    alert('post请求异常');
  }
}

async function onClickCookie() {
  try {
    const data = await demoCookieTest();
    console.log(data);
    alert('cookie设置正常');
  } catch (e) {
    console.error(e);
    alert('cookie设置失败');
  }
}

async function onClickSession() {
  try {
    const data = await demoCookieSession();
    console.log(data);
    alert('session设置正常');
  } catch (e) {
    console.error(e);
    alert('session设置失败');
  }
}

async function onClickHttpException() {
  try {
    await demoHttpException();
  } catch (e) {
    console.error(e);
    alert('请通过控制台查看异常信息详情');
  }
}
</script>

<style lang="scss">
.demo-button {
  button {
    margin: 10px;
    padding: 5px;
    background: yellow;
    border-style: none;
    cursor: pointer;
  }
}
</style>
