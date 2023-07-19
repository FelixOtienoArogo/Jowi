import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import '../src/styles/style.css';

ReactDOM.render(
	<React.StrictMode>
		<dev id="shell">
			<div id="header"></div>
			<div id="main">
				<App />
			</div>
			<div id="footer"></div>
		</div>
	</React.StrictMode>,
 document.getElementById('shell')
);
