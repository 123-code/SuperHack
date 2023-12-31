// SPDX-License-Identifier: MIT
pragma solidity ^0.8.18;

interface IMyToken {

  function TransferNFT(uint _tokenID,address _to) external;

  function mint(address _to) external returns(uint);

  function burn(uint _tokenID)external;

  function balanceOf(address _owner) external view returns (uint256 balance);

  function tokencount(address account) external view returns (uint);

  function tokenids()external view returns(uint256);

}