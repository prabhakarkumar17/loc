import web3 from './web3';
const abi = [
	{
		"constant": false,
		"inputs": [
			{
				"name": "_id",
				"type": "string"
			},
			{
				"name": "givenBankPassword",
				"type": "string"
			}
		],
		"name": "bankValidate",
		"outputs": [],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [
			{
				"name": "_name",
				"type": "string"
			},
			{
				"name": "_branch",
				"type": "string"
			},
			{
				"name": "_bankAddress",
				"type": "string"
			},
			{
				"name": "_id",
				"type": "string"
			},
			{
				"name": "_password",
				"type": "string"
			},
			{
				"name": "_confirmPassword",
				"type": "string"
			}
		],
		"name": "setBankDetails",
		"outputs": [],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [
			{
				"name": "_name",
				"type": "string"
			},
			{
				"name": "_email",
				"type": "string"
			},
			{
				"name": "_occupation",
				"type": "string"
			},
			{
				"name": "_contact",
				"type": "uint256"
			},
			{
				"name": "_password",
				"type": "string"
			},
			{
				"name": "_confirmPassword",
				"type": "string"
			}
		],
		"name": "setCustomerDetails",
		"outputs": [],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [
			{
				"name": "email",
				"type": "string"
			},
			{
				"name": "password",
				"type": "string"
			}
		],
		"name": "userValidate",
		"outputs": [],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": false,
				"name": "",
				"type": "uint8"
			},
			{
				"indexed": false,
				"name": "",
				"type": "string"
			}
		],
		"name": "checkLogin",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": false,
				"name": "",
				"type": "uint8"
			},
			{
				"indexed": false,
				"name": "",
				"type": "string"
			}
		],
		"name": "checkBankLogin",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": false,
				"name": "",
				"type": "string"
			}
		],
		"name": "checkRegister",
		"type": "event"
	}
];

const contractAddress = '0xcbb97e53c6b9dd8316b135d30853fdcec4a8c2e9';

export default new web3.eth.Contract(abi, contractAddress);

