
var app = new Vue({
   el:"#app",
   data: {
      discs: [],
      genres: [],
      selected: "All"
   },
   methods: {
      chooseGenre: function() {

      }
   },
   mounted: function() {
      // lista dischi
      axios
      .get("https://flynn.boolean.careers/exercises/api/array/music")
      .then((response) => {
         this.discs = response.data.response;
         this.discs.forEach(disc => {
            // unique genres
            if(!this.genres.includes(disc.genre)){
               this.genres.push(disc.genre);
            }
         })
      })
   }

})
