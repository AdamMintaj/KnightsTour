import styled from "@emotion/styled";

export const Container = styled.header`
	height: 82px;
	border-bottom: 1px solid black;
	display: flex;
	justify-content: space-between;
	padding-right: 1rem;

	@media (max-height: 500px) and (orientation: landscape) {
		height: 15vh;
		padding: 0 8vw;
	}
`;
