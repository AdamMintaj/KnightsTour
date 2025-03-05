import styled from "@emotion/styled";

export const Container = styled.section`
	width: min(100%, 50vh);
	grid-row: 2/3;
	align-self: flex-start;
	display: grid;
	margin: 0 auto;
	grid-template-columns: repeat(8, 1fr);
	grid-template-rows: repeat(8, 1fr);
	gap: 0.4rem;

	@media (orientation: landscape) and (max-height: 700px) {
		grid-column: 2/3;
		grid-row: initial;
		width: min(75vh, 45vw);
		align-self: center;
	}

	// tablets
	/* @media (min-width: 700px) and (min-height: 700px) {
		align-self: center;
		gap: 0.6rem;
	} */

	// desktops
	/* @media (min-width: 1100px) {
		padding: 0;
		grid-column: 2/3;
		grid-row: 1/3;
		gap: 0.6rem;
		width: min(70vh, 90%);
		margin: 0 auto;
	} */

	//big desktops
	/* @media (min-width: 1440px) {
		gap: 1rem;
		max-width: 650px;
	} */
`;
