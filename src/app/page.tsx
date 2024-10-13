"use client";
import React, { useEffect, useMemo } from "react";
import { ConnectButton } from "@/components/Wallet";
import { useAccount, useReadContract, useWriteContract } from "wagmi";
import { deployedContract } from "@/constants/deployedContract";
import { useState } from "react";
import { useCapabilities, useWriteContracts } from "wagmi/experimental";
import { parseAbi } from "viem";
import { wagmiConfig } from "@/config/wagmi";
import SwapComponents from "@/components/Swap";
import vector from '../assets/line.png'
import Image from "next/image";
import { FaArrowRightLong } from "react-icons/fa6";
import ape from '../assets/ape.png'
import whatsapp from '../assets/whatsapp.png'
import eth from '../assets/eth.png'
import discord from '../assets/discord.png'
import telegram from '../assets/telegram.png'
import zora from '../assets/zora.png'
import apes from '../assets/apes.png'
import send from '../assets/send.png'
import logo from '../assets/logo.png'
import rec from '../assets/rec.png'


export default function Home() {
  const [newGreeting, setNewGreeting] = useState("");
  const account = useAccount();
  useEffect(() => {}, []);
  const { data: greeting } = useReadContract({
    address: deployedContract.address as `0x${string}`,
    abi: deployedContract.abi,
    functionName: "greeting",
  });
  const { writeContractAsync } = useWriteContract();
  // const { data: availableCapabilities } = useCapabilities({
  //   account: account.address,
  // });
  // const capabilities = useMemo(() => {
  //   if (!availableCapabilities || !account.chainId) return;
  //   const capabilitiesForChain = availableCapabilities[account.chainId];
  //   if (
  //     capabilitiesForChain["paymasterService"] &&
  //     capabilitiesForChain["paymasterService"].supported
  //   ) {
  //     return {
  //       paymasterService: {
  //         url: "https://api.developer.coinbase.com/rpc/v1/base-sepolia/M38cgIFQVu6ldPK0gob81k2_LblbB3jq",
  //       },
  //     };
  //   }
  // }, [availableCapabilities, account.chainId]);
  // console.log(capabilities);
  // const { writeContractsAsync } = useWriteContracts({
  //   config: wagmiConfig,
  // });
  const abi = parseAbi(["function setGreeting(string)"]);
  return (
    <div className="min-h-screen ">
    <div className="container mx-auto">
       <div className="flex items-center justify-between w-full p-4">
      <div className="w-12 h-12 bg-blue-600 rounded-full"></div>
       <ConnectButton />
     </div>


     <div className="flex flex-col items-center justify-center">
      <div className="px-3 py-1 mt-12 rounded-full bg-neutral-200 ">
        <p className="text-sm">
        Multi-Platform bot for crypto and fiat transactions    
        </p>
      </div>
      {/* Hero text  */}
       <div className="flex flex-col items-center">
         <h1 className="mt-4 text-6xl font-bold">
          One Command,
        </h1>
        <h1 className="text-6xl font-bold">
          Instant Transactions
        </h1>
        <p className="mt-6 text-2xl font-light">
          Send, Recieve, Bridge and Withdraw
        </p>
        <p className="text-2xl font-light ">
          —all with a single command.
        </p>
       </div>

       {/* Button and aesthetics */}
     <div className="flex flex-col items-center justify-center mt-6">
       <button className="px-6 py-2 text-lg text-white transition duration-300 bg-[#0052FF] rounded-full shadow-blue-200 hover:bg-blue-700">
        Launch Bot
       </button>
       <Image src={vector} width={600} height={600} alt='vector' className="ml-8" />
       <div className="flex -mt-12 ">
        {/* first badge  */}
        <div className="flex flex-col w-auto mr-16 rounded-full">
          <p className="ml-2 text-md">/send</p>
          <div className="flex items-center justify-center gap-2">
            <div className="flex items-center justify-center w-[90%] bg-neutral-100 px-3 py-1 rounded-full gap-2 shadow-blue-100 shadow-lg">
            <p className="text-md">25 ETH</p>
            <FaArrowRightLong />
            <Image src={ape} alt='' className="w-8 rounded-full" />
            <p className="text-md">Kayke.base.eth</p>
          </div>
          <span className="w-8 h-8 rounded-full">
            <Image src={whatsapp} alt='' className="w-8 rounded-full" />
          </span>
          </div>
        </div>
        
        {/* second badge  */}
        <div className="flex flex-col w-auto mr-4 -mt-16 rounded-full">
          <p className="ml-2 text-md">/bath send</p>
          <div className="flex items-center justify-center gap-2">
            <div className="flex items-center justify-center w-[90%] bg-neutral-100 px-2 py-1 rounded-full gap-2 shadow-blue-100 shadow-lg">
            <p className="text-md">25 ETH</p>
            <FaArrowRightLong />
            <Image src={apes} alt='' className="w-8 rounded-full" />
            <p className="text-md">alex.., jon.., amanda..</p>
          </div>
          <span className="w-8 h-8 rounded-full">
            <Image src={telegram} alt='' className="w-8 rounded-full" />
          </span>
          </div>
        </div>

        {/* third badge  */}

         <div className="flex flex-col w-auto mr-4 rounded-full">
          <p className="ml-2 text-md">/bridge</p>
          <div className="flex items-center justify-center gap-2">
            <div className="flex items-center justify-center w-[90%] bg-neutral-100 px-2 py-1 rounded-full gap-2 shadow-blue-100 shadow-lg">
            <Image src={zora} alt='' className="w-8 rounded-full" />
            <p className="text-md"> 25 ETH</p>
            <FaArrowRightLong />
            <Image src={eth} alt='' className="w-8 rounded-full" />
            <p className="text-md">25 ETH</p>
          </div>
          <span className="w-8 h-8 rounded-full">
            <Image src={discord} alt='' className="w-10 rounded-full" />
          </span>
          </div>
        </div>

        
       </div>

     </div>

       {/* Grid section */}
      <div className="px-4 py-8 mx-auto max-w-7xl ">
        <div className="grid grid-cols-1 gap-6 mt-20 sm:grid-cols-2 lg:grid-cols-3">
          
          {/* Grid item 1 */}
          <div className="p-4 ">
            <div className="flex items-center">
              <span className="px-4 py-2 text-sm text-blue-500 bg-blue-100 rounded-full">/send</span>
              <h2 className="ml-2 text-xl font-bold">Quick Payment</h2>
            </div>
            <p className="mt-4 text-gray-700">Send funds to a basename, specify the amount, and choose whether to send to their linked bank account or crypto wallet</p>
          </div>

          {/* Grid item 2 */}
          <div className="p-4">
            <div className="flex items-center">
              <span className="px-4 py-2 text-sm text-blue-500 bg-blue-100 rounded-full">/batch send</span>
              <h2 className="ml-2 text-xl font-bold">Effective Mass Payment</h2>
            </div>
            <p className="mt-4 text-gray-700">
              Enter multiple Basenames and send funds to multiple recipients in one go. Perfect for payroll or bulk payouts, It manages currency conversion
            </p>
          </div>

          {/* Grid item 3 */}
          <div className="p-4">
            <div className="flex items-center">
            <span className="px-4 py-2 text-sm text-blue-500 bg-blue-100 rounded-full">/bridge</span>
              <h2 className="ml-2 text-xl font-bold">Instant Access to Funds</h2>
            </div>
            <p className="mt-4 text-gray-700">
              Lets you transfer tokens between blockchains. Whether you're moving assets to the Base chain or sending them elsewhere
            </p>
          </div>

        </div>
      </div>

       {/* Transaction section  */}

     <div className="container px-24 py-8 mx-auto">
        <div className="grid items-start grid-cols-1 gap-10 lg:grid-cols-2">          
          {/* Left column: Heading and paragraph */}
          <div>
            <h2 className="mt-16 mb-4 text-5xl font-bold">Execute transactions 
Accross Platforms</h2>
            <p className="w-1/2 text-gray-700">
             Manage payments without leaving conversations. 
Whether from Discord, Whatsapp or Telegram
            </p>
          </div>

          {/* Right column: Image */}
          <div className="flex items-center justify-center p-16">
            <Image
              src={send} 
              alt="Description of the image"
              width={500}
              height={300}
              className="rounded-lg"
            />
          </div>
        </div>
     </div>

     

       
     </div>
    </div>
    
    {/* footer  */}
    <div className="w-full bg-black">
      
    </div>
      
    </div>
  );
}
