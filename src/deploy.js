const HDWalletProvider = require('truffle-hdwallet-provider');
const Web3 = require('web3');
const { interface,bytecode } = require('./compile.js');

const provider = new HDWalletProvider(
    'round wrist wing cram tornado because gas original around winter adapt sad',
    'https://rinkeby.infura.io/v3/141929a230c3436a981553b1967b64ad'
)

const web3 = new Web3(provider);

const deploy = async () => {

    const accounts = await web3.eth.getAccounts();

    console.log("Attempting to deploy contract from ",accounts[0]);

    const result = await new web3.eth.Contract(JSON.parse(interface))
                   .deploy({ data: bytecode, arguments: [] })
                   .send({from: accounts[0] });

    console.log("Congratulations!!! Contract deployed at address ",result.options.address);
};

deploy();