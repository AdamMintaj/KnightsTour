import styled from "@emotion/styled";
import mediaQuery from "styles/mediaQueries";

export const Container = styled.main`
	flex-grow: 1;
	display: flex;
	justify-content: center;
	padding-inline: 1.25rem;
`;

export const InnerContainer = styled.div`
	display: flex;
	flex-direction: column;
	text-align: center;
	justify-content: center;
	align-items: center;
`;

export const Header = styled.h1`
	font-weight: 400;
	font-size: 1.75rem;

	@media ${mediaQuery.tablet}, ${mediaQuery.desktop} {
		font-size: 2rem;
	}
`;

export const Image = styled.img`
	max-width: 150px;
	user-select: none;
	margin-block: 1.5rem;

	@media ${mediaQuery.tablet}, ${mediaQuery.desktop} {
		max-width: 250px;
	}
`;

export const ErrorMessage = styled.p`
	font-style: italic;
	margin-top: 1rem;
	margin-bottom: 2rem;
`;
