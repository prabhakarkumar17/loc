import web3 from './web3';
const abi = [{"constant":false,"inputs":[{"name":"email","type":"string"},{"name":"password","type":"string"}],"name":"validate","outputs":[{"name":"status","type":"uint8"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"_name","type":"string"},{"name":"_email","type":"string"},{"name":"_occupation","type":"string"},{"name":"_contact","type":"int256"},{"name":"_password","type":"string"},{"name":"_confirmPassword","type":"string"}],"name":"setCustomerDetails","outputs":[{"name":"email","type":"string"},{"name":"password","type":"string"}],"payable":false,"stateMutability":"nonpayable","type":"function"}];

const contractAddress = '0x1EDCDF2Bb1A7238b42E053DbC5e046b2944Fc3Da';

export default new web3.eth.Contract(abi, contractAddress);