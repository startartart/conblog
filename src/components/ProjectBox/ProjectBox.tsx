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
  cursor: pointer;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 6px -1px,
    rgba(0, 0, 0, 0.06) 0px 2px 4px -1px;
  &:hover {
    background-color: #f2f2f2;
  }
`;
