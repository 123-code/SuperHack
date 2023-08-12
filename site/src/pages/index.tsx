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
  const ERC721Address = "0xcBd5310aed4D9f3bD43b053Ea4902Ad55e405230"
  const MinterAddress = "0x90300534Cd886E98537F770E8A0EAEDb78899ea6"
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
      address: MinterAddress,
      abi: MinterContract.abi,
      functionName: "mint",
    }); 


    const { data, isError, isLoading } = useContractRead({
      address: '0x01b4867e43E558456bEeF249059298067a7f6068',
      abi: erc20contract,
      functionName: 'GetPayzBalance',
      args: [address],
    })

   

  
    const mintToken = async () => {
      try{
      buy({args:["0x390be0D2Da9eDC0F85Ff09bfBFC874Bc8Ab665A6"]})
      }catch(err){
        window.alert(err)
      }
     
    }


    const Earn = async()=>{
      try{ 
        mintercontract({args:['0x01b4867e43E558456bEeF249059298067a7f6068','0x1B789b7016657bb6859803bAC1b67df5414AE8CE']})
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
       <div className="relative flex place-items-center before:absolute before:h-[300px] before:w-[480px] before:-translate-x-1/2 before:rounded-full before:bg-gradient-radial before:from-white before:to-transparent before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[180px] after:w-[240px] after:translate-x-1/3 after:bg-gradient-conic after:from-sky-200 after:via-blue-200 after:blur-2xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-blue-700/10 after:dark:from-sky-900 after:dark:via-[#0141ff]/40 before:lg:h-[360px]">
     <h1> From Photo to NFT in seconds </h1>
     
     
      </div>

      <div>
     <h2> hobby & earn. </h2>
     </div>
     

      <div className="relative flex place-items-center before:absolute before:h-[300px] before:w-[480px] before:-translate-x-1/2 before:rounded-full before:bg-gradient-radial before:from-white before:to-transparent before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[180px] after:w-[240px] after:translate-x-1/3 after:bg-gradient-conic after:from-sky-200 after:via-blue-200 after:blur-2xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-blue-700/10 after:dark:from-sky-900 after:dark:via-[#0141ff]/40 before:lg:h-[360px]">
        <div>
    <h1>1. </h1>
     <h1> Drag & drop your photo below </h1>
        </div>

      </div>


     <div>
    <h1>2. </h1>
    <h2> click on Mint </h2>
    </div>
      <div>

    <div>
    <h1>3. </h1>
    <h2> Earn </h2>
    </div>
     
      <button
      className="bg-gray-900 text-white hover:bg-gray-800 rounded-full px-12 py-2 sm:w-auto"
      onClick={mintToken}>
        Mint Picture  📸
      </button>
<div>
<button
      className="bg-gray-900 text-white hover:bg-gray-800 rounded-full px-12 py-2 sm:w-auto"
      onClick={Earn}>
        Check For Earnings $
      </button>
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
