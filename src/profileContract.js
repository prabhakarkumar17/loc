import web3 from './web3'

const abi = [
	{
		"constant": false,
		"inputs": [
			{
				"name": "_name",
				"type": "string"
			},
			{
				"name": "_organizationName",
				"type": "string"
			},
			{
				"name": "_add",
				"type": "string"
			},
			{
				"name": "_gst",
				"type": "string"
			},
			{
				"name": "_domain",
				"type": "string"
			},
			{
				"name": "_city",
				"type": "string"
			},
			{
				"name": "_district",
				"type": "string"
			},
			{
				"name": "_zip",
				"type": "string"
			}
		],
		"name": "setDetail",
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
				"type": "string"
			}
		],
		"name": "idName",
		"type": "event"
	}
];

const contractAddress = "0x319afb905d322fe0c6ad65e19aac05db6977344b";

export default new web3.eth.Contract(abi, contractAddress);