var game;
var NFT_balance;
//new game instance

function myFunc(add) {
  if (add === undefined) {
        console.log(add.not)
  }
  return add;
}
var add=99;    //initialize here
console.log(myFunc(add));
game = new Phaser.Game(1280, 839, Phaser.AUTO, "")

game.state.add("Login", Login);
game.state.add("Mint", Mint);
game.state.add("CarsListLoader", CarsListLoader);
game.state.add("CarsList", CarsList);
game.state.add("ChallengeChooser", ChallengeChooser);
game.state.add("ChallengesListLoader", ChallengesListLoader);
game.state.add("ChallengesList", ChallengesList);
game.state.add("Game", Game);
game.state.add("OpenForBattle", OpenForBattle);

game.state.start = ("boot");
