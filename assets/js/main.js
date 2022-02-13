var game;
var NFT_balance;
var bootState = { 
create: function () {
game.physics.startSystem(Phaser, Physics, ARCADE);

game.state.add("Login", Login);
game.state.add("Mint", Mint);
game.state.add("CarsListLoader", CarsListLoader);
game.state.add("CarsList", CarsList);
game.state.add("ChallengeChooser", ChallengeChooser);
game.state.add("ChallengesListLoader", ChallengesListLoader);
game.state.add("ChallengesList", ChallengesList);
game.state.add("Game",Game);
game.state.add("OpenForBattle", OpenForBattle);

game.state.start("Login");
   }
};
