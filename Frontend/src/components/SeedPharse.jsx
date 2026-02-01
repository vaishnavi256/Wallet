import { useState } from "react";

export default function SeedPhrase() {
  const [seedPhrase, setSeedPhrase] = useState("");
  const [copied, setCopied] = useState(false);
  const [showSeed, setShowSeed] = useState(false);

  const generateSeedPhrase = () => {
    const words = [
      "apple","banana","crypto","wallet","block","chain",
      "seed","phrase","secure","random","token","node"
    ];

    let phrase = [];
    for (let i = 0; i < 12; i++) {
      phrase.push(words[Math.floor(Math.random() * words.length)]);
    }

    const finalPhrase = phrase.join(" ");
    setSeedPhrase(finalPhrase);
    localStorage.setItem("seedPhrase", finalPhrase);
  };

  const copyToClipboard = async () => {
    await navigator.clipboard.writeText(seedPhrase);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="p-4">

      {/* INPUT / GENERATE */}
      {!seedPhrase && (
        <div className="flex gap-4">
          <input
            type={showSeed ? "text" : "password"}
            value={seedPhrase}
            onChange={(e) => setSeedPhrase(e.target.value)}
            placeholder="Paste your seed phrase here"
            className="w-full p-4 border rounded-lg dark:bg-[#111]"
          />

          <button
            onClick={() => setShowSeed(!showSeed)}
            className="px-4 border rounded-lg"
          >
            {showSeed ? "Hide" : "Show"}
          </button>

          <button
            onClick={generateSeedPhrase}
            className="px-5 py-2 rounded-xl border bg-gray-100 dark:bg-gray-800"
          >
            Generate
          </button>
        </div>
      )}

      {/* DISPLAY SEED PHRASE */}
      {seedPhrase && (
        <div className="flex gap-4 mt-4">
          <div className="w-full rounded-xl border bg-gray-50 dark:bg-[#111] p-4 font-mono text-sm">
            {showSeed ? seedPhrase : "••••••••••••••••••••••"}
          </div>

          <button
            onClick={() => setShowSeed(!showSeed)}
            className="px-4 py-2 rounded-xl border"
          >
            {showSeed ? "Hide" : "Show"}
          </button>

          <button
            onClick={copyToClipboard}
            className="px-5 py-2 rounded-xl border hover:bg-green-800 hover:text-white"
          >
            {copied ? "Copied!" : "Copy"}
          </button>
        </div>
      )}
    </div>
  );
}
