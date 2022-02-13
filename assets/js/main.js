var game;
var NFT_balance;

//new game instance
game = new Phaser.Game(1280, 839, Phaser.AUTO, "");

game = ("Login", Login);
game = ("Mint", Mint);
game = ("CarsListLoader", CarsListLoader);
game = ("CarsList", CarsList);
game = ("ChallengeChooser", ChallengeChooser);
game = ("ChallengesListLoader", ChallengesListLoader);
game = ("ChallengesList", ChallengesList);
game = ("Game", Game);
game = ("OpenForBattle", OpenForBattle);

game.state.start("Login");
