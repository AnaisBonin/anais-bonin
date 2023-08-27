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
			top: '8vh',
			left: '-40vw',
		},
	},
	{
		title: 'Experiences',
		position: {
			top: '25vh',
			left: '-17vw',
		},
	},
	{
		title: 'Tech Skills',
		position: {
			top: '13vh',
			left: '25vw',
		},
	},
	{
		title: 'Soft Skills',
		position: {
			top: '81vh',
			left: '-35vw',
		},
	},
	{
		title: 'Professional goals',
		position: {
			top: '72vh',
			left: '7vw',
		},
	},
	{
		title: 'Contact',
		position: {
			top: '89vh',
			left: '36vw',
		},
	},
];
