import styled from 'styled-components';
import { ProjectBoxProps } from './ProjectBox.types';

export default function ProjectBox({ idx, onClick }: ProjectBoxProps) {
  return <Box onClick={() => onClick(idx)}>{idx.content}</Box>;
}

const Box = styled.li`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 15rem;
  border: 1px solid;
  cursor: pointer;
  &:hover {
    background-color: #f2f2f2;
  }
`;
