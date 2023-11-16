export interface IStarPosition {
	top: string;
	left: string;
}

export interface IPortfolioPage {
	title: string;
	path: string;
	component: string;
	starPosition: IStarPosition;
}

export const portfolioPages: IPortfolioPage[] = [
	{
		title: 'Who am I',
		path: '/about',
		component: '<About />',
		starPosition: {
			top: '8vh',
			left: '-40vw',
		},
	},
	{
		title: 'Experiences',
		path: '/experiences',
		component: '<Experiences />',
		starPosition: {
			top: '25vh',
			left: '-17vw',
		},
	},
	{
		title: 'Tech Skills',
		path: '/tech-skills',
		component: '<TechSkills />',
		starPosition: {
			top: '13vh',
			left: '25vw',
		},
	},
	{
		title: 'Soft Skills',
		path: '/soft-skills',
		component: '<SoftSkills />',
		starPosition: {
			top: '81vh',
			left: '-35vw',
		},
	},
	{
		title: 'Professional goals',
		path: '/professional-goals',
		component: '<Goals />',
		starPosition: {
			top: '72vh',
			left: '7vw',
		},
	},
	{
		title: 'Contact',
		path: '/contact',
		component: '<Contact />',
		starPosition: {
			top: '89vh',
			left: '36vw',
		},
	},
];
