import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Projects from './pages/Projects';
import { Reset } from 'styled-reset';
import styled from 'styled-components';
import useCurrentMedia from './hooks/useCurrentMedia';

function App() {
  const value = useCurrentMedia({ method: 'display' });
  const width = typeof value === 'string' ? value : '';
  return (
    <BrowserRouter>
      <Reset />
      <Display $width={width}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects/*" element={<Projects />} />
        </Routes>
      </Display>
    </BrowserRouter>
  );
}

const Display = styled.div<{ $width: string }>`
  width: ${(props) => props.$width};
  height: fit-content;
  margin-left: auto;
  margin-right: auto;
`;

export default App;
