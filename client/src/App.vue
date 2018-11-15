<template>
  <div id="app">
    <keep-alive :include="componentName">
      <router-view></router-view>
    </keep-alive>
  </div>
</template>

<script>
export default {
  name: 'app',
  data () {
    return {
      componentName: []
    };
  }
};
</script>

<style lang="less">
</style>
