import styled from "@emotion/styled";
import { boardSize } from "components/Board/Board.styled";
import mediaQuery from "styles/mediaQueries";

export const Container = styled.div`
	height: 100%;

	@media ${mediaQuery.landscapeSmallScreen} {
		width: ${boardSize.landscapeSmallScreen};
	}

	@media ${mediaQuery.desktop} {
		width: 33%;
	}
`;

export const Wrapper = styled.div`
	height: 100%;

	/* In the logo svg the title has empty space on both sides that each make 15% of the svg's total width. 
	It makes the logo look like it's not aligned with the main content even though it is. 
	The 15% translation counters this effect. */
	div {
		translate: -15%;
	}

	@media ${mediaQuery.landscapeSmallScreen} {
		width: ${boardSize.landscapeSmallScreen};
	}

	@media ${mediaQuery.desktop} {
		width: min(100%, 350px);
		margin: 0 auto;
	}
`;
