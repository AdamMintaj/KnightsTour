import styled from "@emotion/styled";

export const Container = styled.section`
	width: min(84%, 54vh);
	margin: 0 auto;
	/* grid-column: 1/2; */
	/* grid-row: 2/3; */
	/* align-self: flex-start; */
	display: grid;
	grid-template-columns: repeat(8, 1fr);
	grid-template-rows: repeat(8, 1fr);
	gap: 0.4rem;
`;
