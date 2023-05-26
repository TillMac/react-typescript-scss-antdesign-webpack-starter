import React from 'react';
import image1 from '@assets/images/slimeshiny.jpg';
import './index.scss';

const App: React.FC = () => {
	return (
		<div>
			<h1>Hello, World!</h1>
			<p>yoooo</p>
			<img src={image1} alt="nah" />
		</div>
	);
};

export default App;
