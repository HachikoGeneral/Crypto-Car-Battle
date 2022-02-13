var game;
var NFT_balance;

//new game instance
game = new Phaser.Game(1280, 839, Phaser.AUTO, "");

game.state.get("Login", Login);
game.state.get("Mint", Mint);
game.state.get("CarsListLoader", CarsListLoader);
game.state.get("CarsList", CarsList);
game.state.get("ChallengeChooser", ChallengeChooser);
game.state.get("ChallengesListLoader", ChallengesListLoader);
game.state.get("ChallengesList", ChallengesList);
game.state.get("Game", Game);
game.state.get("OpenForBattle", OpenForBattle);

game.state.start("Login");
