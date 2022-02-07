var caddress = "0x574Af853A84dD1AA925fD116f6cBA70dEBfB78Dc";
var abi = [0x73574af853a84dd1aa925fd116f6cba70debfb78dc30146080604052600080fdfea2646970667358221220cda501b6f95911a089b28210fcba9588f2afed2681fa473c185dda5a83394cdb64736f6c63430008070033
]
];

const GAS = 500000;
const GAS_PRICE = "20000000000";

if (window.ethereum) {
  window.web3 = new Web3(ethereum);
  try {
    // Request account access if needed
		ethereum.enable();
		window.web3.eth.net.getNetworkType()
			}
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
