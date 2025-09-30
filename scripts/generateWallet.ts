#!/usr/bin/env node
import { generatePrivateKey, privateKeyToAccount } from 'viem/accounts';

async function generateWallet() {
  // Generate a new private key
  const privateKey = generatePrivateKey();
  const account = privateKeyToAccount(privateKey);

  // Output to stdout
  console.log(`RECEIVER_WALLET_ADDRESS=${account.address}
PAYMENT_NETWORK=base-sepolia
FACILITATOR_URL=https://x402.org/facilitator
PORT=3022

# Private key (keep this secure!):
# ${privateKey}`);
}

generateWallet().catch(console.error);