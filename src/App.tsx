import React from 'react';
import { StoreProvider } from 'easy-peasy';
import tw, { GlobalStyles } from 'twin.macro';
import { store } from '~/state';

const App = () => {
	return (
		<>
			<GlobalStyles/>

			<StoreProvider store={store}>
				<div>
					<h1 css={tw`font-sans`}>Hello, world!</h1>
				</div>
			</StoreProvider>
		</>
	);
};

export default App;
