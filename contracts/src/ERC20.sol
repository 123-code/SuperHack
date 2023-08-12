// SPDX-License-Identifier: MIT
//import "@openzeppelin/contracts/access/Ownable.sol";

pragma solidity ^ 0.8.18;
import"./IERC721.sol";


contract Governance{
     uint256 public immutable supply = 200000;
     mapping(address=>uint256)public balanceOf;
     mapping(uint=>bool)public tokenclaimed;
     bytes32 public name = "Governance";
     bytes32 public Symbol = "GVT";
     uint256 public newsupply;
     uint256 public claimable;
     uint256 claimed;
     uint256 immutable tokenspernft = 10;
     IMyToken nftcontract;
 


event Minted(address indexed to,uint256 amount);


constructor(address _nftcontract){
    nftcontract = IMyToken(_nftcontract);

}



     function claimtokens()public{
         address sender = msg.sender;
         uint256 balance = nftcontract.balanceOf(sender);
         uint256 amounttoclaim = 0;

         require(balance > 0,"you dont own any NFTs");

         for(uint i=0;i<balance;i++){
             require(claimed<=amounttoclaim,"claimed all your nfts");
             amounttoclaim +=1;
             claimed+=1;
             //nftcontract.tokenids[1]=true;

         } 
         balanceOf[sender] += amounttoclaim*tokenspernft;
        
        emit Minted(sender, amounttoclaim);
     }



//Contract Address: 0xba70d4aebFeA45201b8916258475142A3065EeCD
receive() external payable{}
fallback() external payable{}
}