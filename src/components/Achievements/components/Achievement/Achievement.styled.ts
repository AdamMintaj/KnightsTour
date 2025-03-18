import styled from "@emotion/styled";
import { css } from "@emotion/react";

export const Container = styled.li`
	list-style: none;
	padding: 1rem;
	border-radius: 1rem;
	cursor: pointer;
	border: 1px solid black;
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
	display: none;

	${({ $isActive }) =>
		$isActive &&
		css`
			display: block;
		`}
`;
