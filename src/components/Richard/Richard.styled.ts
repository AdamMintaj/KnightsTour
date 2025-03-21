import styled from "@emotion/styled";

export const Container = styled.div`
	position: absolute;
	top: 0;
	bottom: 0;
	left: 0;
	right: 0;
	z-index: -1;
`;

export const Video = styled.video<{ $visible: boolean }>`
	display: block;
	max-height: max(100%, 100vw);
	margin: 0 auto;
	opacity: ${({ $visible }) => ($visible ? 1 : 0)};
`;
