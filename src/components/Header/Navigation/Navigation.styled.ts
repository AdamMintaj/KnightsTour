import styled from "@emotion/styled";
import { boardSize } from "components/Board/Board.styled";
import { Link } from "react-router-dom";
import { mediaQuery } from "styles/responsive";

export const Container = styled.nav`
	display: flex;
	flex-direction: column;
	align-items: flex-end;
	justify-content: center;
	gap: 14px;

	@media (orientation: landscape) {
		flex-direction: row;
		align-items: center;
	}

	@media (${mediaQuery.landscapeSmallScreen}) {
		width: ${boardSize.landscapeSmallScreen};
		justify-content: flex-end;
		gap: 8vw;
	}

	@media (${mediaQuery.desktop}) {
		width: ${boardSize.desktop};
		gap: 0;
		margin: 0 auto;
		display: grid;
		grid-template-columns: 50% 50%;
		justify-items: flex-end;
	}

	@media (${mediaQuery.desktopLarge}) {
		width: ${boardSize.desktopLarge};
	}
`;

export const NavLink = styled(Link)`
	text-decoration: none;
	color: black;

	&:hover {
		color: ${(props) => props.theme.colors.orangeSaturated};
	}

	@media (${mediaQuery.landscapeSmallScreen}), (${mediaQuery.desktop}) {
		font-size: clamp(1rem, calc(0.8rem + 1vh), 1.5rem);
	}

	@media (${mediaQuery.tablet}) {
		font-size: 1.125rem;
	}

	@media (${mediaQuery.desktopLarge}) {
		font-size: 1.5rem;
	}
`;
