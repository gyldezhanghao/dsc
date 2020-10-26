<template>
  <div class="category">
    <CategoryHeader />
    <CategoryContent />
    <Footer />
  </div>
</template>

<script>
// @ is an alias to /src
import Footer from "@/components/Footer.vue";
import CategoryHeader from "./components/CategoryHeader.vue";
import CategoryContent from "./components/CategoryContent.vue";

export default {
  name: "Category",
  components: {
    Footer,
    CategoryHeader,
    CategoryContent,
  },
};
</script>