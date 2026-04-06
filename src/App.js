import { Route, Routes } from 'react-router-dom';
import './App.css';
import Landing from './pages/landing/Landing';
import SoftwarePage from './pages/software/SoftwarePage';
import AIPlatform from './pages/platform/AIPlatform';
import Robotics from './pages/robotics/Robotics';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Landing />} />
        <Route path='/software' element={<SoftwarePage />} />
        <Route path='/platform' element={<AIPlatform />} />
        <Route path='/robotics' element={<Robotics />} />
      </Routes>
    </div>
  );
}

export default App;
