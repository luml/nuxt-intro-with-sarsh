<template>
  <div>
    <nuxt />
  </div>
</template>

<style>
body {
  font-family: "Roboto Mono", serif;
  display: -webkit-box;
  display: flex;
  -webkit-box-pack: center;
  justify-content: center;
}

#app {
  text-align: center;
  margin: 60px;
  max-width: 370px;
  display: -webkit-box;
  display: flex;
  -webkit-box-pack: center;
  justify-content: center;
  -webkit-box-align: center;
  align-items: center;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  flex-direction: column;
}

button {
  font-family: "Roboto Mono";
  border: 2px solid black;
  background: white;
  padding: 10px 15px;
  margin: 0 10px;
  outline: 0;
  width: 60%;
  cursor: pointer;
}

h4 {
  margin: 0 0 15px;
}

.modal {
  background: cyan;
  color: black;
  padding: 20px;
  width: 200px;
  position: absolute;
}
</style>
