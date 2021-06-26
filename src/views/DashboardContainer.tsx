import React from 'react';
import tw from 'twin.macro';

export default () => {
	return (
		<div css={tw`relative overflow-hidden`}>
			<div css={tw`w-screen h-screen bg-gray-900`}>
				<div css={tw`flex flex-col items-center justify-center w-full h-full`}>
					<h1 css={tw`text-4xl text-white`}>Cosmos</h1>
					<h2 css={tw`text-xl text-gray-500`}>Soon&trade;</h2>
				</div>
			</div>
		</div>
	);
};
