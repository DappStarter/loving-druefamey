require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'hockey knife olympic system index rate six protect grid arena flock venture'; 
let testAccounts = [
"0x15530d75226c2e07ad03942173825cf410eaed6ccd55ca22266f19155ba7e0c2",
"0x2e1e4e8f76f36cc1425e0d56f440322d19b1369acd20b50676ee7496ac77f0df",
"0xb0abec81f26a1dee61eade61ba59fa812a7c134a0303a5dd11bebc4ad7eadbf3",
"0x1f1c3abee758bb871a2768b91ba0e7db9e3c0c1167b013c2a7cee1d0131e026a",
"0x5f00e26545a9ca2ea6f05a0b36ac9d1092a87743c9056e27221fb757f46c928b",
"0x84c37947de6c26dc1fb759b44ef430cb7d1ba363c270bf4adab008f206c30efd",
"0xfbe1b29ae91c5d2aac3116ff6f60d3ac5caa67bfe16de9c51a6eedfa2c1e41d3",
"0xbaef5c63ee94ce2f6bdbcadc025b0be0b14b432ca7c4a07cda49fe0b057d3f79",
"0xc859847735d6abc64f9229309df2387de55d0f16cb8034d8c2d647625a6db02d",
"0x9eed676f2c9c43ec19ae0dda8fdefd44a02e40116e69b5f33562c784a872aa06"
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
            version: '^0.8.0'
        }
    }
};

