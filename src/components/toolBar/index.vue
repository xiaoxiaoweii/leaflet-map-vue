<template>
  <div class="tool_wrapper">
    <ul>
      <li
        v-for="(item, index) in $constants.toolList"
        :key="index"
        @click.stop="clickTool(item, index)"
      >
        <img :src="activeToolItem === index ? item.activeSrc : item.src" />
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  data() {
    return {
      // 工具栏激活项
      activeToolItem: Number,
    };
  },
  methods: {
    clickTool(item, index) {
      console.log(item, index);
      if (this.activeToolItem === index) {
        this.activeToolItem = -1;
        return;
      }
      this.activeToolItem = index;
    },
  },
};
</script>
<style lang="scss" scoped>
.tool_wrapper {
  width: auto;
  height: 50px;
  line-height: 42px;
  padding: 4px;
  z-index: 1000;
  position: absolute;
  top: 20px;
  right: 10px;
  background: #434344;
  border-radius: 5px;
  color: #ffffff;
  ul {
    display: flex;
    li {
      width: 40px;
      text-align: center;
      cursor: pointer;
      img {
        width: 38px;
        height: 38px;
      }
    }
  }
}
</style>
