var caddress = "0xa5bf757Ea56bD4d81fBD68CC6dfAb5C4eC139500";
var abi = web3.eth.contract([{"inputs":[],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"approved","type":"address"},{"indexed":true,"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"Approval","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"operator","type":"address"},{"indexed":false,"internalType":"bool","name":"approved","type":"bool"}],"name":"ApprovalForAll","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"from","type":"address"},{"indexed":true,"internalType":"address","name":"to","type":"address"},{"indexed":true,"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"Transfer","type":"event"},{"inputs":[{"internalType":"uint256","name":"_battleId","type":"uint256"},{"internalType":"uint256","name":"_p2CarId","type":"uint256"}],"name":"acceptBattle","outputs":[],"stateMutability":"payable","type":"function"},{"inputs":[{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"approve","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"owner","type":"address"}],"name":"balanceOf","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"battles","outputs":[{"internalType":"uint256","name":"index","type":"uint256"},{"internalType":"address payable","name":"p1","type":"address"},{"internalType":"uint256","name":"p1CarId","type":"uint256"},{"internalType":"uint256","name":"scoreToBeat","type":"uint256"},{"internalType":"uint256","name":"amount","type":"uint256"},{"internalType":"address payable","name":"p2","type":"address"},{"internalType":"uint256","name":"p2CarId","type":"uint256"},{"internalType":"address","name":"winner","type":"address"},{"internalType":"bool","name":"ended","type":"bool"},{"internalType":"uint256","name":"createdAt","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"_battleId","type":"uint256"}],"name":"cancelBattle","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"cars","outputs":[{"internalType":"uint256","name":"index","type":"uint256"},{"internalType":"uint256","name":"level","type":"uint256"},{"internalType":"uint256","name":"speed","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"_p1CarId","type":"uint256"},{"internalType":"uint256","name":"_score","type":"uint256"}],"name":"createBattle","outputs":[],"stateMutability":"payable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_battleId","type":"uint256"},{"internalType":"uint256","name":"_score","type":"uint256"}],"name":"endBattle","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"getApproved","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getBattlesCount","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"owner","type":"address"},{"internalType":"address","name":"operator","type":"address"}],"name":"isApprovedForAll","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"mintCar","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"name","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"ownerOf","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"safeTransferFrom","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"},{"internalType":"bytes","name":"_data","type":"bytes"}],"name":"safeTransferFrom","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"operator","type":"address"},{"internalType":"bool","name":"approved","type":"bool"}],"name":"setApprovalForAll","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"bytes4","name":"interfaceId","type":"bytes4"}],"name":"supportsInterface","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"symbol","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"tokenURI","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"transferFrom","outputs":[],"stateMutability":"nonpayable","type":"function"}])

const GAS = 500000;
const GAS_PRICE = "20000000000";

if (window.ethereum) {
  window.web3 = new Web3(ethereum);
  try {
    // Request account access if needed
		ethereum.enable();
		window.web3.eth.net.getNetworkType().then(r => {
			if(r != "BSC") {
				alert("Connect Metamask to BSC Mainnet!")
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

"version": "0.1.0",
    "configurations": [
        {
            "name": "Launch Chrome",
            "request": "launch",
            "type": "pwa-chrome",
            "url": "http://localhost:8080",
            "webRoot": "${workspaceFolder}"
        },
        {
            "name": "Attach",
            "port": 9229,
            "request": "attach",
            "skipFiles": [
                "<node_internals>/**"
            ],
            "type": "pwa-node"
        },


        {
            "name": "Launch Chrome",
            "request": "launch",
            "type": "pwa-chrome",
            "url": "http://localhost:8080",
            "webRoot": "${workspaceFolder}"
        },
        {
            "type": "pwa-chrome",
            "request": "launch",
            "name": "Launch Chrome against localhost",
            "url": "http://localhost:8080",
            "webRoot": "${workspaceFolder}"
        }
    ]
