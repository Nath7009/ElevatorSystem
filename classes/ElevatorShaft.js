var Elevator = require("./Elevator.js");

module.exports = class ElevatorShaft{

  constructor(nbStories){
    this.nbStories = nbStories;
    this.elevator = new Elevator();
  }

  call(story){
    if(story >= this.nbStories || story < 0){
      return -1
    }
    var diff = this.elevator.currentStory - story
    console.log(diff)
    if(diff > 0){ //Elevator needs to go down
      console.log("Going down")
      for(var i=0;i<diff;++i){
        this.elevator.goDown();
      }
    }
    else if(diff < 0){ //Elevator needs to go up
      console.log("Going up")
      for(var i=0;i<-diff;++i){
        this.elevator.goUp();
      }
    }
    return 1;
  }
}
