import { Link } from 'react-router-dom';
import tw from 'twin.macro';

export function LoginContainer(): JSX.Element {
	return (
		<div css={tw`flex flex-col justify-center min-h-screen py-12 bg-gray-50 sm:px-6 lg:px-8`}>
			<div css={tw`sm:mx-auto sm:w-full sm:max-w-md`}>
				<img
					css={tw`w-auto h-12 mx-auto`}
					src="/logo.svg"
					alt="Workflow"
				/>
			</div>

			<div css={tw`mt-8 sm:mx-auto sm:w-full sm:max-w-md`}>
				<div css={tw`px-4 sm:px-10`}>
					<form css={tw`space-y-6`} action="#" method="POST" onSubmit={(e) => e.preventDefault()}>
						<div>
							<label htmlFor="email" css={tw`sr-only`}>
								Email address
							</label>
							<div css={tw`mt-1`}>
								<input
									id="email"
									name="email"
									type="email"
									autoComplete="email"
									placeholder="Email address"
									required
									css={tw`block w-full px-3 py-2 placeholder-gray-400 border border-gray-300 rounded-md shadow-sm appearance-none focus:outline-none focus:ring-rose-500 focus:border-rose-500 sm:text-sm`}
								/>
							</div>
						</div>

						<div>
							<label htmlFor="password" css={tw`sr-only`}>
								Password
							</label>
							<div css={tw`mt-1`}>
								<input
									id="password"
									name="password"
									type="password"
									autoComplete="current-password"
									placeholder="Password"
									required
									css={tw`block w-full px-3 py-2 placeholder-gray-400 border border-gray-300 rounded-md shadow-sm appearance-none focus:outline-none focus:ring-rose-500 focus:border-rose-500 sm:text-sm`}
								/>
							</div>
						</div>

						<div>
							<button
								type="submit"
								css={tw`flex justify-center w-full px-4 py-2 text-sm font-medium text-white border border-transparent rounded-md shadow-sm bg-rose-600 hover:bg-rose-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-rose-500`}
							>
								Sign in
							</button>
						</div>

						<div>
							<div css={tw`text-sm text-center`}>
								<Link to="/" css={tw`font-medium text-rose-600 hover:text-rose-500`}>
									Forgot password?
								</Link>
							</div>
						</div>
					</form>
				</div>
			</div>
		</div>
	);
}
