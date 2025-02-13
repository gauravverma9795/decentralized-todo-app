const TodoContract = artifacts.require("TodoContract");
const { expect } = require("chai");

contract("TodoContract", (accounts) => {
  let todoContract;

  before(async () => {
    todoContract = await TodoContract.deployed();
  });

  it("should deploy the contract successfully", async () => {
    const address = todoContract.address;
    expect(address).to.not.be.null;
    expect(address).to.not.be.undefined;
    expect(address).to.not.equal("");
    expect(address).to.not.equal(0x0);
  });

  it("should add a task hash to the blockchain", async () => {
    const taskHash = web3.utils.keccak256("Task 1");
    await todoContract.addTaskHash(taskHash, { from: accounts[0] });

    const isTaskHashVerified = await todoContract.verifyTaskHash(taskHash);
    expect(isTaskHashVerified).to.be.true;
  });

  it("should verify a task hash on the blockchain", async () => {
    const taskHash = web3.utils.keccak256("Task 2");
    await todoContract.addTaskHash(taskHash, { from: accounts[0] });

    const isTaskHashVerified = await todoContract.verifyTaskHash(taskHash);
    expect(isTaskHashVerified).to.be.true;
  });

  it("should return false for a non-existent task hash", async () => {
    const taskHash = web3.utils.keccak256("Non-existent Task");
    const isTaskHashVerified = await todoContract.verifyTaskHash(taskHash);
    expect(isTaskHashVerified).to.be.false;
  });
});