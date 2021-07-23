import { StoreProvider } from 'easy-peasy';
import { Route, Router, Switch } from 'react-router-dom';
import tw from 'twin.macro';

import { ProgressBar } from '~/components/ProgressBar';
import { history } from '~/history';
import { AuthRouter } from '~/router/AuthRouter';
import { DashboardRouter } from '~/router/DashboardRouter';
import { store } from '~/state';

import '~/inter.css';

export function NotFound(): JSX.Element {
	return <p css={tw`font-sans`}>404 Not Found</p>;
}

export function App(): JSX.Element {
	return (
		<StoreProvider store={store}>
			<ProgressBar />

			<div css={tw`w-auto mx-auto`}>
				<Router history={history}>
					<Switch>
						<Route path="/auth" component={AuthRouter} />
						<Route path="/" component={DashboardRouter} />
						<Route path="*" component={NotFound} />
					</Switch>
				</Router>
			</div>
		</StoreProvider>
	);
}
