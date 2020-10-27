module.exports = class Elevator{
  constructor(){
    this.currentStory = 0;
  }

  goUp(){
    this.currentStory++;
  }

  goDown(){
    this.currentStory--;
  }
}
