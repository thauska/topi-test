<template>
  <div class="slds-scope">
    <Header />
    <div class="myapp slds-m-horizontal_large">
      <ButtonsGroup />
      <List />
    </div>
  </div>
</template>

<script>
import Header from "@/components/Header";
import List from "@/components/List";
import ButtonsGroup from "@/components/ButtonsGroup";
export default {
  name: "HomePage",
  components: {
    Header,
    List,
    ButtonsGroup,
  },
};
</script>