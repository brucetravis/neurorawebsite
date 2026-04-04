import { Route, Routes } from 'react-router-dom';
import './App.css';
import Landing from './pages/landing/Landing';
import SoftwarePage from './pages/software/SoftwarePage';
import AIPlatform from './pages/platform/AIPlatform';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Landing />} />
        <Route path='/software' element={<SoftwarePage />} />
        <Route path='/platform' element={<AIPlatform />} />
      </Routes>
    </div>
  );
}

export default App;
