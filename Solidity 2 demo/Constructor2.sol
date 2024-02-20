// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract Constructor2 {
    mapping(address => uint256) public valueMapping;

        constructor(){
        valueMapping[msg.sender] = 100;
    }
}