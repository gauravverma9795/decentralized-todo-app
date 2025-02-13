const Web3 = require("web3");
const TodoContract = require("../../blockchain/build/contracts/TodoContract.json");
require("dotenv").config();

// Initialize Web3
const web3 = new Web3(process.env.BLOCKCHAIN_NODE_URL);

// Get the contract instance
const getContract = async () => {
  const networkId = await web3.eth.net.getId();
  const deployedNetwork = TodoContract.networks[networkId];
  return new web3.eth.Contract(
    TodoContract.abi,
    deployedNetwork && deployedNetwork.address
  );
};

// Add a task hash to the blockchain
const addTaskHash = async (taskHash) => {
  const contract = await getContract();
  const accounts = await web3.eth.getAccounts();
  await contract.methods.addTaskHash(taskHash).send({ from: accounts[0] });
};

// Verify a task hash on the blockchain
const verifyTaskHash = async (taskHash) => {
  const contract = await getContract();
  return await contract.methods.verifyTaskHash(taskHash).call();
};

module.exports = {
  addTaskHash,
  verifyTaskHash,
};