<template>
  <div id="app">
    <div id="nav" class="text-center">
      <img src="./assets/good-boy.png">
    </div>
    <router-view/>
  </div>
</template>

<style lang="scss">
html{
  padding: 0px;
}
#app {
  font-family: 'Lato', sans-serif;
  color: #2c3e50;
}
body{
  margin: 0;
}
#nav {
  padding: 30px;
  background-color: #F5A623;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
