import { StoreProvider } from 'easy-peasy';
import React from 'react';
import { Route, Router, Switch } from 'react-router-dom';
import tw, { GlobalStyles } from 'twin.macro';
import { history } from '~/history';
import { store } from '~/state';
import ProgressBar from '~/components/ProgressBar';
import DashboardRouter from '~/router/DashboardRouter';

import '~/inter.css';

export const NotFound = () => {
	return (
		<>
			<p css={tw`font-sans`}>404 Not Found</p>
		</>
	);
};

const App = () => {
	return (
		<>
			<GlobalStyles />

			<StoreProvider store={store}>
				<ProgressBar />

				<div css={tw`w-auto mx-auto`}>
					<Router history={history}>
						<Switch>
							<Route path="/" component={DashboardRouter} />
							<Route path="*" component={NotFound} />
						</Switch>
					</Router>
				</div>
			</StoreProvider>
		</>
	);
};

export default App;
