import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Projects from './pages/Projects';
import { Reset } from 'styled-reset';

function App() {
  return (
    <BrowserRouter>
      <Reset />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects/*" element={<Projects />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
