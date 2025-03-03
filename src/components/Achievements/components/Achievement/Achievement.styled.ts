import styled from "@emotion/styled";
import { css } from "@emotion/react";

export const Container = styled.li<{ $isActive: boolean }>`
	list-style: none;
	padding: 1rem;
	border-radius: 1rem;
	background: #fff7f0;
	box-shadow: 5px 5px 22px #999490, -5px -5px 22px #ffffff;
	cursor: pointer;

	${({ $isActive }) =>
		$isActive &&
		css`
			background: #fff7f0;
			box-shadow: inset 5px 5px 10px #9c9792, inset -5px -5px 10px #ffffff;
		`}
`;

export const Name = styled.h3`
	font-weight: 400;
	font-size: 1rem;
`;

export const Label = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
`;

export const Description = styled.p<{ $isActive: boolean }>`
	font-size: 0.875rem;
	margin-top: 1.5rem;
	transition: 0.4s;
	display: none;

	${({ $isActive }) =>
		$isActive &&
		css`
			display: block;
		`}
`;
