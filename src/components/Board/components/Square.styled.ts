import styled from "@emotion/styled";
import { css } from "@emotion/react";
import { Position } from "../Board";

const availableSquareStyle = css`
	outline: 2px solid #fe5f00;
`;

const closedSquareStyle = css`
	border-radius: 6px;
	background: #fff7f0;
	box-shadow: inset 3px 3px 7px #999490, inset -3px -3px 7px #ffffff;
`;

const currentSquareStyle = css`
	background-color: #fe5f00;
	box-shadow: 3px 3px 7px #999490, -3px -3px 7px #ffffff;
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

export const Container = styled.div<{
	// $available: boolean;
	// $closed: boolean;
	// $currentSquare: boolean;
}>`
	padding-top: 100%;
	position: relative;
	user-select: none;
	touch-action: none;

	/* neumorphism */
	border-radius: 6px;
	background: #fff7f0;
	box-shadow: 3px 3px 7px #999490, -3px -3px 7px #ffffff;
`;
/* ${({ $available }) => $available && availableSquareStyle};
	${({ $closed }) => $closed && closedSquareStyle};
	${({ $currentSquare }) => $currentSquare && currentSquareStyle}; */

// .square {

// 	&--available {
// 		outline: 2px solid #fe5f00;

// 		&:active {
// 			background-color: #dfcac1;
// 			box-shadow: inset 0px 4px 4px rgba(0, 0, 0, 0.25);
// 		}
// 	}

// 	&--closed {
// 		box-shadow: inset 0px 4px 4px rgba(0, 0, 0, 0.25);
// 		background-color: #bca79d;
// 	}

// 	&--currentSquare {
// 		box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
// 		background-color: #fe5f00;
// 	}

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
