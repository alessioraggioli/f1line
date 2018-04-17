//import json from "./assets/drivers";

$(function () {
  new Vue({
    el: "#app",
    data() {
      return {
        title: "F1LINE Leaderboard",
        driversJson: {
          list: [
            { id: "1", nick: "Peppe46", points: "0", team: "Force India" },
            { id: "2", nick: "Francesco", points: "0", team: "Force India" },
            { id: "3", nick: "Grevir", points: "0", team: "Mercedes" },
            { id: "4", nick: "Haspen", points: "0", team: "Ferrari" },
            { id: "5", nick: "FakeMrJKL", points: "0", team: "Ferrari" },
            { id: "6", nick: "Valdestroyer", points: "0", team: "Haas" },
            { id: "7", nick: "Dragonarium", points: "0", team: "Haas" },
            { id: "8", nick: "Kyuss", points: "0", team: "Renault" },
            { id: "9", nick: "Baldo", points: "0", team: "Renault" },
            { id: "10", nick: "Nutella", points: "0", team: "Sauber" },
            { id: "11", nick: "Erc", points: "0", team: "Mclaren" },
            { id: "12", nick: "GT-Mclaren", points: "0", team: "Mclaren" },
            { id: "13", nick: "Bymax73", points: "0", team: "Red bull" },
            { id: "14", nick: "Jorge", points: "0", team: "Red Bull" }
          ]
        }
      };
    },
    mounted: function () {
      var self = this;
      console.log(self.driversJson);
    }
  });
});
