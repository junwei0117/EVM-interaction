const solc = require('solc');
const path = require('path');
const fs = require('fs');

function compile(contractName, fileName) {
  const contractPath = path.join(
    path.resolve(__dirname),
    `../contract/${fileName}.sol`,
  );
  const contractFile = fs.readFileSync(contractPath, 'utf8');
  const compiledOutput = solc.compile(contractFile, 1);

  return {
    bytecode: compiledOutput.contracts[`:${contractName}`].bytecode,
    abi: JSON.parse(compiledOutput.contracts[`:${contractName}`].interface),
  };
}

exports.compile = compile;
