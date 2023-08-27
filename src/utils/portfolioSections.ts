export interface IStarPosition {
	top: string;
	left: string;
}

export interface IPortfolioSections {
	title: string;
	position: IStarPosition;
}

export const portfolioSections: IPortfolioSections[] = [
	{
		title: 'Who am I',
		position: {
			top: '4vh',
			left: '-45vw',
		},
	},
	{
		title: 'Experiences',
		position: {
			top: '15vh',
			left: '-22vw',
		},
	},
	{
		title: 'Tech Skills',
		position: {
			top: '25vh',
			left: '3vw',
		},
	},
	{
		title: 'Soft Skills',
		position: {
			top: '5vh',
			left: '25vw',
		},
	},
	{
		title: 'Professional goals',
		position: {
			top: '33vh',
			left: '40vw',
		},
	},
	{
		title: 'Contact',
		position: {
			top: '46vh',
			left: '-43vw',
		},
	},
];
