<template>
  <div class="slds-scope">
    <Header />
    <div class="myapp slds-m-horizontal_large">
      <List />
    </div>
  </div>
</template>

<script>
import Header from "@/components/Header";
import List from "@/components/List";
export default {
  name: "HomePage",
  components: {
    Header,
    List
  },
};
</script>