import styled from "@emotion/styled";
import { Link } from "react-router-dom";

export const Container = styled.nav`
	display: flex;
	flex-direction: column;
	align-items: flex-end;
	gap: 14px;
`;

export const NavLink = styled(Link)`
	text-decoration: none;
	color: black;
`;
