import styled from "@emotion/styled";
import mediaQuery from "./mediaQueries";
import { boardSize } from "components/Board/Board.styled";
import { commonLinkStyles } from "./common";

export const Container = styled.main`
	padding: 1rem 8vw;
	overflow-y: auto;
	flex-grow: 1;

	@media ${mediaQuery.landscapeSmallScreen} {
		padding-inline: 1.25rem;
	}

	@media ${mediaQuery.desktop} {
		padding-inline: 3rem;
	}
`;

export const InnerContainer = styled.div`
	width: min(100%, 1500px);
	margin: 0 auto;
	line-height: 1.4em;

	/* 
		Awkward calculations but they ensure a neat alignment with the logo.
		The calculated padding value aligns the text with the controls on the game page.
		
		* On small horizontal screens the controls container has the board's width and
		is centered in a 50%-wide column.

		* On dektops it's the same principle but the column takes 33% or 495px (33% from max-width 1500px)
		and the controls are 350px wide.
	*/
	@media ${mediaQuery.landscapeSmallScreen} {
		padding-left: calc((50% - ${boardSize.landscapeSmallScreen}) / 2);
	}

	@media ${mediaQuery.desktop} {
		padding-left: calc((min(33%, 495px) - 350px) / 2);
	}
`;

export const Header = styled.h1`
	font-size: 1.5rem;
	margin-top: 1em;
	font-weight: 400;

	@media ${mediaQuery.desktopLarge} {
		font-size: 1.75rem;
	}
`;

export const Question = styled.h2`
	font-size: 1rem;
	padding-top: 1.75em;
	font-weight: 400;

	@media ${mediaQuery.desktopLarge} {
		font-size: 1.2rem;
		padding-top: 2em;
	}
`;

export const Answer = styled.p`
	font-size: 0.8rem;
	padding-top: 1em;
	font-weight: 300;
	max-width: 1000px;

	@media ${mediaQuery.desktopLarge} {
		font-size: 0.875rem;
	}
`;

export const Link = styled.a`
	${commonLinkStyles}
`;
