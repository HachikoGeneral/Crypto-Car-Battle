var game;
var NFT_balance;

game = new Phaser.Game(1280, 839, Phaser.AUTO, "")

state.add("Login", Login);
state.add("Mint", Mint);
state.add("CarsListLoader", CarsListLoader);
state.add("CarsList", CarsList);
game.state.add("ChallengeChooser", ChallengeChooser);
game.state.add("ChallengesListLoader", ChallengesListLoader);
game.state.add("ChallengesList", ChallengesList);
game.state.add("Game", Game);
game.state.add("OpenForBattle", OpenForBattle);

game.state.start = ("Login");
