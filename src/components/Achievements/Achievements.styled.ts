import styled from "@emotion/styled";
import { css } from "@emotion/react";

const openPopupStyle = css`
	position: absolute;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
	z-index: 2;
	display: flex;
	flex-direction: column;
	align-items: center;
	background-color: rgb(255, 247, 240);
`;

export const Container = styled.aside<{ $mobilePopupOpen: boolean }>`
	display: none;
	padding: 1.5rem 1.5rem 0;
	overflow-y: auto;

	${({ $mobilePopupOpen }) => $mobilePopupOpen && openPopupStyle}
`;

export const Title = styled.h2`
	font-size: 1.25rem;
	font-weight: 400;
	margin-bottom: 1.25rem;
`;

export const EasyModeWrapper = styled.div`
	display: flex;
	gap: 0.5rem;
	margin-bottom: 2rem;
	align-items: center;

	& > :last-child {
		margin-left: 0.5rem;
	}
`;

export const EasyModeTitle = styled.h3`
	font-size: 1rem;
	font-weight: 400;
`;

export const CloseButton = styled.button`
	appearance: none;
	background-color: transparent;
	border: none;
	cursor: pointer;
	position: absolute;
	top: 1rem;
	right: 1rem;
`;
