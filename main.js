
var app = new Vue({
   el:"#app",
   data: {
      discs: [],
      defaultDiscs: [],
      genres: [],
      selected: "All",
      buttonText: "Sort By Year",
      sorted: false
   },
   methods: {
      sortMe: function() {
         this.sorted = !this.sorted;

         if (this.sorted) {
            this.buttonText = "Show By Importance";
            this.discs.sort(function (a, b) {
              return a.year - b.year;
            });;

         } else {
            this.buttonText = "Sort By Year";
            this.discs = this.defaultDiscs.map(disc => disc);
            // this.discs.forEach(disc => console.log(disc.year));
         }


      }
   },
   mounted: function() {
      // lista dischi
      axios
      .get("https://flynn.boolean.careers/exercises/api/array/music")
      .then((response) => {
         this.discs = response.data.response;
         this.defaultDiscs = this.discs.map(disc => disc);
         this.discs.forEach(disc => {
            // unique genres
            if(!this.genres.includes(disc.genre)){
               this.genres.push(disc.genre);
            }
         })
      })
   }

})
