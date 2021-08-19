import { useStoreActions } from 'easy-peasy';
import { Link } from 'react-router-dom';
import tw from 'twin.macro';

export function DashboardContainer(): JSX.Element {
	const startContinuous = useStoreActions(actions => actions.progress.startContinuous);
	const setComplete = useStoreActions(actions => actions.progress.setComplete);

	return (
		<div css={tw`relative overflow-hidden`}>
			<div css={tw`w-screen h-screen bg-gray-900`}>
				<div css={tw`flex flex-col items-center justify-center w-full h-full`}>
					<h1 css={tw`text-4xl text-white`}>Cosmos</h1>
					<h2 css={tw`text-xl text-gray-500`}>
						<Link to="/auth/login">Soon&trade;</Link>
					</h2>

					<button
						type="button"
						css={tw`inline-flex items-center px-4 py-2 mt-2 text-sm font-medium text-white border border-transparent rounded-md shadow-sm bg-rose-600 hover:bg-rose-700 focus:outline-none focus:ring-2 focus:ring-rose-500`}
						onClick={() => {
							startContinuous();
						}}
					>
						Progress!
					</button>
					<button
						type="button"
						css={tw`inline-flex items-center px-4 py-2 mt-2 text-sm font-medium border border-transparent rounded-md text-rose-700 bg-rose-100 hover:bg-rose-200 focus:outline-none focus:ring-2 focus:ring-rose-500`}
						onClick={() => {
							setComplete();
						}}
					>
						Yeet
					</button>
				</div>
			</div>
		</div>
	);
}
