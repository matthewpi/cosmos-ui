import Stitches from '@stitches/react/types/stitches';
import { StoreProvider } from 'easy-peasy';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import tw, { globalStyles } from 'twin.macro';

import { ProgressBar } from '~/components/ProgressBar';
import { AuthRouter } from '~/router/AuthRouter';
import { DashboardRouter } from '~/router/DashboardRouter';
import { store } from '~/state';

import { globalCss } from '../stitches.config';

export function NotFound(): JSX.Element {
	return <p css={tw`font-sans`}>404 Not Found</p>;
}

const globals = () => {
	globalCss(globalStyles as unknown as Stitches['globalCss'])();

	globalCss({
		'@font-face': [
			{
				fontFamily: 'Inter',
				fontStyle: 'normal',
				fontWeight: 100,
				fontDisplay: 'swap',
				src: 'url("/fonts/inter/Inter-Thin.woff2") format("woff2") url("/fonts/inter/Inter-Thin.woff") format("woff")',
			},
			{
				fontFamily: 'Inter',
				fontStyle: 'italic',
				fontWeight: 100,
				fontDisplay: 'swap',
				src: 'url("/fonts/inter/Inter-ThinItalic.woff2") format("woff2") url("/fonts/inter/Inter-ThinItalic.woff") format("woff")',
			},

			{
				fontFamily: 'Inter',
				fontStyle: 'normal',
				fontWeight: 200,
				fontDisplay: 'swap',
				src: 'url("/fonts/inter/Inter-ExtraLight.woff2") format("woff2") url("/fonts/inter/Inter-ExtraLight.woff") format("woff")',
			},
			{
				fontFamily: 'Inter',
				fontStyle: 'italic',
				fontWeight: 200,
				fontDisplay: 'swap',
				src: 'url("/fonts/inter/Inter-ExtraLightItalic.woff2") format("woff2") url("/fonts/inter/Inter-ExtraLightItalic.woff") format("woff")',
			},

			{
				fontFamily: 'Inter',
				fontStyle: 'normal',
				fontWeight: 300,
				fontDisplay: 'swap',
				src: 'url("/fonts/inter/Inter-Light.woff2") format("woff2") url("/fonts/inter/Inter-Light.woff") format("woff")',
			},
			{
				fontFamily: 'Inter',
				fontStyle: 'italic',
				fontWeight: 300,
				fontDisplay: 'swap',
				src: 'url("/fonts/inter/Inter-LightItalic.woff2") format("woff2") url("/fonts/inter/Inter-LightItalic.woff") format("woff")',
			},

			{
				fontFamily: 'Inter',
				fontStyle: 'normal',
				fontWeight: 400,
				fontDisplay: 'swap',
				src: 'url("/fonts/inter/Inter-Regular.woff2") format("woff2") url("/fonts/inter/Inter-Regular.woff") format("woff")',
			},
			{
				fontFamily: 'Inter',
				fontStyle: 'italic',
				fontWeight: 400,
				fontDisplay: 'swap',
				src: 'url("/fonts/inter/Inter-Italic.woff2") format("woff2") url("/fonts/inter/Inter-Italic.woff") format("woff")',
			},

			{
				fontFamily: 'Inter',
				fontStyle: 'normal',
				fontWeight: 500,
				fontDisplay: 'swap',
				src: 'url("/fonts/inter/Inter-Medium.woff2") format("woff2") url("/fonts/inter/Inter-Medium.woff") format("woff")',
			},
			{
				fontFamily: 'Inter',
				fontStyle: 'italic',
				fontWeight: 500,
				fontDisplay: 'swap',
				src: 'url("/fonts/inter/Inter-MediumItalic.woff2") format("woff2") url("/fonts/inter/Inter-MediumItalic.woff") format("woff")',
			},

			{
				fontFamily: 'Inter',
				fontStyle: 'normal',
				fontWeight: 600,
				fontDisplay: 'swap',
				src: 'url("/fonts/inter/Inter-SemiBold.woff2") format("woff2") url("/fonts/inter/Inter-SemiBold.woff") format("woff")',
			},
			{
				fontFamily: 'Inter',
				fontStyle: 'italic',
				fontWeight: 600,
				fontDisplay: 'swap',
				src: 'url("/fonts/inter/Inter-SemiBoldItalic.woff2") format("woff2") url("/fonts/inter/Inter-SemiBoldItalic.woff") format("woff")',
			},

			{
				fontFamily: 'Inter',
				fontStyle: 'normal',
				fontWeight: 700,
				fontDisplay: 'swap',
				src: 'url("/fonts/inter/Inter-Bold.woff2") format("woff2") url("/fonts/inter/Inter-Bold.woff") format("woff")',
			},
			{
				fontFamily: 'Inter',
				fontStyle: 'italic',
				fontWeight: 700,
				fontDisplay: 'swap',
				src: 'url("/fonts/inter/Inter-BoldItalic.woff2") format("woff2") url("/fonts/inter/Inter-BoldItalic.woff") format("woff")',
			},

			{
				fontFamily: 'Inter',
				fontStyle: 'normal',
				fontWeight: 800,
				fontDisplay: 'swap',
				src: 'url("/fonts/inter/Inter-ExtraBold.woff2") format("woff2") url("/fonts/inter/Inter-ExtraBold.woff") format("woff")',
			},
			{
				fontFamily: 'Inter',
				fontStyle: 'italic',
				fontWeight: 800,
				fontDisplay: 'swap',
				src: 'url("/fonts/inter/Inter-ExtraBoldItalic.woff2") format("woff2") url("/fonts/inter/Inter-ExtraBoldItalic.woff") format("woff")',
			},

			{
				fontFamily: 'Inter',
				fontStyle: 'normal',
				fontWeight: 900,
				fontDisplay: 'swap',
				src: 'url("/fonts/inter/Inter-Black.woff2") format("woff2") url("/fonts/inter/Inter-Black.woff") format("woff")',
			},
			{
				fontFamily: 'Inter',
				fontStyle: 'italic',
				fontWeight: 900,
				fontDisplay: 'swap',
				src: 'url("/fonts/inter/Inter-BlackItalic.woff2") format("woff2") url("/fonts/inter/Inter-BlackItalic.woff") format("woff")',
			},

			{
				fontFamily: 'Inter var',
				fontStyle: 'normal',
				fontWeight: '100 900',
				fontDisplay: 'swap',
				src: 'url("/fonts/inter/Inter-roman.var.woff2") format("woff2")',
				//font-named-instance: 'Regular';
			},
			{
				fontFamily: 'Inter var',
				fontStyle: 'italic',
				fontWeight: '100 900',
				fontDisplay: 'swap',
				src: 'url("/fonts/inter/Inter-italic.var.woff2") format("woff2")',
				//font-named-instance: 'Italic';
			},
		],
	})();
};

export function App(): JSX.Element {
	globals();

	return (
		<StoreProvider store={store}>
			<ProgressBar />

			<div css={tw`w-auto mx-auto`}>
				<BrowserRouter>
					<Routes>
						<Route path="/*">
							<Route path="*" element={<DashboardRouter />} />
						</Route>
						<Route path="auth/*">
							<Route path="*" element={<AuthRouter />} />
						</Route>
						<Route path="*" element={<NotFound />} />
					</Routes>
				</BrowserRouter>
			</div>
		</StoreProvider>
	);
}
