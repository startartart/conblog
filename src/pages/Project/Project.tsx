import styled from 'styled-components';
import { useLocation } from 'react-router-dom';
import { ProjectTemplate1, ProjectTemplate2, ProjectTemplate3 } from './index';

export default function Project() {
  const { state } = useLocation();

  // 임시 템플릿 설정
  // state.id % 3 === 1 ProjectTemplate1
  // state.id % 3 === 2 ProjectTemplate2
  // state.id % 3 === 0 ProjectTemplate3
  return (
    <Layout>
      <ProjectTitle>{state.content}</ProjectTitle>
      {state.id % 3 === 1 && <ProjectTemplate1 />}
      {state.id % 3 === 2 && <ProjectTemplate2 />}
      {state.id % 3 === 0 && <ProjectTemplate3 />}
    </Layout>
  );
}

const Layout = styled.div`
  display: flex;
  flex-direction: column;
  margin: 2rem 0;
`;

const ProjectTitle = styled.h1`
  font-size: 3rem;
`;
