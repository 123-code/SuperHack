
import "./IERC20.sol";

pragma solidity ^ 0.8.18;


contract Minter{

    IGovernance public governance;
    //INFT public nft;
    constructor(address _governance,address _nft){
        token = IGovernance(_governance);
    }

    function MyBalance()public view returns(uint){
        return token.balanceOf(msg.sender);
    }

}

