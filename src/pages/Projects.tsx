import styled from 'styled-components';
import useCurrentMedia from '../hooks/useCurrentMedia';
import { useNavigate } from 'react-router-dom';

type ProjectLayoutProps = {
  $count: number;
};

type ProjectListProps = {
  id: number;
  content: string;
};

const ProjectList = [
  { id: 1, content: '프로젝트1' },
  { id: 2, content: '프로젝트2' },
  { id: 3, content: '프로젝트3' },
  { id: 4, content: '프로젝트4' },
  { id: 5, content: '프로젝트5' },
  { id: 6, content: '프로젝트6' },
  { id: 7, content: '프로젝트7' },
  { id: 8, content: '프로젝트8' },
  { id: 9, content: '프로젝트9' },
  { id: 10, content: '프로젝트10' },
  { id: 11, content: '프로젝트11' },
];

export default function Projects() {
  const rowValue = useCurrentMedia({ method: 'row' });
  const count = typeof rowValue === 'number' ? rowValue : 0;
  const navigate = useNavigate();

  const goProjectPage = (idx: ProjectListProps) => {
    navigate(`/project/${idx.id}`, { state: { content: idx.content } });
  };

  return (
    <Layout>
      <Title>
        <LargeText>Projects Page</LargeText>
      </Title>
      <ProjectLayout $count={count}>
        {ProjectList.map((idx) => {
          return (
            <ProjectBox key={idx.id} onClick={() => goProjectPage(idx)}>
              {idx.content}
            </ProjectBox>
          );
        })}
      </ProjectLayout>
    </Layout>
  );
}

const Layout = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 2rem;
  gap: 2rem;
  height: 100%;
`;

const Title = styled.div``;

const LargeText = styled.h1`
  color: #222222;
  font-size: 3rem;
`;

const ProjectLayout = styled.ul<ProjectLayoutProps>`
  display: grid;
  grid-gap: 2rem;
  width: 100%;
  grid-template-columns: repeat(
    ${(props) => props.$count},
    calc(
      calc(100% / ${(props) => props.$count}) - 2rem *
        calc(${(props) => props.$count - 1}) / ${(props) => props.$count}
    )
  );
`;

const ProjectBox = styled.li`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 15rem;
  border: 1px solid;
`;
