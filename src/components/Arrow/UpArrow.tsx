import styled from 'styled-components';
import ArrowSvg from '../../assets/arrow.svg?react';
import { useState, useEffect } from 'react';

export default function UpArrow() {
  const [showButton, setShowButton] = useState(false);

  const scrollToTop = () => {
    window.scroll({
      top: 0,
      behavior: 'smooth',
    });
  };

  useEffect(() => {
    const handleShowButton = () => {
      if (window.scrollY > window.innerHeight) setShowButton(true);
      else setShowButton(false);
    };

    window.addEventListener('scroll', handleShowButton);
    return () => {
      window.removeEventListener('scroll', handleShowButton);
    };
  }, []);
  return (
    showButton && (
      <ArrowBox>
        <StyledArrow onClick={scrollToTop} />
      </ArrowBox>
    )
  );
}

const ArrowBox = styled.div`
  position: fixed;
  width: 6rem;
  height: 6rem;
  border-radius: 50%;
  right: 3%;
  bottom: 3%;
  opacity: 0.5;
`;
const StyledArrow = styled(ArrowSvg)`
  width: 100%;
  height: 100%;
  position: relative;
  z-index: 999;
  cursor: pointer;
`;
