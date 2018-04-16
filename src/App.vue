<template>
  <div id="app" class="container">
    <h3>{{title}}</h3>
    <table class="table table-striped table-sm" v-cloak>
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">Driver</th>
      <th scope="col">Points</th>
      <th scope="col">Team</th>
    </tr>
  </thead>
  <tbody>
    <tr v-for="driver in driversJson.list">
      <td>{{driver.id}}</td>
      <td>{{driver.nick}}</td>
      <td>{{driver.points}}</td>
      <td>{{driver.team}}</td>
    </tr>
  </tbody>
    </table>
  </div>
</template>

<script>
import json from "./assets/drivers";
import BootstrapVue from 'bootstrap-vue'
//Vue.use(BootstrapVue);
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';

export default {
  name: "app",
  data() {
    return {
      title: "F1LINE Leaderboard",
      driversJson: json,
    };
  },
  mounted: function() {
    var self = this;
    console.log(self.driversJson);
  }
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

h1,
h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
