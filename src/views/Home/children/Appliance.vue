<!-- 首页-家用电器 -->
<template>
  <div class="home-appliance">
    <List :lists="goodsLists" />
  </div>
</template>

<script>
//这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
//例如：import 《组件名称》 from '《组件路径》';
import List from "@/components/List.vue";
export default {
  //import引入的组件需要注入到对象中才能使用
  components: {
    List,
  },
  data() {
    //这里存放数据
    return {};
  },
  computed: {
    goodsLists() {
      return this.$store.state.goodsLists;
    },
  },
  mounted() {
    this.$store.dispatch("getGoodsList", { cat_id: 1106 });
  },
};
</script>
<style>
</style>