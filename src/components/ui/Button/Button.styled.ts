import styled from "@emotion/styled";
import { css } from "@emotion/react";

const lockedStyles = css`
	background: #fff7f0;
	box-shadow: inset 5px 5px 22px #999490, inset -5px -5px 22px #ffffff;
	color: rgba(0, 0, 0, 0.4);
	cursor: auto;
`;

export const Button = styled.button<{
	$locked?: boolean;
}>`
	font-family: "JetBrains Mono", monospace;
	color: black;
	font-size: 0.875rem;
	appearance: none;
	border: 0;
	border-radius: 10px;
	height: 40px;
	min-width: 90px;
	padding: 0 0.625rem;
	cursor: pointer;

	background: #fff7f0;
	box-shadow: 5px 5px 22px #999490, -5px -5px 22px #ffffff;

	&:active {
		background: #fff7f0;
		box-shadow: inset 5px 5px 22px #999490, inset -5px -5px 22px #ffffff;
	}

	${({ $locked }) => $locked && lockedStyles}
`;
