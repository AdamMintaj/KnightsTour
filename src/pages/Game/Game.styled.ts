import styled from "@emotion/styled";

export const Container = styled.main`
	flex-grow: 1;
	padding: 0 1.25rem;
	position: relative;
`;

export const InnerContainer = styled.div`
	height: 100%;
	display: grid;
	grid-template-rows: 27% 73%;

	@media (orientation: landscape) and (max-height: 700px) {
		grid-template-columns: 50% 50%;
		grid-template-rows: auto;
	}

	// desktops
	/* @media (min-width: 1100px) { */
	/* grid-template-columns: 33vw 67vw; */
	// it's not very pretty, but this way the first row of the grid is aligned with the chessboard's first row
	/* grid-template-rows:
			calc((100% - min(70vh, 60vw)) / 2 + $cellWidthDesktop)
			auto; */
	/* } */

	//big desktops
	/* @media (min-width: 1440px) {
		max-width: 1920px;
		margin: 0 auto;
		grid-template-columns: 33% 67%;
		grid-template-rows:
			calc((100% - min(67vh, 60vw)) / 2 + $cellWidthDesktopBig)
			auto;
	} */
`;

export const AsideContentWrapper = styled.div`
	width: min(100%, 50vh);
	grid-row: 1/2;
	margin: 0 auto;
	display: flex;
	flex-direction: column;
	justify-content: center;
	gap: 5%;

	@media (orientation: landscape) and (max-height: 700px) {
		height: min(75vh, 45vw);
		width: min(75vh, 45vw);
		grid-column: 1/2;
		grid-row: initial;
		justify-content: flex-start;
		align-self: center;
		align-items: flex-start;
	}
`;
