import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import { ReactNode } from 'react';

type BackLinkProps = {
  location?: string;
  children?: ReactNode;
};
export default function BackLink({ location = '/', children }: BackLinkProps) {
  const navigate = useNavigate();

  return <Box onClick={() => navigate(location)}>{children}</Box>;
}

const Box = styled.div`
  background-color: #222222;
  width: 2rem;
  height: 2rem;
  border-radius: 50%;
  cursor: pointer;
`;
