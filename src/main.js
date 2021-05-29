const {Blockchain, Transaction} = require('./blockchain');
const EC = require('elliptic').ec;
const ec = new EC('secp256k1');

const myKey = ec.keyFromPrivate('7e0e7e0d0a1926ba253cf16e45bdb9dbec15791a26611befe90679fe439088ec');
const myWalletAddress = myKey.getPublic('hex');

let estalecaCoin = new Blockchain();

const tx1 = new Transaction(myWalletAddress, 'wallet2', 10);
tx1.signTransaction(myKey);
estalecaCoin.addTransaction(tx1);

console.log('Starting the miner...');
estalecaCoin.minePendingTransactions(myWalletAddress);

console.log('my Balance = ', estalecaCoin.getBalanceOfAddress(myWalletAddress));

console.log('Is chain valid? ', estalecaCoin.isValidChain());
