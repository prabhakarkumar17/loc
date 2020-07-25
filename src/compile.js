const path = require('path');
const fs = require('fs');
const solc = require('solc');

const pathLogin = path.resolve( __dirname , 'contracts', 'login.sol');
const sourceCode = fs.readFileSync(pathLogin, 'utf-8');
//console.log(sourceCode);

module.exports = solc.compile(sourceCode, 1).contracts[':login'];

