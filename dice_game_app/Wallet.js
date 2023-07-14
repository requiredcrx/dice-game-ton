// Wallet.js

import { useState, useEffect } from 'react';
import { TonConnect } from 'tonconnect';

export default function Wallet() {
  
  const [provider, setProvider] = useState();
  const [address, setAddress] = useState('');

  useEffect(() => {
    const ton = new TonConnect();
    ton.connect().then(setProvider);
  }, []);

  useEffect(() => {
    if (provider) {
      provider.getAccounts().then(setAddress);
    }
  }, [provider]);

  const connect = async () => {
    await provider.ensureConnection(); 
    const accounts = await provider.getAccounts();
    setAddress(accounts[0]);
  }

  return (
    <div>
      <button onClick={connect}>
        {address ? 'Connected' : 'Connect'}  
      </button>
    </div>
  );

}
