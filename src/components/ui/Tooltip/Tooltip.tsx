import { ReactComponent as Icon } from "assets/tooltip.svg";

import * as Styled from './Tooltip.styled';

interface TooltipProps {
  tip: string;
}

const Tooltip = ({ tip }: TooltipProps) => {
  return (
    <Styled.Button popoverTarget="mypopover" $tip={tip}>
      <Icon />
    </Styled.Button>
  );
}

export default Tooltip;