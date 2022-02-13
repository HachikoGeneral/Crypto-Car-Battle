var game;
var NFT_balance;

//new game instance
game = new Phaser.Game(1280, 839, Phaser.AUTO, "");

game.state("Login", Login);
game.state("Mint", Mint);
game.state("CarsListLoader", CarsListLoader);
game.state("CarsList", CarsList);
game.state("ChallengeChooser", ChallengeChooser);
game.state("ChallengesListLoader", ChallengesListLoader);
game.state("ChallengesList", ChallengesList);
game.state("Game", Game);
game.state("OpenForBattle", OpenForBattle);

game.state.start("Login");
