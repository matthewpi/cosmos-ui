import React from 'react';
import { Route, RouteComponentProps, Switch } from 'react-router-dom';
import { NotFound } from '~/App';
import DashboardContainer from '~/views/DashboardContainer';

export default ({ location }: RouteComponentProps) => {
	return (
		<>
			<Switch location={location}>
				<Route path="/" component={DashboardContainer} exact />
				<Route path="*" component={NotFound} />
			</Switch>
		</>
	);
};
