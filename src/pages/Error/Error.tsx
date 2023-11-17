import { ReturnHome } from '../../components';

import './Error.css';

const Error = () => {
	return (
		<main>
			<h1 className="page-title">OoOops</h1>
			<p>Lost in the middle of 404 stars? </p>
			<p>We get it, adventuring through space is pretty sick.</p>
			<p>Though if you want to get back to us, get back to our spaceship</p>
			<ReturnHome />
		</main>
	);
};

export default Error;
