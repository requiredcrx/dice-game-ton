// App.js
import { init } from '@twa-dev/sdk';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import SoundPlayer from './soundPlayer';
// Component Imports
import Home from './Home';
import Leaderboard from './Leaderboard';
import Info from './Info';

// State Imports
import { rolls, addRoll } from './state';

function App() {

  // Initialize SDK
  useEffect(() => {
    init();
  }, []);


  const [showInfo, setShowInfo] = useState(false);
  const { play } = SoundPlayer();
  play('music'); // Play background track
  

  return (
    <Router>
    
      {/* Info Modal */}
      {showInfo && (
        <div className="modal">
          <Info/>
          <button onClick={() => setShowInfo(false)}>Close</button>
        </div>
      )}

      {/* Page Routes */}  
      <Routes>

        <Route path="/" element={
          <Home onRoll={addRoll} />
        } />

        <Route path="/leaderboard" element={
          <Leaderboard data={rolls} /> 
        } />

      </Routes>

    </Router>
  );

}

export default App;
