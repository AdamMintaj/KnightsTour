import styled from "@emotion/styled";
import { css } from "@emotion/react";
import { Position } from "../Board";

const availableSquareStyle = css`
	outline: 2px solid #fe5f00;

	&:active {
		background-color: #dfcac1;
		box-shadow: inset 0px 4px 4px rgba(0, 0, 0, 0.25);
	}
`;

const closedSquareStyle = css`
	box-shadow: inset 0px 4px 4px rgba(0, 0, 0, 0.25);
	background-color: #bca79d;
`;

const currentSquareStyle = css`
	box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
	background-color: #fe5f00;
`;

export const Container = styled.div<{
	$available: boolean;
	$closed: boolean;
	$currentSquare: boolean;
	$isKnightGrabbed: boolean;
}>`
	padding-top: 100%;
	position: relative;
	border-radius: 6px;
	background-color: #e7dbdb;
	box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
	user-select: none;
	touch-action: none;
	cursor: ${({ $available, $isKnightGrabbed }) =>
		$isKnightGrabbed ? "grabbing" : $available ? "pointer" : "auto"};

	${({ $available }) => $available && availableSquareStyle};
	${({ $closed }) => $closed && closedSquareStyle};
	${({ $currentSquare }) => $currentSquare && currentSquareStyle};
`;

// 	@media (orientation: landscape) and (max-height: 700px) {
// 		outline-width: 2px;
// 	}

// 	// desktops
// 	@media (min-width: 1100px) {
// 		&--available {
// 			outline: 3px solid #fe5f00;
// 		}
// 	}

// 	//big desktops
// 	@media (min-width: 1440px) {
// 		border-radius: 13px;
// 	}
// }

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
