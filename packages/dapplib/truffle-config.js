require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'give close brown slab carpet rate magic hospital hidden brave fresh giggle'; 
let testAccounts = [
"0x56a81c912f515d07d2efebd69403913fec42f7dc1f760b850caf2b6d256c2368",
"0x761387d565d8ea6aa628b985d307879ea1076dc50e5f87f48ab7227830636c8e",
"0x36f1b64c740208ff06bc979853a98a7879fd6a57146495f07e2acae1218d240b",
"0x439454344d4957a0f7696423765ebf9b9df8f8c75214501032028919f0559cd9",
"0x50866ecfe24d9ebb4a1121d85cb6f8448aa83f45b2b2a3605b09eb0425c9e82a",
"0xe002024dcb1861c7d4bfdfce027eea86e43b737299da35350b9ceeb10f91d4f7",
"0xdf354435f53b1f82a9c25a1dbbde0d6d91cc841c24de5a06ab839954da0e1083",
"0x0d2f947d906001787414a9ec28f2da9aeef48b37130eb08f390d62298ff54248",
"0x54407dcace13786340432e128be79d82cc5414eb834917d911635b5c2117f6e8",
"0x8ef7bbfc131436e12fb0a6e7f5f8a2332c3fb99e85dccc9183e899341a362b86"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};
