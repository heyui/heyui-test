<style lang='less'>
</style>
<template>
  <div id="app">
    <p>
      <i-radiogroup v-model="animal">
        <i-radio label="金斑蝶"></i-radio>
        <i-radio label="爪哇犀牛"></i-radio>
        <i-radio label="印度黑羚"></i-radio>
    </i-radiogroup>
      <h-button @click="tip">点我</h-button>
    </p>
    <p>
      <h-dropdownmenu :datas="['菜单1','菜单2']" @click="menuTip" button>菜单</h-dropdownmenu>
    </p>
  </div>
</template>
<script>
export default {
  data() {
    return {
      animal: '金斑蝶'
    };
  },
  mounted() {
  },
  methods: {
    menuTip(key) {
      this.$Message(key);
    },
    tip() {
      this.$Message('测试');
    }
  },
  computed: {

  }
};
</script>
