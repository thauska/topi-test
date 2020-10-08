<template>
  <div class="slds-grid slds-wrap">
    <div
      class="slds-col slds-size--1-of-1 slds-small-size--1-of-1 slds-medium-size--2-of-4"
      v-for="(repo, idx) in repositoriesData"
      :key="idx"
    >
      <div class="slds-box slds-box_x-small slds-m-around--x-small">
        <article class="slds-card">
            <div class="slds-card__body">
              <div
                class="slds-col slds-align_absolute-center"
              >
                <img
                  alt="Person name"
                  :src="repo.owner.avatar_url"
                  title="User avatar"
                  style="display: block; border-radius: 50%; width: 50%;"
                />
              </div>
            </div>
            <div class="slds-col slds-m-around_x-small">
              <div class="slds-media__body slds-m-vertical_small">
                <a :href="repo.html_url" style>
                  <h2 class="slds-card__header-title">
                    <strong>{{repo.full_name}}</strong>
                  </h2>
                </a>
                <div>
                  <ul
                    class="slds-col slds-grid slds-wrap slds-list_horizontal slds-has-dividers_left slds-has-block-links_space"
                  >
                    <li class="slds-item">Criado por</li>
                    <li class="slds-item">
                      <strong>{{repo.owner.login}}</strong>
                    </li>
                    <li class="slds-item">em: {{ formatDate(repo.created_at) }}</li>
                  </ul>
                </div>
              </div>
              <div class="slds-col slds-grid slds-wrap">
                <div>{{repo.description}}</div>
                <div class="slds-m-top_small">
                  <ul class="slds-list_horizontal">
                    <li class="slds-item slds-p-right_small">
                      <svg class="slds-button__icon" aria-hidden="true">
                        <use xlink:href="@/assets/icons/utility-sprite/svg/symbols.svg#favorite" />
                      </svg>
                      <span class="slds-p-left_xx-small">stars: {{repo.stargazers_count}}</span>
                    </li>
                    <li class="slds-item slds-p-right_medium">
                      <svg class="slds-button__icon" aria-hidden="true">
                        <use xlink:href="@/assets/icons/utility-sprite/svg/symbols.svg#strategy" />
                      </svg>
                      <span class="slds-p-left_xx-small">forks: {{repo.forks_count}}</span>
                    </li>
                    <li class="slds-item">
                      <small>Última atualização: {{ submittedDays(repo.pushed_at) }} dias atrás por {{ repo.owner.login }} </small>
                    </li>
                  </ul>
                </div>
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
      page: 1,
      language: 'JavaScript'
    };
  },
  mounted () {
    this.fetchRepositories()
  },
  methods: {
    fetchRepositories() {
      this.RepositoriesService.search('stars', 'desc', 1, this.language, 10)
        .then(response => {
          this.page += 1;
          this.repositoriesData.push(...response.items)
        })
        .catch(error => { console.log(error) })
    },
    submittedDays(date) {
				const today = new Date();
				const createdDate = new Date(date);
				const days = Math.floor((today-createdDate) / (1000 * 3600 * 24));
				return  days;
    },
    formatDate(date) {
      const created = new Date(date).toLocaleDateString('pt-BR');
      return created
    }
  },
}
</script>