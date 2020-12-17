
var app = new Vue({
   el:"#app",
   data: {
      discs: []
   },
   methods: {

   },
   mounted: function() {
      axios
      .get("https://flynn.boolean.careers/exercises/api/array/music")
      .then((response) => {
         this.discs = response.data.response;
      })

   }

})
