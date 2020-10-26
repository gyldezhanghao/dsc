<template>
  <div class="mine">
    <div v-if="!userInfo.user_id">
      <SelectLogin />
    </div>
    <h2>{{ userInfo.user_name }}</h2>
    <Footer />
  </div>
</template>

<script>
// @ is an alias to /src
import Footer from "@/components/Footer.vue";
import SelectLogin from "../Login/SelectLogin";

export default {
  name: "Mine",
  components: {
    Footer,
    SelectLogin,
  },
  computed: {
    userInfo() {
      return this.$store.state.userInfo;
    },
  },
};
</script>