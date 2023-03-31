//For TRON Mainnet-----------------------------------------------------------------------------------

const { result } = require('lodash');
const TronWeb = require('tronweb');
const HttpProvider = TronWeb.providers.HttpProvider;
const fullNode = new HttpProvider("https://api.trongrid.io");
const solidityNode = new HttpProvider("https://api.trongrid.io");
const eventServer = new HttpProvider("https://api.trongrid.io");
const privateKey = '';
const tronWeb = new TronWeb(fullNode, solidityNode, eventServer, privateKey);

async function abc(){

 const CONTRACT = "TR7NHqjeKQxGTCi8q8ZY4pL8otSzgjLj6t";
const {
    abi
} = await tronWeb.trx.getContract(CONTRACT);
const Recipent = "TXCZUZ59gEUvwNDvLLKvxKBh5V1wMXBdiN";//usdt smart contract address
const contract = tronWeb.contract(abi.entrys, CONTRACT);

//to fetch balance of account associated with private key
const balance = await contract.methods.balanceOf(ACCOUNT).call();
console.log(balance);
//to transfer the USDT
const resp = await contract.methods.transfer(Recipent, 1000).send();
// console.log(resp);
return resp
}
abc().then((TXres) => {
  // console.log( TXres);
  result.txid = TXres
  console.log(result.txid);
})
.catch((error) => {
  console.error('Error:', error);
});


////////////////////////////////////////////////////////////////////////////////////////////////////////-----------for testnet
// const TronWeb = require('tronweb');
// const HttpProvider = TronWeb.providers.HttpProvider;
// const fullNode = new HttpProvider("https://nile.trongrid.io");
// const solidityNode = new HttpProvider("https://nile.trongrid.io");
// const eventServer = new HttpProvider("https://nile.trongrid.io");
// const privateKey = "";
// const tronWeb = new TronWeb(fullNode, solidityNode, eventServer, privateKey);

// async function abc(){

// const CONTRACT = "TXLAQ63Xg1NAzckPwKHvzw7CSEmLMEqcdj";
// const {
//     abi
// } = await tronWeb.trx.getContract(CONTRACT);

// const ACCOUNT = "TZBQP3b5trpSBvJrZuYQefZJrmmY1cRBeK";
// const Recipent = "TCDfUt2ag3Ut9vKJMN6r12yjth57iGDTW6";
// const contract = tronWeb.contract(abi.entrys, CONTRACT);
//  await contract.methods.transfer(Recipent, 1000).send()

// }
// abc().then((result) => {
//   console.log( result.txid);
// })
// .catch((error) => {
//   console.error('Error:', error);
// });
// console.log(resp);
