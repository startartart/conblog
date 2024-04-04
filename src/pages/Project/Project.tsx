import styled from 'styled-components';
import { useLocation, useNavigate } from 'react-router-dom';
import { ProjectTemplate1, ProjectTemplate2, ProjectTemplate3 } from './index';

export default function Project() {
  const navigate = useNavigate();
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
        {/* BackLink -> 뒤로가기 아이콘으로 바꿀 것 */}
        <BackLink onClick={() => navigate('/projects')}></BackLink>
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

const BackLink = styled.div`
  background-color: #222222;
  width: 2rem;
  height: 2rem;
  border-radius: 50%;
  cursor: pointer;
`;
