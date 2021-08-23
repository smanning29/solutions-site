var store = {
    debug: true,
    state: {
      solutionIndex: 0
    },
    setSolIndex (newIndex) {
      if (this.debug) console.log('setSolIndex triggered with', newIndex)
      this.state.setSolIndex = newIndex
    },
    left: function () {
        //console.log(this.bgImgs[this.state.solutionIndex]);
        console.log("store.js left");
        this.state.solutionIndex--;
        if(this.state.solutionIndex == -1){
            this.state.solutionIndex = 19;
        } 
    },
    right: function () {
        //console.log(this.bgImgs[this.solutionIndex]);
        console.log("store.js right");
        this.state.solutionIndex++;
        if(this.state.solutionIndex == 20){
            this.state.solutionIndex = 0;
        } 
    }
  }