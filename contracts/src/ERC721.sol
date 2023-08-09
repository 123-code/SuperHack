// SPDX-License-Identifier: MIT
pragma solidity ^0.8.4;

// Contract Address: 0x1B789b7016657bb6859803bAC1b67df5414AE8CE
// rpc: https://optimism-goerli.infura.io/v3/c24c8ebb1b7c447aa3e95e28e11e6532
import "@openzeppelin/contracts/token/ERC721/extensions/ERC721URIStorage.sol";
import "@openzeppelin/contracts/utils/Counters.sol";

contract MyToken is ERC721URIStorage {

    using Counters for Counters.Counter;
    Counters.Counter private _tokenIds;
    constructor() ERC721("MyToken", "MTK") {}
    mapping(address=>uint) public tokencount;
    mapping(uint=>address)public tokenids;


event Burned(address indexed owner, uint256 indexed tokenId);

/*

*/
function mint(address _to) external returns(uint){
_tokenIds.increment();
uint newItemID = _tokenIds.current();
_mint(_to,newItemID);
//_setTokenURI(newItemID,TokenURI);
tokencount[_to] += 1;
tokenids[newItemID] = msg.sender;
return newItemID;
}

function TransferNFT(uint _tokenID,address _to) external{
    require(msg.sender == tokenids[_tokenID],"You Don't own this NFT");
    transferFrom(msg.sender,_to,_tokenID);
}


function burn(uint _tokenID)external{
_burn(_tokenID);
emit Burned(msg.sender,_tokenID);
}
}