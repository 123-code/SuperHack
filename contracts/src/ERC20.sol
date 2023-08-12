// SPDX-License-Identifier: MIT
//import "@openzeppelin/contracts/access/Ownable.sol";
pragma solidity ^ 0.8.18;

contract Governance {
     uint256 public immutable supply = 200000;
     mapping(address=>uint256)public balanceOf;
     bytes32 public name = "Governance";
     bytes32 public Symbol = "GVT";
     uint256 public newsupply;


event MoneyTransfer(address indexed from,address indexed to,uint256 amount);
event Minted(address indexed to,uint256 amount);

        modifier SupplyNotExceeded(){
            require(newsupply + 1 <= supply);
            _;
        }

     function Transfer(uint256 _amount,address _to)public payable{
         balanceOf[msg.sender]-=_amount;
          balanceOf[_to]+=_amount;
          emit MoneyTransfer(msg.sender, _to, _amount);
     }

     function Mint(address _to,uint256 amount)public SupplyNotExceeded{
        
         balanceOf[_to]+=amount;
         newsupply+=amount;
     }

     function GetPayzBalance(address account)public view returns(uint256){
            return balanceOf[account];
     }
//Contract Address: 0xba70d4aebFeA45201b8916258475142A3065EeCD

}