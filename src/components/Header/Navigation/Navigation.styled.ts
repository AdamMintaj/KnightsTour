import styled from "@emotion/styled";
import { Link } from "react-router-dom";

export const Container = styled.nav`
	display: flex;
	flex-direction: column;
	align-items: flex-end;
	justify-content: center;
	gap: 14px;
	margin-right: 0.625rem;
`;

export const NavLink = styled(Link)`
	text-decoration: none;
	color: black;

	&:hover {
		color: ${(props) => props.theme.colors.themeOrange};
	}
`;
