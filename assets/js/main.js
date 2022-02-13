var game;
var NFT_balance;

game = new Phaser.Game(1280, 839, Phaser.AUTO, "")

game.state.add("Login", Login);
game.state.add("Mint", Mint);
game.state.add("CarsListLoader", CarsListLoader);
game.state.add("CarsList", CarsList);
game.state.add("ChallengeChooser", ChallengeChooser);
game.state.add("ChallengesListLoader", ChallengesListLoader);
game.state.add("ChallengesList", ChallengesList);
game.state.add("Game",assets/js/game.js);
game.state.add("OpenForBattle", OpenForBattle);

game.state.start = ("Login");
