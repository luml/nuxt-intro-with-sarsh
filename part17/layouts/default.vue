<template>
  <div>
    <nuxt />
  </div>
</template>

<style>
body {
  background-color: black;
  font-family: "Montserrat", sans-serif;
  font-size: 12px;
}

.winebottle {
  height: 600px;
  margin-left: 15px;
}

.container {
  max-width: 900px;
  margin: 40px auto;
}

.button-row {
  margin: 0 0 20px;
}

h4 {
  text-transform: uppercase;
  letter-spacing: 0.08em;
  margin: 10px 0 5px 5px;
}

button {
  background: white;
  border: 2px solid black;
  font-family: "Montserrat", sans-serif;
  padding: 5px 12px;
  border-radius: 1000px;
  font-size: 12px;
  cursor: pointer;
  margin: 5px 5px 5px 0;
  -webkit-transition: 0.2s all ease-in;
  transition: 0.2s all ease-in;
  outline: none;
}

button:hover {
  background: #eee;
  -webkit-transition: 0.2s all ease-out;
  transition: 0.2s all ease-out;
}

main {
  width: calc(38% - 40px);
  float: left;
  padding: 20px;
  background: #e8e5e5;
  display: -webkit-box;
  display: flex;
  -webkit-box-align: center;
  align-items: center;
}

aside {
  background: #aba8a8;
  width: calc(60% - 40px);
  float: left;
  padding: 20px;
}

input {
  font-family: "Montserrat", sans-serif;
  border: 1px solid black;
  padding: 5px 12px;
  border-radius: 5px;
  width: 90%;
  margin: 10px 5px;
  font-size: 13px;
  outline: none;
  color: #aaa;
}

input[type="color"] {
  width: 15%;
  padding: 1px 3px;
}

.wine-text {
  text-align: center;
}

.flourish {
  -webkit-transform: translateY(2px);
  transform: translateY(2px);
}

.label {
  /* background: url("geo.png"); */
}

/* -- slider --*/
.v-range-slider {
  display: -webkit-box;
  display: flex;
  -webkit-box-align: center;
  align-items: center;
  padding: 2px 11px;
}

.v-range-slider input[type="range"] {
  -webkit-appearance: none;
  -webkit-box-flex: 1;
  flex: 1;
  display: block;
  overflow: hidden;
  margin: 5px 0 10px -5px;
  padding: 8px 1px 8px;
  box-sizing: border-box;
  outline: none;
  background: none;
  border: none;
  -webkit-tap-highlight-color: transparent;
}

.v-range-slider input::-webkit-slider-runnable-track {
  position: relative;
  height: 2px;
  background: #ddd;
  border: none;
  border-radius: 3px;
}

.v-range-slider input::-webkit-slider-thumb {
  -webkit-appearance: none;
  position: relative;
  margin-top: -7px;
  cursor: pointer;
  width: 15px;
  height: 15px;
  border: 0;
  border-radius: 50%;
  background: white;
  box-shadow: 0 0 2px rgba(0, 0, 0, 0.4);
}

.v-range-slider input::-webkit-slider-thumb:before {
  position: absolute;
  display: inline-block;
  content: "";
  top: 7px;
  left: -2001px;
  width: 2000px;
  height: 2px;
}

/* these are styles that would exist in style scoped in the actual application */
.black .label {
  fill: black;
}

.black .bottle,
.black .wine-text {
  fill: white;
}

.black .flor {
  fill: #ccc;
}

.black .bkimg {
  -webkit-filter: url(#inverse);
  filter: url(#inverse);
}

/*---*/
.white .label {
  fill: white;
}

.white .bottle,
.white .wine-text {
  fill: black;
}

.white .flor {
  fill: #444;
}

/* end scoped */
@media only screen and (max-width: 800px) {
  main {
    width: 90% !important;
    display: -webkit-box;
    display: flex;
    -webkit-box-pack: center;
    justify-content: center;
  }

  aside {
    width: 90% !important;
    border-top: 2px solid black;
  }
}
@media only screen and (min-width: 800px) {
  .container {
    display: -webkit-box;
    display: flex;
  }

  aside {
    border-left: 2px solid black;
  }
}
</style>
