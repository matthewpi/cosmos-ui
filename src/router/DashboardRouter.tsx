import { Route, RouteComponentProps, Switch } from 'react-router-dom';

import { NotFound } from '~/App';
import { DashboardContainer } from '~/views/DashboardContainer';

export function DashboardRouter({ location, match }: RouteComponentProps): JSX.Element {
	return (
		<Switch location={location}>
			<Route path={`${match.path}/`} component={DashboardContainer} exact />
			<Route path={'*'} component={NotFound} />
		</Switch>
	);
}
