<template>
  <div class="home">
    <Header />
    <div class="nav-list">
      <ly-tab
        v-model="selectedId"
        :items="items"
        :options="options"
        @change="changeFn"
      ></ly-tab>
      <div class="category-link" @click="toCategory">
        <i class="iconfont icon-fenlei"></i>
        <span>分类</span>
      </div>
    </div>
    <div style="height: 8.8rem"></div>
    <router-view></router-view>
    <Footer />
  </div>
</template>

<script>
// @ is an alias to /src
import Footer from "@/components/Footer.vue";
import Header from "@/components/Header.vue";

export default {
  name: "Home",
  components: {
    Footer,
    Header,
  },
  data() {
    //这里存放数据
    return {
      selectedId: 0,
      items: [
        {
          label: "首页",
        },
        {
          label: "家用电器",
        },
        {
          label: "男装女装",
        },
        {
          label: "鞋靴箱包",
        },
        {
          label: "手机数码",
        },
        {
          label: "电脑办公",
        },
        {
          label: "家具家访",
        },
        {
          label: "个人化妆",
        },
      ],
      options: {
        activeColor: "#fff", //设置选中的颜色
      },
      childrenRouter: [
        "/home/index",
        "/home/appliance",
        "/home/clothing",
        "/home/shoeBag",
        "/home/mobileDigital",
        "/home/computerOffice",
        "/home/householdTextile",
        "/home/personalMakeup",
      ],
    };
  },
  methods: {
    changeFn(item, index) {
      this.$router.push(this.childrenRouter[index]);
    },
    toCategory() {
      this.$router.push("/category/858");
    },
  },
};
</script>
<style lang="less" >
.home {
  .nav-list {
    display: flex;
    position: fixed;
    left: 0;
    top: 4.4rem;
    z-index: 99;
    .ly-tab {
      width: 85%;
      .ly-tabbar {
        background: red;
        border: 0;
        box-shadow: 0 0px 0px 0px #eee;
        .ly-tab-list {
          padding: 0;
          height: 4.4rem;
        }
        a {
          color: #fff;
        }
      }
    }
    .category-link {
      background: red;
      width: 15%;
      line-height: 4.4rem;
      text-align: center;
      color: #fff;
      height: 4.4rem;
      i {
        font-size: 1.6rem;
        padding-left: 5px;
        box-shadow: -6px 0 4px -4px rgba(0, 0, 0, 0.4);
      }
      span {
        font-size: 1.4rem;
      }
    }
  }
}
</style>