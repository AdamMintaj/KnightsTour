import styled from "@emotion/styled";
import mediaQuery from "styles/mediaQueries";

export const Container = styled.ul`
	width: 100%;
	display: flex;
	flex-direction: column;
	gap: 0.75rem;
	max-width: 500px;

	@media ${mediaQuery.desktop} {
		overflow: auto;
		scrollbar-width: thin;
		padding-right: 1rem;
		margin-bottom: 1rem;
		max-width: 320px;
	}
`;
