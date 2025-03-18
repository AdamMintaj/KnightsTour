const breakpoints = {
	tablet: 768,
	desktop: 1100,
	desktopLarge: 1440,
};

export const mediaQuery = {
	landscapeSmallScreen: `(max-width: ${
		breakpoints.desktop - 1
	}px) and (orientation: landscape)`,
	tablet: `(min-width: ${breakpoints.tablet}px) and (orientation: portrait)`,
	desktop: `(min-width: ${breakpoints.desktop}px) and (orientation: landscape)`,
	desktopLarge: `(min-width: ${breakpoints.desktopLarge}px)`,
};
