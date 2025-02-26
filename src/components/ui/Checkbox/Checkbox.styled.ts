import styled from "@emotion/styled";
import { ReactComponent as Icon } from "assets/checkmark.svg";

export const Label = styled.label`
	width: 20px;
	height: 20px;
	display: block;
	border-radius: 5px;
	cursor: pointer;
	position: relative;
	background: #fff7f0;
	box-shadow: inset 2px 2px 9px #a8a39e, inset -2px -2px 9px #ffffff;
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
