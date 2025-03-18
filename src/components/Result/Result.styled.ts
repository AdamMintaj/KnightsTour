import styled from "@emotion/styled";
import { mediaQuery } from "styles/responsive";

export const Container = styled.div`
	width: 100%;
	height: 60%;
	grid-row: 2/3;
	text-align: center;
	display: flex;
	align-items: center;
	flex-direction: column;
	justify-content: space-evenly;

	@media (orientation: landscape) {
		grid-row: 1/2;
		grid-column: 2/3;
		align-self: center;
	}

	@media (${mediaQuery.tablet}) {
		font-size: 1.125rem;
	}

	@media (${mediaQuery.desktop}) {
		font-size: 1.25rem;
		max-width: 75%;
		margin: 0 auto;
	}
`;
