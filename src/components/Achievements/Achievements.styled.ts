import styled from "@emotion/styled";
import { css } from "@emotion/react";
import { mediaQuery } from "styles/responsive";
import theme from "styles/theme";

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
	background-color: ${theme.colors.background};

	@media ${mediaQuery.desktop} {
		position: static;
		width: auto;
		height: auto;
		align-items: initial;
	}
`;

export const Container = styled.aside<{ $mobilePopupOpen: boolean }>`
	display: none;
	padding: 1.5rem;
	overflow-y: auto;

	${({ $mobilePopupOpen }) => $mobilePopupOpen && openPopupStyle}

	@media ${mediaQuery.desktop} {
		display: flex;
		flex-direction: column;
		padding: 0;
		margin-top: 2.5rem;
	}
`;

export const MobileOnlyElement = styled.span`
	@media ${mediaQuery.desktop} {
		display: none;
	}
`;

export const Title = styled.h2`
	font-size: 1.25rem;
	font-weight: 400;
	margin-bottom: 1.25rem;

	@media ${mediaQuery.tablet} {
		font-size: 1.5rem;
	}

	@media ${mediaQuery.desktop} {
		font-size: 1.25rem;
		margin-bottom: 0.75rem;
	}

	@media ${mediaQuery.desktopLarge} {
		font-size: 1.5rem;
		margin-bottom: 1.25rem;
	}
`;

export const EasyModeWrapper = styled.div`
	display: flex;
	gap: 0.5rem;
	align-items: center;
	margin-bottom: 1rem;

	& > :last-child {
		margin-left: 0.5rem;
	}

	@media ${mediaQuery.desktop} {
		margin-left: 1rem;
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
