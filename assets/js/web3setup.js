var caddress = "0x132b5809DA48F8DD77fD0d46006650A899A83801";
var abi = [[]
];

const GAS = 500000;
const GAS_PRICE = "20000000000";

if (window.ethereum) {
  window.web3 = new Web3(ethereum);
  try {
    // Request account access if needed
		ethereum.enable();
		window.web3.eth.net.getNetworkType(){
		});
    // Acccounts now exposed
  } catch (error) {
    // User denied account access...
  }
}
// Legacy dapp browsers...
else if (window.web3) {
  window.web3 = new Web3(web3.currentProvider);
  // Acccounts always exposed
}
// Non-dapp browsers...
else {
  console.log(
    "Non-Ethereum browser detected. You should consider trying MetaMask!"
  );
}

web3.eth.getAccounts((err, res) => {
  web3.eth.defaultAccount = res[0];
  console.log(web3.eth.defaultAccount);
});

var contract = new web3.eth.Contract(abi, caddress);
