pragma solidity ^0.8.0;

contract TodoContract {
    mapping(bytes32 => bool) public taskHashes;

    function addTaskHash(bytes32 taskHash) public {
        taskHashes[taskHash] = true;
    }

    function verifyTaskHash(bytes32 taskHash) public view returns (bool) {
        return taskHashes[taskHash];
    }
}