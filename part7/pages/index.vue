<template>
  <section class="container">
    <div id="app">
      <section>
        <h1>🍺 Make yourself some Punk Beers 🍻</h1>
        <div v-if="beers.length === 0" class="loading">Loading...</div>
        <div v-for="beer in beers" class="beer-contain" :key="beer">
          <div class="beer-img">
            <img src="beer.img" alt="a beer pic" height="350" />
          </div>
          <div class="beer-info">
            <h2>{{ beer.name }}</h2>
            <p class="bright">{{ beer.tagline }}</p>
            <p><span class="bright">Description:</span> {{ beer.desc }}</p>
            <p><span class="bright">Tips:</span> {{ beer.tips }}</p>
            <h3 class="bright">Food Pairings</h3>
            <ul>
              <li v-for="item in beer.food" :key="item">
                {{ item }}
              </li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  </section>
</template>

<script>
import window from "window";
const axios = require("axios");

export default {
  components: {},
  data() {
    return {
      bottom: false,
      beers: []
    };
  },
  watch: {
    bottom(bottom) {
      if (bottom) {
        this.addBeer();
      }
    }
  },
  created() {
    window.addEventListener("scroll", () => {
      this.bottom = this.bottomVisible();
    });
    this.addBeer();
  },
  methods: {
    bottomVisible() {
      const scrollY = window.scrollY;
      const visible = document.documentElement.clientHeight;
      const pageHeight = document.documentElement.scrollHeight;
      const bottomOfPage = visible + scrollY >= pageHeight;
      return bottomOfPage || pageHeight < visible;
    },
    addBeer() {
      axios.get("https://api.punkapi.com/v2/beers/random").then(response => {
        let api = response.data[0];
        let apiInfo = {
          name: api.name,
          desc: api.description,
          img: api.image_url,
          tips: api.brewerrs_tips,
          tagline: api.tagline,
          food: api.food_pairinng
        };
        this.beers.push(apiInfo);
        if (this.bottomVisible()) {
          this.addBeer();
        }
      });
    }
  }
};
</script>

<style></style>
