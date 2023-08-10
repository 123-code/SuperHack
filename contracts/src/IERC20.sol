// SPDX-License-Identifier: MIT
pragma solidity ^0.8.18;

interface IGovernance {

  event Transfer(address indexed from, address indexed to, uint256 value);

  event Minted(address indexed to, uint256 amount);

  function totalSupply() external view returns (uint256);

  function balanceOf(address account) external view returns (uint256);

  function transfer(address to, uint256 amount) external returns (bool);

  function mint(address to, uint256 amount) external;

  function name() external view returns (string memory);

  function symbol() external view returns (string memory);

}