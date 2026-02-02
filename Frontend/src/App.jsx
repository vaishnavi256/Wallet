import { useState } from "react";
import ThemeToggle from "./components/ThemeToggle";
import ChainSelector from "./components/ChainSelector";
import SeedPharse from "./components/SeedPharse";
import WalletCreation from "./components/WalletCreation";

export default function App() {
  const chain = localStorage.getItem("chain");

  return (
    <div className="min-h-screen bg-white text-black dark:bg-[#0A0A0A] dark:text-white transition-colors duration-300">

      {/* Navbar */}
      <div className="flex justify-between items-center p-10 shadow-md">
        <h1 className="text-2xl font-bold">Wallet</h1>
        <ThemeToggle />
      </div>

      {/* Seed Phrase */}
      {
        chain == null
        ? 
        // Bloclchain Select
          <div className="flex flex-col p-10 gap-8 h-[80vh] text-xl">
            <p className="text-2xl">Select Blockchain</p>
            <ChainSelector key={chain} />
          </div> 
        : 
        <div className="p-10">
          <SeedPharse/>
          {
            localStorage.getItem("seedPhrase") && <WalletCreation/>
          }   
        </div>
      }
    </div>
  );
}
