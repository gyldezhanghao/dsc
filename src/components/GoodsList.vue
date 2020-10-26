<!-- 商品列表 -->
<template>
  <div class="GoodsList">
    <div class="goods" v-for="value in GoodsListData" :key="value.goods_id">
      <div class="goodsImg">
        <img
          src="https://x.dscmall.cn/storage/images/201809/goods_img/_P_1536532330389.jpg"
          alt=""
        />
      </div>
      <p>{{ value.goods_name }}</p>
    </div>
  </div>
</template>

<script>
//这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
//例如：import 《组件名称》 from '《组件路径》';
import Axios from "axios";
export default {
  //import引入的组件需要注入到对象中才能使用
  components: {},
  data() {
    //这里存放数据
    return {
      GoodsListData: [],
    };
  },
  methods: {
    getCategoryRightDatas() {
      Axios.get(`/api/v1/category/goodslist?cat_id=1106`).then((res) => {
        console.log(res.data.data);
        // console.log(res);
        if (res.status == 200) {
          this.GoodsListData = res.data.data;
        }
      });
    },
  },
  mounted() {
    // console.log(this.$route);
    this.getCategoryRightDatas();
  },
};
</script>
<style lang="less">
.GoodsList {
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  .goods {
    width: 50%;
    .goodsImg {
      img {
        width: 100%;
        height: 10rem;
      }
    }
  }
}
</style>