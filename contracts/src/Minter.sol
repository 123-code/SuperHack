
import "./IERC20.sol";
import "./IERC721.sol";

pragma solidity ^ 0.8.18;

//0x90300534Cd886E98537F770E8A0EAEDb78899ea6
contract Minter{

    IGovernance public governance;
    IMyToken  public nft;
    uint256 public tomint;
    mapping(address => uint) public NFTBalances;

    constructor(address _governance,address _nft){
        governance = IGovernance(_governance);
        nft = IMyToken(_nft);
    }

    modifier HasNFTs(){ 
        require(nft.balanceOf(msg.sender) > 0,"You don't have any NFTs");
        _;
    }



    function MyBalance()public view returns(uint){
        return nft.balanceOf(msg.sender);
    }


    function getMintableTokens()public view returns(uint256){
   
        return nft.balanceOf(msg.sender) * 10;
        

    }

    function MintTokens()public  HasNFTs{

        tomint=nft.balanceOf(msg.sender) * 10;
        governance.Mint(msg.sender, tomint);
        
    }

    }



