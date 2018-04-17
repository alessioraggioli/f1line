import Vue from 'vue'
import json from "./assets/drivers";

new Vue({
  el: "#app",
  name: "app",
  data() {
    return {
      title: "F1LINE Leaderboard",
      driversJson: json
    };
  },
  mounted: function() {
    var self = this;
    console.log(self.driversJson);
  }
});
