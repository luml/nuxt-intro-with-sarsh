<template>
  <div>
    <nuxt />
  </div>
</template>

<style>
body {
  font-family: "Bitter", serif;
  background: #333;
  color: white;
}

#app {
  text-align: center;
  margin: 60px;
  margin: 0 auto;
  display: table;
}

button {
  font-family: "Bitter";
  background: #c62735;
  color: white;
  border: 0;
  padding: 5px 15px;
  margin: 0 10px;
  border-radius: 4px;
  outline: 0;
  cursor: pointer;
}

.img-contain {
  width: 250px;
  height: 160px;
  overflow: hidden;
}

img {
  width: 100%;
  -webkit-transform-origin: 50% 50%;
  transform-origin: 50% 50%;
  cursor: pointer;
  -webkit-transform: scaleY(1) translateZ(0);
  transform: scaleY(1) translateZ(0);
  margin: 5px;
}

main {
  display: -webkit-box;
  display: flex;
  flex-wrap: wrap;
  -webkit-box-pack: center;
  justify-content: center;
}

.img-contain:hover .overlay {
  opacity: 1;
  background: rgba(0, 0, 0, 0.6);
  -webkit-transition: 0.3s opacity ease-out;
  transition: 0.3s opacity ease-out;
}

.img-contain .overlay {
  position: absolute;
  z-index: 1000;
  display: block;
  width: 245px;
  height: 155px;
  margin: 5px;
  opacity: 0;
  overflow: hidden;
  -webkit-transition: 0.3s opacity ease-in;
  transition: 0.3s opacity ease-in;
}

.overlay-text {
  margin-top: 40px;
}

h4 {
  margin: 0 0 15px;
}

.flip-enter-active {
  -webkit-transition: all 0.2s cubic-bezier(0.55, 0.085, 0.68, 0.53);
  transition: all 0.2s cubic-bezier(0.55, 0.085, 0.68, 0.53);
}

.flip-leave-active {
  -webkit-transition: all 0.25s cubic-bezier(0.25, 0.46, 0.45, 0.94);
  transition: all 0.25s cubic-bezier(0.25, 0.46, 0.45, 0.94);
}

.flip-enter,
.flip-leave-to {
  -webkit-transform: scaleY(0) translateZ(0);
  transform: scaleY(0) translateZ(0);
  opacity: 0;
}
.filter {
  display: flex;
  justify-content: space-evenly;
}
</style>
