import Image from 'next/image'
import {
  useAccount,
  useConnect,
  useContractRead,
  useContractWrite,
  useNetwork,
  useWaitForTransaction,
} from "wagmi";
import { ethers } from "ethers";
import { useState, useEffect } from "react";
import { Inter } from 'next/font/google'
import Button from '@/components/ConnectButton'
const inter = Inter({ subsets: ['latin'] })
import tokenContract from '../../ABIs/ERC721.json'
import erc20contract from '../../ABIs/ERC20.json'
import MinterContract from '../../ABIs/Minter.json'

export default function Home() {

  //const camera = 📸;
  const ERC721Address = "0x6c2D9Cd8b9Bf1236cFe3a88daa7961238D00Ab31"
  const MinterAddress = "0x90300534Cd886E98537F770E8A0EAEDb78899ea6"
  const ERC20Address = "0x44754B7A75D005d8d341370e6D5473B17a5D04Ad"
  const { address, isConnecting, isDisconnected } = useAccount();
  const [balance,setbalance] = useState(0);

  const contractConfig = {
    addressOrName: ERC721Address,
    contractInterface: tokenContract.abi,
  };


    const {
      data: mintData,
      write: buy,
      isLoading: isMintLoading,
      isSuccess: isMintStarted,
      error: mintError,
    } = useContractWrite({
      address: ERC721Address,
      abi: tokenContract.abi,
      functionName: "mint",
    }); 


    const {
      data: Minter,
      write: mintercontract,
      isLoading: isloading,
      isSuccess: isStarted,
      error: err,
    } = useContractWrite({
      address: ERC20Address,
      abi: erc20contract.abi,
      functionName: "claimtokens",
      args:[address]
    }); 



   

  
    const mintToken = async () => {
      try{
      buy({args:[address]})
      }catch(err){
        window.alert(err)
      }
     
    }


    const Earn = async()=>{
      try{ 
        mintercontract()
        
        if(err){
          window.alert(err)

        }
        else if(!err){
          window.alert("success")
        }
      }
      catch(err){}
      window.alert(err)
    }


  return (
    <main
      className={`flex min-h-screen flex-col items-center justify-between p-24 ${inter.className}`}
    >
       <Button/>
       <button
      className="bg-gray-900 text-white hover:bg-gray-800 rounded-full px-12 py-2 "
      onClick={Earn}>
        Check For Earnings $
      </button>
      <button
      className="bg-gray-900 text-white hover:bg-gray-800 rounded-full px-12 py-2 "
      onClick={mintToken}>
        Mint Picture  📸
      </button>
       <div className="relative flex place-items-center before:absolute before:h-[300px] before:w-[480px] before:-translate-x-1/2 before:rounded-full before:bg-gradient-radial before:from-white before:to-transparent before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[180px] after:w-[240px] after:translate-x-1/3 after:bg-gradient-conic after:from-sky-200 after:via-blue-200 after:blur-2xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-blue-700/10 after:dark:from-sky-900 after:dark:via-[#0141ff]/40 before:lg:h-[360px]">
     <h1> From Photo to NFT in seconds </h1>
     
     
      </div>

      <div>
     <h2> hobby & earn. </h2>
     </div>
     

      <div className="relative flex place-items-center before:absolute before:h-[300px] before:w-[480px] before:-translate-x-1/2 before:rounded-full before:bg-gradient-radial before:from-white before:to-transparent before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[180px] after:w-[240px] after:translate-x-1/3 after:bg-gradient-conic after:from-sky-200 after:via-blue-200 after:blur-2xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-blue-700/10 after:dark:from-sky-900 after:dark:via-[#0141ff]/40 before:lg:h-[360px]">
 

      </div>

     
  
      <div>

     

    



    <div>
    <h1>3. </h1>
    <h2> Earn </h2>
    </div>
    
<div>

</div>
     
      </div>
      <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex">

        <div className="fixed bottom-0 left-0 flex h-48 w-full items-end justify-center bg-gradient-to-t from-white via-white dark:from-black dark:via-black lg:static lg:h-auto lg:w-auto lg:bg-none">
          <a
            className="pointer-events-none flex place-items-center gap-2 p-8 lg:pointer-events-auto lg:p-0"
            href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template-tw&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
       
          </a>
        </div>
      </div>

     
    </main>
  )
}
