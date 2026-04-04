import { Route, Routes } from 'react-router-dom';
import './App.css';
import Landing from './pages/landing/Landing';
import SoftwarePage from './pages/software/SoftwarePage';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Landing />} />
        <Route path='/software' element={<SoftwarePage />} />
      </Routes>
    </div>
  );
}

export default App;
