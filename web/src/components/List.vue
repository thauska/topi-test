<template>
  <div>
    <article class="slds-card">
      <div class="slds-card__body slds-card__body_inner slds-grid slds-grid_align-center">
        <div class="slds-col slds-p-around_small slds-m-around_x-small">
          <a href="javascript:void(0);" class="slds-card__header-link" title="Accounts">
            <div class="slds-media__body slds-m-bottom_small">
              <h2 class="slds-card__header-title slds-text-heading_large">
                <strong>vue-jankenpon / thauska</strong>
              </h2>
              <div>
                <ul class="slds-list_horizontal slds-has-dividers_left slds-has-block-links_space">
                  <li class="slds-item">Criado por</li>
                  <li class="slds-item">
                    <strong>thauska</strong>
                  </li>
                  <li class="slds-item">Aug 22, 2020</li>
                </ul>
              </div>
            </div>
          </a>
          <div class>
            <div>Projeto construído seguindo curso prático da DIO - Recriando o tradicional jogo Pedra, Papel e Tesoura em Vue.js</div>
            <div class="slds-m-top_small">
              <ul class="slds-list_horizontal">
                <li class="slds-item slds-p-right_small">
                  <svg class="slds-button__icon" aria-hidden="true">
                    <use xlink:href="@/assets/icons/utility-sprite/svg/symbols.svg#favorite" />
                  </svg>
                  <span class="slds-p-left_xx-small">7</span>
                </li>
                <li class="slds-item slds-p-right_medium">
                  <svg class="slds-button__icon" aria-hidden="true">
                    <use xlink:href="@/assets/icons/utility-sprite/svg/symbols.svg#strategy" />
                  </svg>
                  <span class="slds-p-left_xx-small">3</span>
                </li>
                <li class="slds-item">
                  <small>Atualizado 2 dias atrás</small>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div class="slds-col slds-col_bump-left slds-grid_align-center">
          <img
            alt="Person name"
            src="https://avatars0.githubusercontent.com/u/8525721?s=460&u=12edbf1f91a587a5a62df48f0151c47d3dce1568&v=4"
            title="User avatar"
            style="border-radius: 50%; width: 50%;"
          />
        </div>
      </div>
    </article>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "List",
  data() {
    return {
      repo: [],
      errors: [],
    };
  },
  created() {
    axios
      .get(`https://api.github.com/search/repositories?q=language:Java&sort=stars&page=1`)
      .then((response) => {
        this.repo = response.data.items;
        console.log(this.repo);
      })
      .catch((e) => {
        this.errors.push(e);
      });
  },
};
</script>

<style>
</style>