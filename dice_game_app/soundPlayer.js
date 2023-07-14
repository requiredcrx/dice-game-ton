// soundPlayer.js

import { Howl } from 'howler';
import { useEffect } from 'react';

export default function SoundPlayer() {

  useEffect(() => {
    const sfx = {
      roll: new Howl({ src: './roll.mp3' })  
      // Other sounds 
    }
  }, []);

  const play = (name) => {
    sfx[name].play();
  }

  return { play };

}
