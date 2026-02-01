import { useState } from "react";

export default function WalletCreation() {
  const [wallets, setWallets] = useState([]);

  function AddWallet() {
    const newWalletDetails = {
      wName: `Wallet${wallets.length + 1}`,
      privateKey: "dfghjkl",
      publicKey: "dfghjk",
      showPublicKey: false,
    };

    setWallets((prev) => [...prev, newWalletDetails]);
  }

  function ClearWallet() {
    setWallets([]);
    localStorage.removeItem("chain");
  }

  function togglePublicKey(index) {
    setWallets((prev) =>
      prev.map((wallet, i) =>
        i === index
          ? { ...wallet, showPrivKey: !wallet.showPrivKey }
          : wallet
      )
    );
  }

  function deleteWallet(index) {

    setWallets((prev) =>
        prev.filter((_, i) => i !== index)
    );
    }

  return (
    <div className="w-full mx-auto">
      {/* Buttons */}
      <div className="flex gap-4 p-4">
        <button
          onClick={AddWallet}
          className="px-5 py-2 rounded-xl transition-all duration-100 border bg-gray-100 dark:bg-gray-800 border-gray-300 dark:border-gray-600 hover:scale-105 hover:bg-green-900"
        >
          Add Wallet
        </button>

        <button
          onClick={ClearWallet}
          className="px-5 py-2 rounded-xl transition-all duration-100 border bg-gray-100 dark:bg-gray-800 border-gray-300 dark:border-gray-600 hover:scale-105 hover:bg-red-900"
        >
          Clear
        </button>
      </div>

      {/* Wallet Cards */}
      <div className=" flex flex-col gap-4 p-4">
        {wallets.map((wallet, index) => (
          <div
            key={index}
            className=" border border-gray-200 dark:border-gray-700 rounded-xl  p-4 shadow-sm bg-white dark:bg-gray-900 hover:shadow-md transition"
          >
            <div className="flex justify-between">
                <h2 className="text-lg font-semibold mb-2">
              {wallet.wName}
            </h2> <button 
                    onClick={() => deleteWallet(index)} 
                    className="px-4 py-1 rounded-xl transition-all duration-100 border bg-gray-100 dark:bg-black border-gray-300 dark:border-gray-600 hover:scale-105 hover:bg-red-900">
                        delete
                    </button>    
            </div>

            <hr className="border-t border-gray-200 dark:border-gray-700 my-4" />

            
            {/* Public Key*/}
            <p className="mt-5 font-mono text-gray-700 dark:text-gray-300 ">
              Public Key : {wallet.publicKey}
            </p>

            {/* Private Key */}
            <div className="flex items-center justify-between gap-3">
              <p className="font-mono  text-gray-700 dark:text-gray-300">
                Private Key : 
                {wallet.showPrivKey
                  ? " " + wallet.privateKey
                  : " ••••••••••••••••"}
              </p>

              <button
                onClick={() => togglePublicKey(index)}
                className="text-sm px-3 py-1 rounded-lg border hover:bg-gray-200 dark:hover:bg-gray-700 transition"
              >
                {wallet.showPrivKey ? "Hide" : "Show"}
              </button>
            </div>

          </div>
        ))}
      </div>
    </div>
  );
}
