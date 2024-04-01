import styled from 'styled-components';
import useCurrentMedia from '../hooks/useCurrentMedia';

type ProjectLayoutProps = {
  $count: number;
};

export default function Projects() {
  const rowValue = useCurrentMedia({ method: 'row' });
  const count = typeof rowValue === 'number' ? rowValue : 0;
  return (
    <Layout>
      <Title>
        <LargeText>Projects Page</LargeText>
      </Title>
      <ProjectLayout $count={count}>
        <ProjectBox>1</ProjectBox>
        <ProjectBox>2</ProjectBox>
        <ProjectBox>3</ProjectBox>
        <ProjectBox>4</ProjectBox>
        <ProjectBox>5</ProjectBox>
        <ProjectBox>6</ProjectBox>
        <ProjectBox>7</ProjectBox>
        <ProjectBox>8</ProjectBox>
        <ProjectBox>9</ProjectBox>
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
