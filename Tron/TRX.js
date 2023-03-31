
//For Nile testnet 

const TronWeb = require('tronweb');
const HttpProvider = TronWeb.providers.HttpProvider;
const fullNode = new HttpProvider("https://nile.trongrid.io");
const solidityNode = new HttpProvider("https://nile.trongrid.io");
const eventServer = new HttpProvider("https://nile.trongrid.io");
const privateKey = "";
const tronWeb = new TronWeb(fullNode, solidityNode, eventServer,privateKey);




async function TRX_GetBalance(){
   
    //To fetch Balance of perticular wallet 

    const balance = await tronWeb.trx.getBalance("TZBQP3b5trpSBvJrZuYQefZJrmmY1cRBeK");
    console.log(balance);

}
TRX_GetBalance()


async function TRX_TransferTrx(){
    const Recipent = "TCDfUt2ag3Ut9vKJMN6r12yjth57iGDTW6";
    //const address = await tronWeb.address.fromPrivateKey(privateKey);
    const tradeobj = await tronWeb.transactionBuilder.sendTrx(Recipent, 1000);
    const signedtxn = await tronWeb.trx.sign(tradeobj);
    const result = await tronWeb.trx.sendRawTransaction(signedtxn);
    console.log(result);
}
TRX_TransferTrx()

