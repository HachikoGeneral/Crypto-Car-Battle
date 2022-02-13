var game;
var NFT_balance;

//new game instance
game = new Phaser.Game(1280, 839, Phaser.AUTO, "");

game.get("Login", Login);
game.get("Mint", Mint);
game.get("CarsListLoader", CarsListLoader);
game.get("CarsList", CarsList);
game.get("ChallengeChooser", ChallengeChooser);
game.get("ChallengesListLoader", ChallengesListLoader);
game.get("ChallengesList", ChallengesList);
game.get("Game", Game);
game.get("OpenForBattle", OpenForBattle);

game.state.start("Login");
