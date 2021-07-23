import { Route, RouteComponentProps, Switch } from 'react-router-dom';

import { NotFound } from '~/App';
import { LoginContainer } from '~/views/auth/LoginContainer';

export function AuthRouter({ location, match }: RouteComponentProps): JSX.Element {
	return (
		<Switch location={location}>
			<Route path={`${match.path}/login`} component={LoginContainer} exact />
			<Route path={'*'} component={NotFound} />
		</Switch>
	);
}
