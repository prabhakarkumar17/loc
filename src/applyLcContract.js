import web3 from './web3'

const contractAddress = '0xd3eff29aaf6711f5e59cb9f8364a57425159420a';

const abi = [
	{
		"constant": false,
		"inputs": [
			{
				"name": "success",
				"type": "bool"
			}
		],
		"name": "applicantBankAccepts",
		"outputs": [],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [
			{
				"name": "_applicantBank",
				"type": "address"
			},
			{
				"name": "_exporterBank",
				"type": "address"
			},
			{
				"name": "_document",
				"type": "string"
			},
			{
				"name": "_totalAmount",
				"type": "uint256"
			}
		],
		"name": "applicantBankPaysExpBank",
		"outputs": [],
		"payable": true,
		"stateMutability": "payable",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [
			{
				"name": "_applicant",
				"type": "address"
			},
			{
				"name": "_applicantBank",
				"type": "address"
			},
			{
				"name": "_document",
				"type": "string"
			},
			{
				"name": "_totalAmount",
				"type": "uint256"
			}
		],
		"name": "applicantPaysAppBank",
		"outputs": [],
		"payable": true,
		"stateMutability": "payable",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [
			{
				"name": "_applicant",
				"type": "address"
			},
			{
				"name": "_applicantBank",
				"type": "address"
			},
			{
				"name": "_exporterBank",
				"type": "address"
			},
			{
				"name": "_exporter",
				"type": "address"
			},
			{
				"name": "_totalAmount",
				"type": "uint256"
			},
			{
				"name": "_dealContract",
				"type": "string"
			}
		],
		"name": "applyLC",
		"outputs": [],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [
			{
				"name": "success",
				"type": "bool"
			}
		],
		"name": "dealCompleted",
		"outputs": [],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [
			{
				"name": "success",
				"type": "bool"
			}
		],
		"name": "exporterAccepts",
		"outputs": [],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [
			{
				"name": "success",
				"type": "bool"
			}
		],
		"name": "exporterBankAccepts",
		"outputs": [],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [
			{
				"name": "_exporterBank",
				"type": "address"
			},
			{
				"name": "_exporter",
				"type": "address"
			},
			{
				"name": "_document",
				"type": "string"
			},
			{
				"name": "_totalAmount",
				"type": "uint256"
			}
		],
		"name": "exporterBankPaysExporter",
		"outputs": [],
		"payable": true,
		"stateMutability": "payable",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [
			{
				"name": "_document",
				"type": "string"
			},
			{
				"name": "_totalAmount",
				"type": "uint256"
			}
		],
		"name": "shipment",
		"outputs": [],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [],
		"name": "getApplicant",
		"outputs": [
			{
				"name": "",
				"type": "address"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [],
		"name": "getApplicantBank",
		"outputs": [
			{
				"name": "",
				"type": "address"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [],
		"name": "getExporter",
		"outputs": [
			{
				"name": "",
				"type": "address"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [],
		"name": "getExporterBank",
		"outputs": [
			{
				"name": "",
				"type": "address"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [],
		"name": "getStatus",
		"outputs": [
			{
				"name": "",
				"type": "uint8"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	}
];

export default new web3.eth.Contract(abi, contractAddress);