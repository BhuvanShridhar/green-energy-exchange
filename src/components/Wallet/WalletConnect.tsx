import React, { useState } from "react";
import { ethers } from "ethers";

const WalletConnect = () => {
  const [walletAddress, setWalletAddress] = useState<string>("");

  const connectWallet = async () => {
    if (window.ethereum) {
      try {
        const provider = new ethers.BrowserProvider(window.ethereum);
        await window.ethereum.request({ method: 'eth_requestAccounts' });
        const signer = await provider.getSigner();
        const userAddress = await signer.getAddress();
        setWalletAddress(userAddress);
        console.log('Connected:', userAddress);
      } catch (err) {
        console.error('Wallet connection failed:', err);
      }
    } else {
      alert('Please install MetaMask to connect your wallet');
    }
  };

  return (
    <div className="p-4 text-center">
      <button 
        onClick={connectWallet}
        className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700"
      >
        Connect Wallet
      </button>
      {walletAddress && (
        <p className="mt-4">Wallet Address: {walletAddress}</p>
      )}
    </div>
  );
};

export default WalletConnect;
