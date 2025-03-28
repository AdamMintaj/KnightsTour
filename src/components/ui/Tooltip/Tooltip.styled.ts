import styled from "@emotion/styled";

export const Container = styled.div`
	position: relative;
	display: flex;
`;

export const Button = styled.button`
	appearance: none;
	background-color: transparent;
	border: none;
	cursor: pointer;
	height: 17px;
`;

export const TipContainer = styled.span<{
	$tooltipOffset: string;
	$visible: boolean;
	$width: number;
}>`
	display: ${({ $visible }) => ($visible ? "block" : "none")};
	translate: ${({ $tooltipOffset }) => $tooltipOffset};
	width: ${({ $width }) => $width}px;

	position: absolute;
	box-sizing: content-box;
	top: 70%;
	left: 70%;
	background-color: rgb(108, 107, 107);
	border-radius: 1rem;
	color: white;
	font-size: 0.625rem;
	text-align: center;
	font-family: "JetBrains Mono", monospace;
	padding: 0.75rem;
	cursor: auto;
	z-index: 2;
`;
