import styled from "@emotion/styled";

export const Container = styled.main`
	padding: 1rem 8vw;
	overflow-y: auto;
	flex-grow: 1;
	line-height: 1.4em;
`;

export const Header = styled.h1`
	font-size: 1.5rem;
	margin-top: 1em;
	font-weight: 400;
`;

export const Question = styled.h2`
	font-size: 1rem;
	padding-top: 1.75em;
	font-weight: 400;
`;

export const Answer = styled.p`
	font-size: 0.8rem;
	padding-top: 1em;
	font-weight: 300;
`;

export const Link = styled.a`
	color: black;

	&:hover {
		color: ${(props) => props.theme.colors.themeOrange};
	}
`;

// @media (min-width: 700px) {
// 	.howTo {
// 		line-height: 1.75em;

// 		&__title {
// 			font-size: 2rem;
// 		}

// 		&__question {
// 			font-size: 1.4rem;
// 			padding-top: 2em;
// 		}

// 		&__answer {
// 			max-width: 970px;
// 			font-size: 1rem;
// 		}
// 	}
// }

// @media (min-width: 1100px) {
// 	.howTo {
// 		padding: 1rem 6vw;
// 	}
// }
