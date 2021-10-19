import { Link } from 'react-router-dom';
import tw from 'twin.macro';

import { useStore } from '~/store';

export function DashboardContainer(): JSX.Element {
	const startContinuous = useStore(state => state.startContinuous);
	const setComplete = useStore(state => state.setComplete);

	return (
		<div css={tw`relative overflow-hidden`}>
			<div css={tw`w-screen h-screen bg-grey-1`}>
				<div css={tw`flex flex-col items-center justify-center w-full h-full`}>
					<h1 css={tw`text-4xl text-white`}>Cosmos</h1>
					<h2 css={tw`text-xl text-grey-500`}>
						<Link to="/auth/login">Soon&trade;</Link>
					</h2>

					<button
						type="button"
						css={tw`inline-flex items-center px-4 py-2 mt-2 text-sm font-medium text-white bg-pink-600 border border-transparent rounded-md shadow-sm hover:bg-pink-700 focus:outline-none focus:ring-2 focus:ring-pink-500`}
						onClick={() => startContinuous()}
					>
						Progress!
					</button>
					<button
						type="button"
						css={tw`inline-flex items-center px-4 py-2 mt-2 text-sm font-medium text-pink-700 bg-pink-200 border border-transparent rounded-md hover:bg-pink-200 focus:outline-none focus:ring-2 focus:ring-pink-500`}
						onClick={() => setComplete()}
					>
						Yeet
					</button>
				</div>
			</div>
		</div>
	);
}
