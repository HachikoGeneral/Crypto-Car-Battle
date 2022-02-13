var game;
var NFT_balance;

//new game instance
game = new Phaser.Game(1280, 839, Phaser.AUTO, "");

game.add("Login", Login);
game.add("Mint", Mint);
game.add("CarsListLoader", CarsListLoader);
game.add("CarsList", CarsList);
game.add("ChallengeChooser", ChallengeChooser);
game.add("ChallengesListLoader", ChallengesListLoader);
game.add("ChallengesList", ChallengesList);
game.add("Game", Game);
game.add("OpenForBattle", OpenForBattle);

game.state.start("Login");
