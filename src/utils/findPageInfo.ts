import { IPortfolioPage, portfolioPages } from './portfolioPages'

export const findPageInfo = (title: string): IPortfolioPage | {} => {
const pageInfo = portfolioPages.find((page) => page.title === title);
return pageInfo ?? {};
}