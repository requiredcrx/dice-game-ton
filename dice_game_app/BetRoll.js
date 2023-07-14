// BetRoll.js
import SoundPlayer from './soundPlayer';
import { useState } from 'react';
import DiceAnimation from './DiceAnimation';

export default function BetRoll({ onRoll }) {
    const { play } = SoundPlayer();
  

  const [bet, setBet] = useState(0);
  const BetRoll = () => {

    const [rolling, setRolling] = useState(false);

  const handleRoll = () => {
    play('roll');
    if (win) {
        play('win'); 
      } else {  
        play('lose');
      }
    setRolling(true);

    // Call contract 
    const roll = Math.random() * 6;

    onRoll(roll);

    setRolling(false);
    
  }

  return (
    <div>
      <input 
        value={bet}
        onChange={e => setBet(e.target.value)}  
      />

      <button
        disabled={!bet || rolling}
        onClick={handleRoll}
      >
        {rolling ? 'Rolling' : 'Roll'}  
      </button>
    </div>
  )

  }

}
