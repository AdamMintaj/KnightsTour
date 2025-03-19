import styled from "@emotion/styled";
import { css } from "@emotion/react";
import mediaQuery from "styles/mediaQueries";

const lockedButtonStyles = css`
	border-color: rgb(153, 148, 144);
	color: rgb(153, 148, 144);
	cursor: auto;
`;

export const Button = styled.button<{
	$locked?: boolean;
}>`
	font-family: "JetBrains Mono", monospace;
	font-size: 0.875rem;
	appearance: none;
	color: black;
	background-color: transparent;
	border: 1px solid black;
	border-radius: 10px;
	height: 40px;
	min-width: 90px;
	padding-inline: 0.625rem;
	cursor: pointer;
	transition: transform 0.1s;

	&:active:enabled {
		transform: scale(0.95);
	}

	${({ $locked }) => $locked && lockedButtonStyles}

	@media ${mediaQuery.desktopLarge}, ${mediaQuery.tablet} {
		font-size: 1rem;
		height: 48px;
		padding-inline: 1.25rem;
		border-radius: 12px;
		min-width: 120px;
	}
`;
