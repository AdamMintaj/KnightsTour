import styled from "@emotion/styled";
import { ReactComponent as Icon } from "assets/checkmark.svg";

export const Label = styled.label`
	width: 18px;
	height: 18px;
	display: block;
	border: 1px solid black;
	border-radius: 5px;
	cursor: pointer;
	position: relative;
`;

export const Input = styled.input`
	visibility: hidden;
`;

export const Checkmark = styled(Icon)`
	position: absolute;
	height: 100%;
	width: 100%;
	top: 0;
	left: 0;
`;
