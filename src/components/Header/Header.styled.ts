import styled from "@emotion/styled";
import { mediaQuery } from "styles/responsive";

export const Container = styled.header`
	border-bottom: 1px solid black;
	padding-inline: 1.25rem;

	@media (${mediaQuery.desktop}) {
		padding-inline: 3rem;
	}
`;

export const InnerContainer = styled.div`
	height: 82px;
	max-width: 1500px;
	margin: 0 auto;
	display: flex;
	justify-content: space-between;

	@media (${mediaQuery.landscapeSmallScreen}) {
		height: 13vh;
		max-height: 110px;
		justify-content: space-around;
	}

	@media (${mediaQuery.tablet}), (${mediaQuery.desktopLarge}) {
		height: 110px;
	}
`;
