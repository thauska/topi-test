<template>
<div class="slds-col">
  <div class="slds-col slds-size_1-of-4">
    Último Ano
  </div>
  <div class="slds-col slds-size_3-of-4">
    <ul class="slds-button-group-row">
      <li class="slds-button-group-item">
        <div class="slds-dropdown-trigger slds-dropdown-trigger_clicked">
          <button
            class="slds-button slds-button_icon slds-button_icon-more"
            aria-haspopup="true"
            title="More Options"
          >
            <svg class="slds-button__icon" aria-hidden="true">
              <use xlink:href="@/assets/icons/utility-sprite/svg/symbols.svg#settings" />
            </svg>
            <span class="slds-assistive-text">More options</span>
            teste
          </button>
        </div>
      </li>
      <li class="slds-button-group-item slds-m-bottom_x-small">
        <div class="slds-dropdown-trigger slds-dropdown-trigger_clicked">
          <button
            class="slds-button slds-button_icon slds-button_icon-more"
            aria-haspopup="true"
            title="More Options"
          >
            <svg class="slds-button__icon" aria-hidden="true">
              <use xlink:href="@/assets/icons/utility-sprite/svg/symbols.svg#table" />
            </svg>
            <span class="slds-assistive-text">More options</span>
          </button>
        </div>
      </li>
      <li class="slds-button-group-item">
        <button class="slds-button slds-button_icon slds-button_icon-border-filled">
          <svg class="slds-button__icon" aria-hidden="true">
            <use xlink:href="@/assets/icons/utility-sprite/svg/symbols.svg#edit" />
          </svg>
          <span class="slds-assistive-text">Provide description of action</span>
        </button>
      </li>
      <li class="slds-button-group-item">
        <button class="slds-button slds-button_icon slds-button_icon-border-filled">
          <svg class="slds-button__icon" aria-hidden="true">
            <use xlink:href="@/assets/icons/utility-sprite/svg/symbols.svg#refresh" />
          </svg>
          <span class="slds-assistive-text">Provide description of action</span>
        </button>
      </li>
      <li class="slds-button-group-item">
        <div class="slds-button-group" role="group">
          <button class="slds-button slds-button_icon slds-button_icon-border-filled">
            <svg class="slds-button__icon" aria-hidden="true">
              <use xlink:href="@/assets/icons/utility-sprite/svg/symbols.svg#chart" />
            </svg>
            <span class="slds-assistive-text">Grid</span>
            Grid
          </button>
          <button class="slds-button slds-button_icon slds-button_icon-border-filled">
            <svg class="slds-button__icon" aria-hidden="true">
              <use xlink:href="@/assets/icons/utility-sprite/svg/symbols.svg#filter" />
            </svg>
            <span class="slds-assistive-text">List</span>
            List
          </button>
        </div>
      </li>
    </ul>
  </div>
</div>
</template>

<script>
export default {
    name: 'ButtonsGroup'
};
</script>

<style>
</style>