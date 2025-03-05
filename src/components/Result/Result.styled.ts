import styled from "@emotion/styled";

export const Container = styled.div`
	width: 100%;
	height: 60%;
	grid-row: 2/3;
	text-align: center;
	align-items: center;
	display: flex;
	flex-direction: column;
	justify-content: space-evenly;

	@media (orientation: landscape) and (max-height: 700px) {
		grid-row: 1/2;
		grid-column: 2/3;
		align-self: center;
	}
`;

// .result {
// 	padding: 0 8vw;
// 	width: 100%;
// 	height: 60%;
// 	grid-column: 1/2;
// 	grid-row: 2/3;
// 	font-size: 1.25rem;
// 	text-align: center;
// 	display: flex;
// 	flex-direction: column;
// 	justify-content: space-evenly;

// 	// mobiles horizontal
// 	@media (orientation: landscape) and (max-height: 700px) {
// 		grid-row: 1/2;
// 		grid-column: 2/3;
// 		align-self: center;
// 	}

// 	// desktops
// 	@media (min-width: 1100px) {
// 		grid-column: 2/3;
// 		grid-row: 2/3;
// 		align-self: flex-start;
// 	}

// 	//big desktops
// 	@media (min-width: 1440px) {
// 		font-size: 1.5rem;
// 	}
// }
