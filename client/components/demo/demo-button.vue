<template>
  <div class="demo-button">
    <button @click="onClickGet">测试get请求</button>
    <br />
    <button @click="onClickPost">测试post请求</button>
  </div>
</template>

<script setup lang="ts">
import { demoGetTest, demoPostTest } from '../../api/demo';
async function onClickGet() {
  try {
    const data = await demoGetTest({
      nameGet: '名称',
    });
    console.log(data);
    alert('get请求正常');
  } catch (e) {
    console.err(e);
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
    console.err(e);
    alert('post请求异常');
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
