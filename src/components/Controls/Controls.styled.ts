import styled from "@emotion/styled";
import { mediaQuery } from "styles/responsive";

export const Container = styled.aside`
	display: flex;
	gap: 1rem;

	@media ${mediaQuery.desktop} {
		align-self: flex-end;
	}

	@media ${mediaQuery.desktopLarge} {
		margin-bottom: 1rem;
	}
`;
