import styled, { keyframes, css } from 'styled-components';

const haloCardKeyframe = keyframes`
  0%, 100% {
    transform: none;
  }

  25% {
    transform: rotateZ(-3deg) rotateX(-7deg) rotateY(6deg)
  }

  66% {
    transform: rotateZ(3deg) rotateX(7deg) rotateY(-6deg)
  }
`;

const haloSparkleKeyframe = keyframes`
  0%, 5% {
    opacity: 0.1;
  }

  20% {
    opacity: 1;
  }

  100% {
    opacity: 0.1;
  }
`;

const haloGradientKeyframe = keyframes`
  0%, 100% {
    opacity: 0;
    background-position: 0% 0%;
  }

  8% {
    opacity: 0;
  }

  10% {
    background-position: 0% 0%;
  }

  19% {
    background-position: 100% 100%;
    opacity: 0.5;
  }

  35% {
    background-position: 100% 100%;
  }

  55% {
    background-position: 0% 0%;
    opacity: 0.3;
  }

  75% {
    opacity: 0;
  }

  100% {
    opacity: 0.1;
  }
`;

export const StyledHoloCard = styled.div(
  ({
    active,
    activeBackgroundPosition,
  }: {
    active: boolean;
    activeBackgroundPosition: {
      tp: number;
      lp: number;
    };
  }) => [
    css`
      width: 320px;
      height: 446px;
      background-color: #211799;
      background-image: url(https://images.pokemontcg.io/xy2/12_hires.png);
      background-size: cover;
      background-repeat: no-repeat;
      background-position: center;
      border-radius: 15px;
      box-shadow: -3px -3px 3px 0 rgba(#26e6f7, 0.3),
        3px 3px 3px 0 rgba(#f759e4, 0.3), 0 0 6px 2px rgba(#ffe759, 03),
        0 35px 25px -15px rgba(0, 0, 0, 0.3);
      position: relative;
      overflow: hidden;
      display: inline-block;
      vertical-align: middle;
      margin: 20px 10px;
      animation: ${haloCardKeyframe} 15s ease infinite;

      &:before,
      &:after {
        content: '';
        position: absolute;
        left: 0;
        right: 0;
        top: 0;
        bottom: 0;
        background-position: 0% 0%;
        background-repeat: no-repeat;
        background-size: 300% 300%;
        mix-blend-mode: color-dodge;
        opacity: 0.2;
        z-index: 1;
        animation: ${haloGradientKeyframe} 15s ease infinite;
        background-image: linear-gradient(
          115deg,
          transparent 0%,
          rgb(0, 231, 255) 30%,
          rgb(255, 0, 231) 70%,
          transparent 100%
        );
      }

      &:after {
        background-image: url('https://s3-us-west-2.amazonaws.com/s.cdpn.io/13471/sparkles.gif');
        position: center;
        background-size: 180%;
        mix-blend-mode: color-dodge;
        opacity: 1;
        z-index: 1;
        animation: ${haloSparkleKeyframe} 15s ease infinite;
      }
    `,
    active &&
      `
  :before {
    opacity: 1;
    animation: none;
    transition: none;
    background-image: linear-gradient(
      115deg,
      transparent 0%,
      transparent 25%,
      rgba(0, 231, 255, 0.7) 45%,
      rgba(255, 0, 231, 0.7) 55%,
      transparent 70%,
      transparent 100%
    );
    background-position: ${activeBackgroundPosition.lp}% ${activeBackgroundPosition.tp}%;
  }
`,
  ]
);
