<template>
  <div class="slds-scope">
    <Header />
    <div class="myapp slds-m-horizontal_large">
      <Search />
      <List />
    </div>
  </div>
</template>

<script>
import Header from "@/components/Header";
import Search from "@/components/Search";
import List from "@/components/List";
export default {
  name: "HomePage",
  components: {
    Header,
    Search,
    List
  },
};
</script>