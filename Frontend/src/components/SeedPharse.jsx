import { useState } from "react";
import axios from "axios";

export default function SeedPhrase() {
  const [seedPhrase, setSeedPhrase] = useState(localStorage.getItem("seedPhrase") || "");
  const [copied, setCopied] = useState(false);
  const [showSeed, setShowSeed] = useState(false);

  const generateSeedPhrase = async () => {
    try {
      const res = await axios.get(
        "http://localhost:3000/generateSeedPhrase"
      );

      if (res.data.success) {
        setSeedPhrase(res.data.seedPhrase);
        localStorage.setItem("seedPhrase", res.data.seedPhrase);
        localStorage.setItem ("wallets", []);
        window.location.reload();
      }
    } catch (error) {
      console.error("Error generating seed phrase", error);
    }
  };

  const copyToClipboard = async () => {
    await navigator.clipboard.writeText(seedPhrase);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="p-4">

      {/* INPUT */}
      <div className="flex gap-4">
        <input
          type={showSeed ? "text" : "password"}
          value={seedPhrase}
          onChange={(e) => setSeedPhrase(e.target.value)}
          placeholder="Paste or generate seed phrase"
          className="w-full p-4 border rounded-lg dark:bg-[#111]"
        />

        {seedPhrase && <button
          onClick={() => setShowSeed(!showSeed)}
          className="px-4 border rounded-lg"
        >
          {showSeed ? "Hide" : "Show"}
        </button>}

        {
          !seedPhrase 
          ?
          <button
          onClick={generateSeedPhrase}
            className="px-4 border rounded-lg"
          >
            Generate
          </button>
          :
          <button
            onClick={copyToClipboard}
            className="px-4 border rounded-lg"
          >
            {copied ? "Copied!" : "Copy"}
          </button>
        }
      </div>
    </div>
  );
}
