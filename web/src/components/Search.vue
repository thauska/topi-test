<template>
  <div class="slds-form-element slds-m-top_medium">
    <div class="slds-form-element__control slds-input-has-icon slds-input-has-icon_left">
      <svg
        class="slds-icon slds-input__icon slds-input__icon_left slds-icon-text-default"
        aria-hidden="true"
      >
        <use xlink:href="@/assets/icons/utility-sprite/svg/symbols.svg#search" />
      </svg>
      <input
        type="text"
        id="text-input-id-1"
        v-model="search"
        placeholder="Procurar…"
        class="slds-input"
      />
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      search: "",
    }
  },
  computed: {
    filteredList() {
      return this.repositoriesData.filter((post) => {
        return post.title.toLowerCase().includes(this.search.toLowerCase());
      })
    }
  }
}
</script>

<style>
</style>