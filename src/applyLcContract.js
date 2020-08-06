import web3 from './web3'

const contractAddress = '0x866f5b716b5603e40d7c84fb059643b18157ca88';

const abi = [
	{
		"constant": false,
		"inputs": [
			{
				"name": "_applicant",
				"type": "address"
			},
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
				"name": "_applicant",
				"type": "address"
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
				"name": "_applicant",
				"type": "address"
			},
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
				"name": "_applicant",
				"type": "address"
			},
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
				"name": "_applicant",
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
				"name": "_applicant",
				"type": "address"
			}
		],
		"name": "getApplicant",
		"outputs": [],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [
			{
				"name": "_applicant",
				"type": "address"
			}
		],
		"name": "getApplicantBank",
		"outputs": [],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [
			{
				"name": "_applicant",
				"type": "address"
			}
		],
		"name": "getExporter",
		"outputs": [],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [
			{
				"name": "_applicant",
				"type": "address"
			}
		],
		"name": "getExporterBank",
		"outputs": [],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [
			{
				"name": "_applicant",
				"type": "address"
			}
		],
		"name": "getStatus",
		"outputs": [],
		"payable": false,
		"stateMutability": "nonpayable",
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
		"anonymous": false,
		"inputs": [
			{
				"indexed": false,
				"name": "",
				"type": "uint8"
			}
		],
		"name": "checkStatus",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": false,
				"name": "",
				"type": "address"
			}
		],
		"name": "checkAddress",
		"type": "event"
	}
];

export default new web3.eth.Contract(abi, contractAddress);