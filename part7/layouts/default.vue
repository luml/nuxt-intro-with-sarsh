<template>
  <div>
    <nuxt />
  </div>
</template>

<style>
body {
  font-family: "Archivo Narrow", sans-serif;
  background: #25859a;
}

h1,
h2,
h3,
h4 {
  font-family: "Fjalla One", sans-serif;
}

h1 {
  margin-top: 40px;
  color: white;
  text-align: center;
}

.loading {
  color: white;
  text-align: center;
  font-size: 20px;
}

.display,
#app,
.beer-contain,
.beer-img {
  display: -webkit-box;
  display: flex;
  -webkit-box-pack: center;
  justify-content: center;
  align-content: center;
}

#app {
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  flex-direction: column;
}

.beer-contain {
  width: 50%;
  margin: 20px 24%;
  box-shadow: 0 2px 3px 1px rgba(30, 0, 0, 0.1);
}

.beer-img {
  padding: 30px;
  background: #ff6542;
  border: 1px solid #88498f;
  border-right: 1px solid #f44822;
}

.beer-info {
  background: #564154;
  color: white;
  padding: 30px;
  border: 1px solid #88498f;
}
.beer-info .bright {
  color: #fcd7cf;
  font-family: "Contrail One", sans-serif;
}

h3 {
  margin-bottom: 5px;
}

ul {
  margin-top: 5px;
}
</style>
