var game;
var NFT_balance;

//new game instance
game = new Phaser.Game(1280, 839, Phaser.AUTO, "");

game.state.add("Mint", Mint);
game.state.add("ChallengeChooser", ChallengeChooser);
game.state.add("Game", Game);
game.state.add("OpenForBattle", OpenForBattle);

game.state.start("Login");
