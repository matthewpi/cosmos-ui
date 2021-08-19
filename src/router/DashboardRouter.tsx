import { Route, Routes } from 'react-router-dom';

import { NotFound } from '~/App';
import { DashboardContainer } from '~/views/DashboardContainer';

export function DashboardRouter(): JSX.Element {
	return (
		<Routes>
			<Route path="/" element={<DashboardContainer />} />
			<Route path="*" element={<NotFound />} />
		</Routes>
	);
}
