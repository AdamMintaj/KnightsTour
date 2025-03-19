import styled from "@emotion/styled";
import { mediaQuery } from "styles/responsive";

export const boardSize = {
	mobile: "min(100%, 50vh)",
	landscapeSmallScreen: "min(75vh, 45vw)",
	desktop: "min(70vh, 500px)",
	desktopLarge: "min(70vh, 550px)",
};

export const Container = styled.section`
	width: ${boardSize.mobile};
	grid-row: 2/3;
	align-self: flex-start;
	display: grid;
	margin: 0 auto;
	grid-template-columns: repeat(8, 1fr);
	grid-template-rows: repeat(8, 1fr);
	gap: 0.4rem;

	@media (orientation: landscape) {
		grid-column: 2/3;
		grid-row: initial;
		align-self: center;
	}

	@media ${mediaQuery.landscapeSmallScreen} {
		width: ${boardSize.landscapeSmallScreen};
	}

	@media ${mediaQuery.tablet} {
		gap: 0.6rem;
	}

	@media ${mediaQuery.desktop} {
		width: ${boardSize.desktop};
		gap: 0.6rem;
	}

	@media ${mediaQuery.desktopLarge} {
		width: ${boardSize.desktopLarge};
	}
`;
