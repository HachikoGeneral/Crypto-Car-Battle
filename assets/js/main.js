var game;
var NFT_balance;
var bootState = { 
create: function () {
game = new Phaser.Game(1280, 839, Phaser.AUTO, "")

game.state.load("Login", Login);
game.state.load("Mint", Mint);
game.state.load("CarsListLoader", CarsListLoader);
game.state.load("CarsList", CarsList);
game.state.load("ChallengeChooser", ChallengeChooser);
game.state.load("ChallengesListLoader", ChallengesListLoader);
game.state.load("ChallengesList", ChallengesList);
game.state.load("Game",Game);
game.state.load("OpenForBattle", OpenForBattle);

game.state.start = ("Login");
