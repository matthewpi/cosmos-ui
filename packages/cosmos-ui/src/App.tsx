import Stitches from '@stitches/react/types/stitches';
import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import tw, { globalStyles } from 'twin.macro';

import { globalCss } from '../stitches.config';
import { ProgressBar } from '~/components/ProgressBar';
import { Inter } from '~/fonts';
import { AuthRouter } from '~/router/AuthRouter';
import { DashboardRouter } from '~/router/DashboardRouter';

export function NotFound(): JSX.Element {
	return <p css={tw`font-sans`}>404 Not Found</p>;
}

const globals = () => {
	globalCss({ ...(globalStyles as unknown as Stitches['globalCss']) })();
	globalCss({ '@font-face': Inter })();
};

export function App(): JSX.Element {
	globals();

	return (
		<>
			<ProgressBar />

			<div css={tw`w-auto mx-auto`}>
				<BrowserRouter>
					<Routes>
						<Route path="/*" element={<DashboardRouter />} />
						<Route path="auth/*" element={<AuthRouter />} />
						<Route path="/*" element={<NotFound />} />
					</Routes>
				</BrowserRouter>
			</div>
		</>
	);
}
