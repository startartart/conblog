import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home/Home';
import Projects from './pages/Projects';
import Project from './pages/Project/Project';
import Posts from './pages/Posts';
import Post from './pages/Post/Post';
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
          <Route path="/projects" element={<Projects />} />
          <Route path="/project/*" element={<Project />} />
          <Route path="/posts" element={<Posts />} />
          <Route path="/post/*" element={<Post />} />
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
