import { ReactNode } from 'react';
import { About, Contact, Experiences, Goals, Home, SoftSkills, TechSkills } from '../pages';

export interface IStarPosition {
	top: string;
	left: string;
}

export interface IHomePage { 
	title: string;
	path: string;
	element: () => ReactNode;
}

export interface IPortfolioPage extends IHomePage {
	starPosition: IStarPosition;
}

export const homePage: IHomePage = {
	title: 'Hello',
	path: '/',
	element: Home,
};

export const portfolioPages: IPortfolioPage[] = [
	{
		title: 'About me',
		path: 'about',
		element: About,
		starPosition: {
			top: '8vh',
			left: '-40vw',
		},
	},
	{
		title: 'Experiences',
		path: 'experiences',
		element: Experiences,
		starPosition: {
			top: '25vh',
			left: '-14vw',
		},
	},
	{
		title: 'Tech Skills',
		path: 'tech-skills',
		element: TechSkills,
		starPosition: {
			top: '13vh',
			left: '27vw',
		},
	},
	{
		title: 'Soft Skills',
		path: 'soft-skills',
		element: SoftSkills,
		starPosition: {
			top: '81vh',
			left: '-35vw',
		},
	},
	{
		title: 'Professional goals',
		path: 'professional-goals',
		element: Goals,
		starPosition: {
			top: '69vh',
			left: '8vw',
		},
	},
	{
		title: 'Contact',
		path: 'contact',
		element: Contact,
		starPosition: {
			top: '84vh',
			left: '36vw',
		},
	},
];
