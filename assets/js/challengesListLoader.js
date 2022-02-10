var AllChallenges = [];
var temp777 = 0, temptotal, tempcounter=0;

var CarsListLoader = {
  preload: function () {
    contract.methods
      .balanceOf(web3.eth.defaultAccount)
      .call()
      .then(function (res) {
        tokenCount = res;
        for (var i = 0; i < tokenCount; i++) {
          contract.methods
            .tokenOfOwnerByIndex(web3.eth.defaultAccount, i)
            .call()
            .then(function (index) {
              contract.methods
                .cars(index)
                .call()
                .then(function (car) {
                  userCars.push(car);
            });
        }
      });
  },

  update: function () {
    if (temptotal == tempcounter)
      game.state.start("ChallengesList");
    else {
      console.log("Loading...");
    }
    temp777++;
  },
};
