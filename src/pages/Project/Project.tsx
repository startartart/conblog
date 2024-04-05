import styled from 'styled-components';
import { useLocation } from 'react-router-dom';
import { ProjectTemplate1, ProjectTemplate2, ProjectTemplate3 } from './index';
import BackLink from '../../components/Header/BackLink';

export default function Project() {
  const { state } = useLocation();

  // 임시 템플릿 설정
  // state.id % 3 === 1 ProjectTemplate1
  // state.id % 3 === 2 ProjectTemplate2
  // state.id % 3 === 0 ProjectTemplate3

  if (state === null) return <Layout>올바르지 않은 페이지입니다.</Layout>;

  return (
    <Layout>
      <ProjectHeader>
        <ProjectTitle>{state.content}</ProjectTitle>
        <BackLink location="/projects"></BackLink>
      </ProjectHeader>
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
  gap: 3rem;
`;

const ProjectHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 2rem;
`;

const ProjectTitle = styled.h1`
  font-size: 3rem;
`;
