import { StrictMode } from 'react';
import { render } from 'react-dom';

import { App } from '~/App';
import { GlobalStyles } from '~/GlobalStyles';

render(
	<StrictMode>
		<GlobalStyles />
		<App />
	</StrictMode>,
	document.getElementById('app'),
);
