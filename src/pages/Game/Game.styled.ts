import styled from "@emotion/styled";
import { boardSize } from "components/Board/Board.styled";
import { mediaQuery } from "styles/responsive";

export const Container = styled.main`
	overflow: hidden;
	position: relative;
	flex-grow: 1;
	padding-inline: 1.25rem;

	@media (${mediaQuery.desktop}) {
		padding-inline: 3rem;
	}
`;

export const InnerContainer = styled.div`
	height: 100%;
	display: grid;
	grid-template-rows: 27% 73%;
	max-width: 550px;
	margin: 0 auto;

	@media (${mediaQuery.landscapeSmallScreen}) {
		grid-template-columns: 50% 50%;
		grid-template-rows: auto;
		max-width: none;
	}

	@media (${mediaQuery.desktop}) {
		grid-template-columns: 33% 67%;
		grid-template-rows: auto;
		max-width: 1500px;
	}
`;

export const AsideContentWrapper = styled.div`
	width: ${boardSize.mobile};
	grid-row: 1/2;
	margin: 0 auto;
	display: flex;
	flex-direction: column;
	justify-content: center;
	gap: 5%;

	@media (${mediaQuery.landscapeSmallScreen}) {
		height: ${boardSize.landscapeSmallScreen};
		width: ${boardSize.landscapeSmallScreen};
		grid-column: 1/2;
		grid-row: initial;
		justify-content: flex-start;
		align-self: center;
		align-items: flex-start;
	}

	@media (${mediaQuery.desktop}) {
		overflow: auto;
		width: 350px;
		display: grid;
		gap: 0;
		justify-content: stretch;

		/* first row of the grid (for the control buttons) is aligned with the board's first row */
		grid-template-rows:
			calc(((100% - ${boardSize.desktop}) / 2) + ${boardSize.desktop} / 8)
			auto;
	}

	@media (${mediaQuery.desktopLarge}) {
		//prettier-ignore
		grid-template-rows:
			calc(((100% - ${boardSize.desktopLarge}) / 2) + ${boardSize.desktopLarge} / 8)
			auto;
	}
`;
