import Phaser from 'phaser';

function preload() {
  this.load.image('battlebutton', 'assets/images/battlebutton.png');
  this.load.image('building', 'assets/images/building.png');
  this.load.image('carslistbg', 'assets/images/carslistbg.png');
  this.load.image('challengechooserbg', 'assets/images/challengechooserbg.png');
  this.load.image('challengeothersbutton', 'assets/images/challengeothersbutton.png');
  this.load.image('challengeslistbg', 'assets/images/challengeslistbg.png');
  this.load.image('checkwinnerbutton', 'assets/images/checkwinnerbutton.png');
  this.load.image('competeexisting', 'assets/images/competeexisting.png');
  this.load.image('createbattlebutton', 'assets/images/createbattlebutton.png');
  this.load.image('homebutton', 'assets/images/homebutton.png');
  this.load.image('homescreen', 'assets/images/homescreen.png');
  this.load.image('logo', 'assets/images/logo.png');
  this.load.image('map2', 'assets/images/map2.png');
  this.load.image('metamask-login', 'assets/images/metamask-login.png');
  this.load.image('metamasklogin', 'assets/images/metamasklogin.png');
  this.load.image('mintbg', 'assets/images/mintbg.png');
  this.load.image('mintbutton', 'assets/images/mintbutton.png');
  this.load.image('openforbattlebg', 'assets/images/openforbattlebg.png');
  this.load.image('transferbutton', 'assets/images/transferbutton.png');
  this.load.image('trigger1', 'assets/images/trigger1.png');
  this.load.spritesheet('cars', 'assets/images/cars.png',
    { frameWidth: 32, frameHeight: 48 });
}
function update() {
}

const config = {
    type: Phaser.AUTO,
  width: 800,
  height: 600,
  scene: {
    preload,
    create,
    update,
  },
};

// eslint-disable-next-line no-unused-vars
const game = new Phaser.Game(config);