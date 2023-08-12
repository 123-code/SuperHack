import {
    useAccount,
    useConnect,
    useContractRead,
    useContractWrite,
    useNetwork,
    useWaitForTransaction,
  } from "wagmi";

  import {useState,useEffect} from 'react';
  import Button from '@/components/ConnectButton'
  import { Inter } from 'next/font/google'
  const inter = Inter({ subsets: ['latin'] })
  export default function Upload(){
    return(
        <>
         <main
      className={`flex min-h-screen flex-col items-center justify-between p-24 ${inter.className}`}
    >
       <Button/>
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
      >
        Mint Picture  📸
      </button>
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
        </>
    )
  }