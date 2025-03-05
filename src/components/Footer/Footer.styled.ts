import styled from "@emotion/styled";

export const Container = styled.footer`
	text-align: center;
	border-top: 1px solid black;
	font-size: 0.625rem;
	padding: 0.875rem 0;

	@media (max-height: 500px) and (orientation: landscape) {
		display: none;
	}

	/* @media (min-width: 740px) and (min-height: 800px) {
	.footer {
		font-size: 1rem;
	}
} */

	/* @media (min-width: 1100px) {
	.footer {
		font-size: 0.625rem;
		padding: 0.8rem 0;
	}
} */
`;
