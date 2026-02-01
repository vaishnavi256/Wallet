import { useState } from "react";

export default function ChainSelector() {
  const blockchains = [
        { name: "Solana", key: 501, active: "bg-purple-600 border-purple-600" },
        { name: "Ethereum", key: 60, active: "bg-indigo-600 border-indigo-600" },
    ];

  const [chain, setChain] = useState(
    localStorage.getItem("chain") || 0
  );

  const baseBtn =
    "px-5 py-2 rounded-xl font-semibold transition-all duration-100 border";

  const handleChainChange = (selectedChain) => {
    setChain(selectedChain);
    localStorage.setItem("chain", selectedChain);
  };

  return (
    <div className="flex gap-4">
      {blockchains.map((blockchain) => (
        <button
            key={blockchain.key}
            onClick={() => handleChainChange(blockchain.key)}
            className={`
                ${baseBtn}
                ${chain === blockchain.key ? `${blockchain.active} text-white scale-105` : 
                "bg-gray-100 dark:bg-gray-800 border-gray-300 dark:border-gray-600 hover:scale-105"
                }
            `}
            >
            {blockchain.name}
        </button>
      ))}
    </div>
  );
}
