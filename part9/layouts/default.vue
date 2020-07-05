<template>
  <div>
    <nuxt />
  </div>
</template>

<style>
body {
  font-family: "Roboto Mono", serif;
  display: flex;
  justify-content: center;
}

#app {
  text-align: center;
  margin: 60px;
  max-width: 370px;
  display: flex;
  justify-content: center;
  align-items: center;
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

h3 {
  margin: 0 0 15px;
}

.modal {
  background: cyan;
  color: black;
  padding: 20px;
  width: 150px;
  position: absolute;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.25s ease-out;
}

.fade-enter,
.fade-leave-to {
  opacity: 0;
}

.bk {
  transition: all 0.05s ease-out;
}

.blur {
  filter: blur(2px);
  opacity: 0.4s;
}
</style>
