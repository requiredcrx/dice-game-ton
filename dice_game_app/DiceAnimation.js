// DiceAnimation.js 

import { useSpring } from 'react-spring';

export default function DiceAnimation() {

  const [anim] = useSpring(() => ({ 
    to: { 
      x: 360, // tumbles  
    },
  });

  return (
    // Animated dice with useSpring
  );

});
