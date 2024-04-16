import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import HomeSvg from '../../assets/home.svg?react';
import SearchSvg from '../../assets/search.svg?react';
import { HeaderProps } from './Header.types';
import useScrollDirection from '../../hooks/useScrollDirection';

export default function Header({ title, location = '/' }: HeaderProps) {
  const navigate = useNavigate();
  const scrollDirection = useScrollDirection();

  return (
    <HeaderLayout $isDown={scrollDirection === 'down'}>
      <Title>{title}</Title>
      <OptionBox>
        <SearchSvg
          style={{ cursor: 'pointer' }}
          width={'2.5rem'}
          onClick={() => navigate('/search')}
        />
        <HomeSvg
          width={'2.5rem'}
          style={{ cursor: 'pointer' }}
          onClick={() => navigate(location)}
        />
      </OptionBox>
    </HeaderLayout>
  );
}

const HeaderLayout = styled.div<{ $isDown: boolean }>`
  display: flex;
  justify-content: space-between;
  align-items: center;

  width: 100%;
  padding: 2rem 0;

  position: sticky;
  transition: all 0.5s;
  top: ${(props) => (props.$isDown ? '-112px' : '0')};

  background-color: #f2f2f2;

  left: 0;
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
