import styled from 'styled-components';
import { useState } from 'react';
import Text from '../../components/Text/Text';
import './info.css';

type InfoProps = {
  $current?: boolean;
  $vertical?: 'top' | 'bottom';
  $horizontal?: 'left' | 'right';
  $navigating?: boolean;
};

export default function Info({ $current }: InfoProps) {
  const [box, setBox] = useState(0);

  const handleChangeBox = (id: number) => {
    const infoNav = document.getElementById('info-nav');
    if (id !== 0 && box !== 0) {
      if (infoNav) {
        infoNav.classList.remove('slide-down');
        infoNav.classList.add('slide-up');
      }
      setBox(0);
      return;
    }
    setBox(id);
    if (infoNav) {
      infoNav.classList.remove('slide-up');
      infoNav.classList.add('slide-down');
    }
  };

  return (
    <>
      <Layout id="info-nav">
        <Circle $current={$current}>
          <Area
            $vertical="top"
            $horizontal="left"
            onClick={() => handleChangeBox(1)}
          />
          <Area
            $vertical="top"
            $horizontal="right"
            onClick={() => handleChangeBox(2)}
          />
          <Area
            $vertical="bottom"
            $horizontal="left"
            onClick={() => handleChangeBox(3)}
          />
          <Area
            $vertical="bottom"
            $horizontal="right"
            onClick={() => handleChangeBox(4)}
          />
          <Text $fontSize="2rem"></Text>
        </Circle>
      </Layout>
      {box === 1 && <Text>hello</Text>}
    </>
  );
}

const Layout = styled.div`
  width: 300px;
  height: 300px;
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 20;
`;

const Circle = styled.div<InfoProps>`
  display: flex;
  position: relative;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  border: 5px solid #222222;
  background-image: url('/assets/images/me.jpeg');
  background-size: 100%;

  @keyframes appear {
    0% {
      border-radius: 25%;
      width: 0;
      height: 0;
    }
    50% {
      width: 100%;
      height: 100%;
    }
    100% {
      border-radius: 50%;
    }
  }

  ${(props) => props.$current && `animation: appear 1.5s ease-in-out forwards;`}
`;

const Area = styled.div<InfoProps>`
  width: 50%;
  height: 50%;
  position: absolute;
  background-color: #ffffff;
  opacity: 0.2;

  &:hover {
    opacity: 0.5;
  }
  top: ${(props) => (props.$vertical === 'top' ? '0%' : '50%')};
  left: ${(props) => (props.$horizontal === 'left' ? '0%' : '50%')};

  ${(props) =>
    props.$vertical === 'top'
      ? props.$horizontal === 'left'
        ? `
        border-top-left-radius: 100% 100%;
        `
        : `
        transform: translateX(0%);
        border-top-right-radius: 100% 100%;
        `
      : props.$horizontal === 'right'
      ? `border-bottom-right-radius: 100% 100%;`
      : `border-bottom-left-radius: 100% 100%;`}
`;
