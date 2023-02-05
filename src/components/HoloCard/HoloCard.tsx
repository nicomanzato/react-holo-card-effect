import React, { useRef, useState } from 'react';
import { StyledHoloCard } from './HoloCard.styles';

interface Props {
  children?: React.ReactNode;
}

export const HoloCard = ({ children }: Props) => {
  const [hover, setHover] = useState(false);
  const [, setError] = useState<any>();
  const [activeBackgroundPosition, setActiveBackgroundPosition] = useState({
    tp: 0,
    lp: 0,
  });
  const ref = useRef<HTMLInputElement>(null);

  const handleOnMouseOver = (
    event: React.MouseEvent<HTMLDivElement, MouseEvent>
  ) => {
    try {
      setHover(true);

      const card = ref.current;
      const l = (event as any).offsetX;
      const t = (event as any).offsetY;
      const h = card?.height ? card?.height : 0;
      const w = card?.width ? card?.width : 0;

      const lp = Math.abs(Math.floor((100 / w) * l) - 100);
      const tp = Math.abs(Math.floor((100 / h) * t) - 100);

      setActiveBackgroundPosition({ lp, tp });
    } catch (e) {
      console.log(e);
      setError(e);
    }
  };

  const handleOnMouseOut = () => {
    setHover(false);
  };

  return (
    <StyledHoloCard
      ref={ref}
      active={hover}
      activeBackgroundPosition={activeBackgroundPosition}
      onMouseEnter={handleOnMouseOver}
      onMouseOut={handleOnMouseOut}
    >
      {children}
    </StyledHoloCard>
  );
};
