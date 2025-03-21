import { ReactComponent as Icon } from "assets/tooltip.svg";
import { useEffect, useState, useRef } from "react";

import * as Styled from './Tooltip.styled';

interface TooltipProps {
  tip: string;
}

const tooltipWidth = 150;

// css anchor isn't fully supported yet so there's a workaround to position the tooltip
const Tooltip = ({ tip }: TooltipProps) => {
  const buttonRef = useRef<HTMLButtonElement>(null);
  const [tooltipOffset, setTooltipOffset] = useState('');

  useEffect(() => {
    const button = buttonRef.current;
    if (!button) return;

    const calculateOffset = () => {
      const containerRight = button.getBoundingClientRect().right;

      const availableSpace = window.innerWidth - containerRight - 30;
      setTooltipOffset(availableSpace < tooltipWidth ? `${availableSpace - tooltipWidth}px 10px` : '');
    }

    const onBeforeClick = () => {
      calculateOffset();
      button.removeEventListener('pointerdown', onBeforeClick);
    }

    button.addEventListener('pointerdown', onBeforeClick);
    window.addEventListener('resize', calculateOffset);

    return () => {
      window.removeEventListener('resize', calculateOffset);
    }
  }, [])

  return (
    <Styled.Button ref={buttonRef} tabIndex={0} $tip={tip} $tooltipOffset={tooltipOffset}>
      <Icon />
    </Styled.Button>
  );
}

export default Tooltip;