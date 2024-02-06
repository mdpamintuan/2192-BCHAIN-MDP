// SPDX-License-Identifier: MIT
pragma solidity ^0.8.7;

contract GlobalVariables {
    function globalVars() external view returns (address, uint, uint, uint, uint) {
        address sender = msg.sender;
        uint timestamp = block.timestamp;
        uint blockNum = block.number;
        uint gasprice = tx.gasprice;
        uint gaslimit = block.gaslimit;
        
        return (sender, timestamp, blockNum, gasprice, gaslimit );
    }
}