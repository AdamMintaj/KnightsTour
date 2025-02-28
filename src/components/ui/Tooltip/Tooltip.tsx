import { ReactComponent as Icon } from "assets/tooltip.svg";
import { useId, useEffect } from "react";

import './tooltip.css';

interface TooltipProps {
  tip: string;
}

const tooltipWidth = 150;

// emotion 11 doesn't recognise popover attributes, so the component is styled with just css
// css anchor isn't fully supported yet so there's a workaround to position the popover
const Tooltip = ({ tip }: TooltipProps) => {
  const popoverId = useId();
  const containerId = useId();

  useEffect(() => {
    const popover = document.getElementById(popoverId);
    if (!popover) return;

    function setPopoverOffset() {
      const containerRight = document.getElementById(containerId)?.getBoundingClientRect().right;
      if (!containerRight) return;

      const availableSpace = window.innerWidth - containerRight;
      popover!.style.translate = availableSpace < tooltipWidth ? `-${tooltipWidth - availableSpace}px` : '12px -9px';
    }

    function onBeforeToggle() {
      setPopoverOffset();
      popover!.removeEventListener('beforetoggle', onBeforeToggle);
    }

    popover.addEventListener('beforetoggle', onBeforeToggle);
    window.addEventListener('resize', setPopoverOffset);

    return () => {
      window.removeEventListener('resize', setPopoverOffset);
    }
  }, [])

  return (
    <div id={containerId} className="container">
      <button popoverTarget={popoverId} className="button">
        <Icon />
      </button>
      <div id={popoverId} style={{ width: `${tooltipWidth}px` }} className="popover" popover="auto">{tip}</div>
    </div>
  );
}

export default Tooltip;