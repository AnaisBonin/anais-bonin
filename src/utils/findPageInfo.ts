import { IHomePage, IPortfolioPage, homePage, portfolioPages } from './portfolioPages'

export const findPageInfo = (title: string): IHomePage | IPortfolioPage => {
const pageInfo = portfolioPages.find((page) => page.title === title);
return pageInfo ?? homePage;
}