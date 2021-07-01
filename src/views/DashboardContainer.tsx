import { Link } from 'react-router-dom';
import tw from 'twin.macro';

export function DashboardContainer(): JSX.Element {
	return (
		<div css={tw`relative overflow-hidden`}>
			<div css={tw`w-screen h-screen bg-gray-900`}>
				<div css={tw`flex flex-col items-center justify-center w-full h-full`}>
					<h1 css={tw`text-4xl text-white`}>Cosmos</h1>
					<h2 css={tw`text-xl text-gray-500`}>
						<Link to="/auth/login">
							Soon&trade;
						</Link>
					</h2>
				</div>
			</div>
		</div>
	);
}
