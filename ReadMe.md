# Telegram Dice Game
This project implements a dice rolling game with a blockchain-backed component using the Telegram API. Players can connect a wallet, place bets, roll dice, win/lose based on the result, and view a leaderboard of top rollers.

## Features
- TON wallet connectivity via TonConnect library
- Place bets with associated odds
- Random dice rolls simulated via JavaScript
- Winnings/losses calculated based on bet amount and roll
- Leaderboard to view rankings of top players
- Help information describing gameplay
- Customizable settings like sound volume
- Share big wins to Telegram and Twitter
- Setup
- To run the project locally:

## Install dependencies: npm install
- Start development server: npm start
- Open http://localhost:3000 to view app

## Architecture
The app is built using:
- React - For frontend UI
- JavaScript - For logic and utility functions
- HTML/CSS - Styling
- TON Blockchain - For wallet connectivity
- Telegram API - For social sharing and login

## Directory structure:
- App.js - Main entrypoint and router
- BetRoll.js - Place bets and roll dice
- Wallet.js - Connect TON wallet
- Leaderboard.js - View rankings
- Info.js - Help modal content
- SoundPlayer.js - Background audio
- DiceAnimation.js - Simulate dice tumble on roll

## Snippets
### Wallet connectivity (Wallet.js)
This uses the TonConnect library to connect a user's TON wallet. The provider and address are saved to state.
```py
const [provider, setProvider] = useState();
const [address, setAddress] = useState('');

useEffect(() => {
  const ton = new TonConnect();
  ton.connect().then(setProvider);
}, []);
```

## Betting Screen
User enters bet amount
- Click "Roll Dice" to roll
- Dice animation shows tumbling dice
[Betting Screen]


## Win Screen
- User wins 3x bet amount
- Winning sound and confetti animation
- Share to Telegram and Twitter buttons
- Win Screen

## Leaderboard Screen
- Lists top 10 rollers by name and total rolls
- Click username to view profile and share
- Leaderboard Screen
