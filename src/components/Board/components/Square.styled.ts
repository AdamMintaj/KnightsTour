import styled from "@emotion/styled";
import { css } from "@emotion/react";
import { Position } from "../Board";
import { mediaQuery } from "styles/responsive";
import theme from "styles/theme";

const availableSquareStyle = css`
	outline: 2px solid ${theme.colors.orange};

	@media (${mediaQuery.tablet}), (${mediaQuery.desktopLarge}) {
		outline-width: 3px;
	}
`;

const closedSquareStyle = css`
	background-color: rgb(215, 209, 203);
`;

const currentSquareStyle = css`
	background-color: ${theme.colors.orange};
`;

export const Container = styled.div<{
	$available: boolean;
	$closed: boolean;
	$currentSquare: boolean;
	$isKnightGrabbed: boolean;
}>`
	padding-top: 100%;
	position: relative;
	outline: 1px solid black;
	border-radius: 15%;
	user-select: none;
	touch-action: none;
	cursor: ${({ $available, $isKnightGrabbed }) =>
		$isKnightGrabbed ? "grabbing" : $available ? "pointer" : "auto"};

	${({ $available }) => $available && availableSquareStyle};
	${({ $closed }) => $closed && closedSquareStyle};
	${({ $currentSquare }) => $currentSquare && currentSquareStyle};
`;

export const KnightIcon = styled.img<{
	$draggingEnabled: boolean;
	$isGrabbed: boolean;
	$dragTo: Position;
}>`
	z-index: 1;
	position: ${({ $isGrabbed }) => ($isGrabbed ? "fixed" : "absolute")};
	top: ${({ $isGrabbed, $dragTo }) =>
		$isGrabbed ? `${$dragTo.y + 5}px` : "12%"};
	left: ${({ $isGrabbed, $dragTo }) =>
		$isGrabbed ? `${$dragTo.x + 5}px` : "12%"};
	width: ${({ $isGrabbed }) => ($isGrabbed ? "auto" : "76%")};
	cursor: ${({ $draggingEnabled, $isGrabbed }) =>
		$draggingEnabled ? ($isGrabbed ? "grabbing" : "grab") : "auto"};
`;
