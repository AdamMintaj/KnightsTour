import styled from "@emotion/styled";
import { Link } from "react-router-dom";

export const Container = styled.nav`
	display: flex;
	flex-direction: column;
	align-items: flex-end;
	justify-content: center;
	gap: 14px;

	@media (orientation: landscape) {
		flex-direction: row;
		align-items: center;
		gap: 8vw;
	}
`;

export const NavLink = styled(Link)`
	text-decoration: none;
	color: black;

	&:hover {
		color: ${(props) => props.theme.colors.themeOrange};
	}
`;
