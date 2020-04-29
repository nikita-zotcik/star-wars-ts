import styled, { keyframes } from 'styled-components';

export const AboutContainer = styled.div`
  width: 80vw;
  border-radius: 1rem;
  background-color: black;

  @media (max-width: 575px) {
    width: 90vw;
  }
`;
export const TextWrapper = styled.div`
  color: yellow;
  position: relative;
  width: 20em;
  height: 6em;
  bottom: 0;
  left: 50%;
  margin-left: -10em;
  font-size: 250%;
  font-weight: bold;
  text-align: justify;
  overflow: hidden;
  transform-origin: 50% 100%;
  transform: perspective(300px) rotateX(25deg);

  @media (max-width: 575px) {
    min-height: 10em;
    font-size: 100%;
  }
  @media (min-width: 576px) and (max-width: 768px) {
    font-size: 140%;
  }

  @media (min-width: 769px) and (max-width: 1199px) {
    font-size: 200%;
  }

  &:after {
    position: relative;
    content: ' ';
    left: 0;
    right: 0;
    top: 0;
    bottom: 60%;
    background-image: linear-gradient(
      top,
      rgba(0, 0, 0, 1) 0%,
      transparent 100%
    );
    pointer-events: none;
  }
`;
const scroll = keyframes`
  0% {
    top: 100%;
  }
  100% {
     top: -170%;
  }
`;

export const Text = styled.div`
  position: relative;
  top: 100%;
  animation: ${scroll} 150s linear 0s infinite;
`;

export const Title = styled.h1`
  margin: 0;
  font-size: 5rem;
`;
