import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import HomeSvg from '../../assets/home.svg?react';
import SearchSvg from '../../assets/search.svg?react';
import { HeaderProps } from './Header.types';

export default function Header({ title, location = '/' }: HeaderProps) {
  const navigate = useNavigate();
  return (
    <HeaderLayout>
      <Title>{title}</Title>
      <OptionBox>
        <SearchSvg width={'2.5rem'} onClick={() => navigate('/search')} />
        <HomeSvg width={'2.5rem'} onClick={() => navigate(location)} />
      </OptionBox>
    </HeaderLayout>
  );
}

const HeaderLayout = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  width: 100%;
  padding: 2rem 0;
`;

const OptionBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 2rem;
  gap: 1rem;
`;

const Title = styled.h1`
  font-size: 3rem;
  margin: 0 2rem;
`;
