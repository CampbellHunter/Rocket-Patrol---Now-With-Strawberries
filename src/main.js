//Name: Campbell Hunter
//Rocket Patrol II: Now With Strawberries
//6 Hours
//New Enemy Type - 5 Points
//Two Player Mode - 5 Points
//Timing/Scoring Mechenism - 5 Points
//Particle Emitter - 5 Point
//Citation: https://docs.phaser.io/api-documentation/class/gameobjects-particles-particleemitter

let config = {
    type: Phaser.AUTO,
    width: 640,
    height: 480,
    scene: [ Menu, Play ]
  }

let game = new Phaser.Game(config)
let keyFIRE, keyRESET, keyLEFT, keyRIGHT, keyDOWN
let borderUISize = game.config.height / 15
let borderPadding = borderUISize / 3