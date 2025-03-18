import "@emotion/react";

declare module "@emotion/react" {
	export interface Theme {
		colors: {
			background: string;
			orange: string;
			orangeSaturated: string;
		};
	}
}
