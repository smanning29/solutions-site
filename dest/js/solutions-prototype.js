
console.log("js initiated");

new Vue({
    el: '#app',
    data: {
        bgImgs: [
            "url(img/farm-biomass-1.jpg)",
            "url(img/farmland-2.jpg)"
                ],
            solutionIndex: 0
    },
    methods: {
        right: function () {
            console.log(this.bgImgs[this.solutionIndex]);
            this.solutionIndex++;
            if(this.solutionIndex == 2){
                this.solutionIndex = 0;
            } 
        },
        left: function () {
            console.log(this.bgImgs[this.solutionIndex]);
            this.solutionIndex--;
            if(this.solutionIndex == -1){
                this.solutionIndex = 1;
            } 
        }
    }
  })
  