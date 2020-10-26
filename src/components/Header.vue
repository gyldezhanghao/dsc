<!-- 公共的头部-搜索栏 -->
<template>
  <div class="header">
    <div class="search">
      <div class="input">
        <input type="text" placeholder="搜索" />
      </div>
      <span class="iconfont icon-sousuo"></span>
    </div>
    <span class="iconfont icon-xinxi"></span>
  </div>
</template>

<script>
//这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
//例如：import 《组件名称》 from '《组件路径》';

export default {
  //import引入的组件需要注入到对象中才能使用
  components: {},
  data() {
    //这里存放数据
    return {};
  },
};
</script>
<style lang="less">
.header {
  width: 100%;
  height: 4.4rem;
  line-height: 4.4rem;
  display: flex;
  background: red;
  position: fixed;
  z-index: 99;
  .search {
    width: 85%;
    height: 4.4rem;
    padding-left: 1rem;
    position: relative;
    .input {
      width: 100%;
      height: 4.4rem;
      input {
        width: 100%;
        height: 2.2rem;
        border: 0.1rem solid #ccc;
        border-radius: 1.1rem;
        text-indent: 1em;
      }
    }
    .icon-sousuo {
      width: 0rem;
      height: 0rem;
      position: absolute;
      right: 3rem;
      top: 0rem;
    }
  }
  .icon-xinxi {
    margin-left: 0.5rem;
    font-size: 2.8rem;
    color: #fff;
  }
}
</style>