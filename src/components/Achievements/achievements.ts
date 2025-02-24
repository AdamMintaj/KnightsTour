import { StatisticsData, CheatsData } from "context/gameTypes";

/**
 * Data describing a single achievement
 *
 * - `cheat` (keyof CheatsData) cheat that this achievement is linked to
 * - `validatedBy` (keyof StatisticsData) statistic that unlocks this achievement
 * - `name` (string) name displayed in Achievement component
 * - `description` (string) description displayed in Achievement component
 *
 */
export interface AchievementData {
	cheat: keyof CheatsData;
	validatedBy: keyof StatisticsData;
	name: string;
	description: string;
}

const achievements: AchievementData[] = [
	{
		cheat: "unlimitedBacksteps",
		validatedBy: "openTour",
		name: "earned my spurs",
		description: "Finish an open tour and get unlimited backsteps.",
	},
	{
		cheat: "dragDrop",
		validatedBy: "closedTour",
		name: "knight errant",
		description:
			"Finish a closed tour and cheat! Drag and drop the knight around the board.",
	},
	{
		cheat: "promoCode",
		validatedBy: "win3",
		name: "champion",
		description: "Win 3 times and get a Google Play promo code!",
	},
	{
		cheat: "backsteps",
		validatedBy: "lose5",
		name: "almost got there",
		description: "Lose 5 times to get 3 steps back.",
	},
	{
		cheat: "confetti",
		validatedBy: "quickestLose",
		name: "pyrrhus",
		description:
			"Some failures call for a celebration! Lose in fewest steps possible.",
	},
];

export default achievements;
