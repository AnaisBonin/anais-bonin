export interface IStarPosition {
	top: string;
	left: string;
}

export interface IPortfolioSections {
	title: string;
	path: string;
	component: string;
	position: IStarPosition;
}

export const portfolioSections: IPortfolioSections[] = [
	{
		title: 'Who am I',
		path: '/about',
		component: 'About',
		position: {
			top: '8vh',
			left: '-40vw',
		},
	},
	{
		title: 'Experiences',
		path: '/experiences',
		component: 'Experiences',
		position: {
			top: '25vh',
			left: '-17vw',
		},
	},
	{
		title: 'Tech Skills',
		path: '/tech-skills',
		component: 'TechSkills',
		position: {
			top: '13vh',
			left: '25vw',
		},
	},
	{
		title: 'Soft Skills',
		path: '/soft-skills',
		component: 'SoftSkills',
		position: {
			top: '81vh',
			left: '-35vw',
		},
	},
	{
		title: 'Professional goals',
		path: '/professional-goals',
		component: 'Goals',
		position: {
			top: '72vh',
			left: '7vw',
		},
	},
	{
		title: 'Contact',
		path: '/contact',
		component: 'Contact',
		position: {
			top: '89vh',
			left: '36vw',
		},
	},
];
