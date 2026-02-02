import { generateMnemonic, mnemonicToSeedSync, validateMnemonic } from "bip39";
import { derivePath } from "ed25519-hd-key";
import nacl from "tweetnacl";
import { Keypair } from "@solana/web3.js";

export const generateSeedPhrase = (req, res) => {
  const seedPhrase = generateMnemonic();

  res.status(200).json({
    success: true,
    seedPhrase,
  });
};

export const generateWallet = (req, res) => {
    const { seedPhrase, coin_type = 501, walletNum = 0 } = req.body;
    console.log (seedPhrase, coin_type, walletNum);
    if (!seedPhrase) {
        return res.status(400).json({
        error: "Seed phrase not provided",
        });
    }

    if (!validateMnemonic(seedPhrase)) {
        return res.status(400).json({
        error: "Invalid seed phrase",
        });
    }

    // Convert mnemonic → seed
    const seed = mnemonicToSeedSync(seedPhrase);

    //derivation path
    const path = `m/44'/${coin_type}'/${walletNum}'/0'`;

    // Derive key
    const derivedSeed = derivePath(path, seed.toString("hex")).key;

    const keypair = Keypair.fromSecretKey(
        nacl.sign.keyPair.fromSeed(derivedSeed).secretKey
    );

    res.json({
        success: true,
        wallet: {
        publicKey: keypair.publicKey.toBase58(),
        secretKey: Buffer.from(keypair.secretKey).toString("hex"),
        },
    });
};
