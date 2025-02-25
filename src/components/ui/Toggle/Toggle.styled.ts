import styled from "@emotion/styled";
import { css } from "@emotion/react";

export const Label = styled.label<{ $state: "on" | "off" | "disabled" }>`
	width: 2rem;
	height: 1rem;
	border: 1px solid black;
	position: relative;
	cursor: pointer;
	display: block;
	border-radius: 1rem;
	transition: 0.4s;

	${({ $state }) =>
		$state === "disabled" &&
		css`
			border-color: rgba(0, 0, 0, 0.4);
			background-color: rgba(217, 217, 217, 0.7);
			cursor: auto;
		`}

	${({ $state }) =>
		$state === "on" &&
		css`
			background-image: linear-gradient(
				to right bottom,
				rgb(254, 95, 0),
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
	background-color: rgb(255, 247, 240);

	${({ $state }) =>
		$state === "disabled" &&
		css`
			border-color: rgba(0, 0, 0, 0.4);
			background-color: rgba(217, 217, 217, 0.7);
			cursor: auto;
		`}

	${({ $state }) =>
		$state === "on" &&
		css`
			transform: translateX(1rem);
		`}
`;
