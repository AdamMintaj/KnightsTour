import styled from "@emotion/styled";

export const Button = styled.button<{
	$tip: string;
	$tooltipOffset: string;
}>`
	appearance: none;
	background-color: transparent;
	border: none;
	position: relative;
	cursor: pointer;
	height: 17px;

	&:focus {
		&::after {
			position: absolute;
			top: 70%;
			left: 70%;
			width: 150px;
			background-color: rgb(108, 107, 107);
			border-radius: 1rem;
			color: white;
			font-size: 0.625rem;
			font-family: "JetBrains Mono", monospace;
			text-align: left;
			padding: 0.75rem;
			cursor: auto;
			z-index: 2;
			content: "${({ $tip }) => $tip}";
			translate: ${({ $tooltipOffset }) => $tooltipOffset};
		}
	}
`;
