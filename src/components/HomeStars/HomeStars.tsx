import { portfolioPages } from '../../utils/portfolioSections';
import Star from '../Star/Star';

import './HomeStars.css';

interface HomeStarsProps {
	display?: boolean;
}

const HomeStars = ({ display = false }: HomeStarsProps) => {
	const starsVisibility = display ? 'visible' : 'hidden';

	return (
		<div className={`home-stars ${starsVisibility}`}>
			{portfolioPages.map((section, i) => (
				<Star
					key={i}
					name={section.title}
					starPosition={section.starPosition}
				/>
			))}
		</div>
	);
};

export default HomeStars;
