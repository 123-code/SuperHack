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

export default function Home() {


  const ERC721Address = "0xcBd5310aed4D9f3bD43b053Ea4902Ad55e405230"
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
  
    const mintToken = async () => {
      try{
      buy({args:["0x390be0D2Da9eDC0F85Ff09bfBFC874Bc8Ab665A6"]})
      }catch(err){
        window.alert(err)
      }
     
    }


  return (
    <main
      className={`flex min-h-screen flex-col items-center justify-between p-24 ${inter.className}`}
    >
      <div>
      <Button/>
      <button
      className="bg-gray-900 text-white hover:bg-gray-800 rounded-full px-12 py-2 sm:w-auto"
      onClick={mintToken}>
        Mint Token
      </button>
      </div>
      <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex">
        <p className="fixed left-0 top-0 flex w-full justify-center border-b border-gray-300 bg-gradient-to-b from-zinc-200 pb-6 pt-8 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:static lg:w-auto  lg:rounded-xl lg:border lg:bg-gray-200 lg:p-4 lg:dark:bg-zinc-800/30">
          Bienvenido
         
        </p>
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

      <div className="relative flex place-items-center before:absolute before:h-[300px] before:w-[480px] before:-translate-x-1/2 before:rounded-full before:bg-gradient-radial before:from-white before:to-transparent before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[180px] after:w-[240px] after:translate-x-1/3 after:bg-gradient-conic after:from-sky-200 after:via-blue-200 after:blur-2xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-blue-700/10 after:dark:from-sky-900 after:dark:via-[#0141ff]/40 before:lg:h-[360px]">
     
      </div>

     
    </main>
  )
}
