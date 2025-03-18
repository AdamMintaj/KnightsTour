import styled from "@emotion/styled";
import { css } from "@emotion/react";

const disabledBorderColor = "rgb(137, 135, 134)";
const disabledBackgroundColor = "rgb(228, 225, 223)";

export const Label = styled.label<{ $state: "on" | "off" | "disabled" }>`
	width: 2rem;
	height: 1rem;
	border: 1px solid black;
	position: relative;
	cursor: pointer;
	display: block;
	border-radius: 1rem;
	transition: 0.4s;
	background-color: ${(props) => props.theme.colors.background};

	${({ $state }) =>
		$state === "disabled" &&
		css`
			border-color: ${disabledBorderColor};
			background-color: ${disabledBackgroundColor};
			cursor: auto;
		`}

	${({ $state, theme }) =>
		$state === "on" &&
		css`
			background-image: linear-gradient(
				to right bottom,
				${theme.colors.orangeSaturated},
				white
			);
		`}
`;

export const Input = styled.input`
	visibility: hidden;
`;

export const Span = styled.span<{
	$state: "on" | "off" | "disabled";
}>`
	width: 0.75rem;
	height: 0.75rem;
	position: absolute;
	top: 1px;
	left: 1px;
	border: 1px solid black;
	border-radius: 1rem;
	transition: 0.4s;
	background-color: ${(props) => props.theme.colors.background};

	${({ $state }) =>
		$state === "disabled" &&
		css`
			border-color: ${disabledBorderColor};
			background-color: ${disabledBackgroundColor};
			cursor: auto;
		`}

	${({ $state }) =>
		$state === "on" &&
		css`
			transform: translateX(1rem);
		`}
`;
