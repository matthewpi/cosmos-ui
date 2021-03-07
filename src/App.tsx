import React, { Suspense } from 'react';
import { StoreProvider } from 'easy-peasy';
import { Route, Router, Switch } from 'react-router-dom';
import tw, { GlobalStyles } from 'twin.macro';
import { history } from '~/history';
import { store } from '~/state';
import ProgressBar from '~/components/ProgressBar';
import DashboardRouter from '~/router/DashboardRouter';

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
			<GlobalStyles/>

			<StoreProvider store={store}>
				<ProgressBar/>

				<div css={tw`w-auto mx-auto`}>
					<Router history={history}>
						<Suspense fallback={<div>Loading...</div>}>
							<Switch>
								<Route path="/" component={DashboardRouter} />
								<Route path={'*'} component={NotFound} />
							</Switch>
						</Suspense>
					</Router>
				</div>
			</StoreProvider>
		</>
	);
};

export default App;
