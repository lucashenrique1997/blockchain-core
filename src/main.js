const {Blockchain, Transaction} = require('./blockchain');

let estalecaCoin = new Blockchain();
estalecaCoin.createTransaction(new Transaction('address1', 'address2', 85));
estalecaCoin.createTransaction(new Transaction('address2', 'address1', 80));

console.log('Starting the miner...');
estalecaCoin.minePendingTransactions('lucas-address');

console.log('Starting the miner...');
estalecaCoin.minePendingTransactions('lucas-address');

console.log('Lucas Balance = ', estalecaCoin.getBalanceOfAddress('lucas-address'));
console.log('address1 Balance = ', estalecaCoin.getBalanceOfAddress('address1'));
console.log('address2 Balance = ', estalecaCoin.getBalanceOfAddress('address2'));
