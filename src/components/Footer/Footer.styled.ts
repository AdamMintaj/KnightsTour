import styled from "@emotion/styled";
import { mediaQuery } from "styles/responsive";

export const Container = styled.footer`
	text-align: center;
	border-top: 1px solid black;
	font-size: 0.625rem;
	padding: 0.875rem 0;

	@media (orientation: landscape) and (max-height: 500px) {
		display: none;
	}

	@media ${mediaQuery.desktop} {
		font-size: 0.75rem;
	}
`;
