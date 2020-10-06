<template>
  <div class="slds-grid slds-wrap">
    <div class="slds-col slds-size--1-of-2 slds-small-size--1-of-2 slds-medium-size--2-of-4" v-for="(repo, idx) in repositoriesData" :key="idx">
      <div class="slds-box slds-box_x-small slds-m-around--x-small">
        <article class="slds-card">
          <div class="slds-card__body slds-card__body_inner slds-grid slds-grid_align-center">
            <div class="slds-col slds-p-around_small slds-m-around_x-small">
              <div class="slds-media__body slds-m-bottom_small">
                <h2 class="slds-card__header-title slds-text-heading_large">
                  <strong>{{repo.full_name}}</strong>
                </h2>
                <div>
                  <ul
                    class="slds-list_horizontal slds-has-dividers_left slds-has-block-links_space"
                  >
                    <li class="slds-item">Criado por</li>
                    <li class="slds-item">
                      <strong>{{repo.owner.login}}</strong>
                    </li>
                    <li class="slds-item">{{repo.created_at}}</li>
                  </ul>
                </div>
              </div>
              <div class>
                <div>{{repo.description}}</div>
                <div class="slds-m-top_small">
                  <ul class="slds-list_horizontal">
                    <li class="slds-item slds-p-right_small">
                      <svg class="slds-button__icon" aria-hidden="true">
                        <use xlink:href="@/assets/icons/utility-sprite/svg/symbols.svg#favorite" />
                      </svg>
                      <span class="slds-p-left_xx-small">{{repo.stargazers_count}}</span>
                    </li>
                    <li class="slds-item slds-p-right_medium">
                      <svg class="slds-button__icon" aria-hidden="true">
                        <use xlink:href="@/assets/icons/utility-sprite/svg/symbols.svg#strategy" />
                      </svg>
                      <span class="slds-p-left_xx-small">{{repo.forks_count}}</span>
                    </li>
                    <li class="slds-item">
                      <small>Última atualização: {{repo.pushed_at}}</small>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div
              class="slds-col slds-text-align_center slds-col_align-center slds-col_justify-center"
            >
              <img
                alt="Person name"
                :src="repo.owner.avatar_url"
                title="User avatar"
                style="border-radius: 50%; width: 50%;"
              />
            </div>
          </div>
        </article>
      </div>
    </div>
  </div>
</template>

<script>
import RepositoriesService from '@/services/RepositoriesService'
export default {
  name: "List",
  components: {},
  data() {
    return {
      RepositoriesService: new RepositoriesService(),
      repositoriesData: [],
    };
  },
  mounted () {
    this.fetchRepositories()
  },
  methods: {
    fetchRepositories() {
      this.RepositoriesService.search('stars', 'desc', 1, null, 10)
        .then(response => { this.repositoriesData = response.items })
        .catch(error => { console.log(error) })
        .finally(() => {  })
    }
  }
}
</script>