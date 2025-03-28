import { ReactComponent as DefaultIcon } from "assets/tooltip.svg";
import { useEffect, useState, useRef } from "react";

import * as Styled from './Tooltip.styled';

interface TooltipProps {
  tip: string;
  customIcon?: React.ElementType;
}

const tooltipWidth = 150;

// css anchor isn't fully supported yet so there's a workaround to position the tooltip
const Tooltip = ({ tip, customIcon }: TooltipProps) => {
  const buttonRef = useRef<HTMLButtonElement>(null);
  const [tooltipOffset, setTooltipOffset] = useState('');
  const [tooltipOpen, setTooltipOpen] = useState(false);

  const Icon = customIcon || DefaultIcon;

  // this effect prevents tooltip from overflowing if it's close the viewport's edge
  useEffect(() => {
    const button = buttonRef.current;
    if (!button) return;

    const calculateOffset = () => {
      const containerRight = button.getBoundingClientRect().right;
      const availableSpace = window.innerWidth - containerRight - 30;
      setTooltipOffset(availableSpace < tooltipWidth ? `${availableSpace - tooltipWidth}px 10px` : '');
    }

    button.addEventListener('pointerdown', calculateOffset);
    window.addEventListener('resize', calculateOffset);

    return () => {
      window.removeEventListener('resize', calculateOffset);
      button.removeEventListener('pointerdown', calculateOffset);
    }
  }, []);


  // This effect makes it possible to close tooltip by clicking anywhere on the screen
  useEffect(() => {
    const button = buttonRef.current;
    if (!button) return;

    if (tooltipOpen) {
      const closeTooltip = (e: PointerEvent) => {
        if (!button.contains(e.target as Node)) {
          setTooltipOpen(false);
          document.removeEventListener('pointerdown', closeTooltip);
        }
      }

      document.addEventListener('pointerdown', closeTooltip);
      return () => document.removeEventListener('pointerdown', closeTooltip);
    }
  }, [tooltipOpen]);

  function handleClick() {
    setTooltipOpen(prevValue => !prevValue)
  };

  return (
    <Styled.Container>
      <Styled.Button
        onClick={handleClick}
        ref={buttonRef}
        tabIndex={0}
      >
        <Icon />
      </Styled.Button>
      <Styled.TipContainer
        $tooltipOffset={tooltipOffset}
        $visible={tooltipOpen}
        $width={tooltipWidth}
      >
        {tip}
      </Styled.TipContainer>
    </Styled.Container>
  );
}

export default Tooltip;