<template>
  <div>
    <nuxt />
  </div>
</template>

<style>
body {
  background: #d1d3d4;
  font-family: "Bitter", serif;
}

.container {
  margin: 0 auto;
  display: -webkit-box;
  display: flex;
  width: 500px;
  -webkit-box-pack: center;
  justify-content: center;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  flex-direction: column;
  -webkit-box-align: center;
  align-items: center;
}

.books {
  width: 500px;
}

.booktext {
  white-space: pre-line;
  word-break: break-all;
  position: absolute;
  font-size: 14px;
  width: 80px;
  height: 110px;
  -webkit-transform: translate(-35px, 180px) skew(-7deg) rotate(-5deg);
  transform: translate(-35px, 180px) skew(-7deg) rotate(-5deg);
}

.submit {
  color: white;
  border-radius: 3px;
  border: none;
  padding: 6px 8px;
  width: 100%;
  background: #ac2e3a;
  cursor: pointer;
  outline: none;
}

h3 {
  text-align: center;
}

textarea {
  color: #777;
  border: none;
  width: 80px;
  padding: 5px 10px;
  border-radius: 3px;
}
</style>
