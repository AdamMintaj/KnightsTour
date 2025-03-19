import { css } from "@emotion/react";
import theme from "styles/theme";

export const commonLinkStyles = css`
	color: black;

	&:hover {
		color: ${theme.colors.orangeSaturated};

		&::selection {
			color: ${theme.colors.background};
		}
	}

	&::selection {
		background-color: ${theme.colors.orange};
	}
`;
