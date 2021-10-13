import { Route, Routes } from 'react-router-dom';

import { NotFound } from '~/App';
import { LoginContainer } from '~/views/auth/LoginContainer';

export function AuthRouter(): JSX.Element {
	return (
		<Routes>
			<Route path="/login" element={<LoginContainer />} />
			<Route path="/*" element={<NotFound />} />
		</Routes>
	);
}
