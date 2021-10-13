import { Link } from 'react-router-dom';
import tw from 'twin.macro';
import { object, string } from 'yup';

import Logo from '~/assets/logo.svg';
import { Form, InputField } from '~/components/Form';

interface Values {
	email: string;
	password: string;
}

export function LoginContainer(): JSX.Element {
	const initialValues: Values = {
		email: '',
		password: '',
	};

	const validationSchema = object().shape({
		email: string().required().email(),
		password: string().required(),
	});

	const onSubmit = () => {
		//
	};

	return (
		<div css={tw`flex flex-col justify-center min-h-screen py-12 bg-grey-2 sm:px-6 lg:px-8`}>
			<div css={tw`sm:mx-auto sm:w-full sm:max-w-md`}>
				<img src={Logo} alt="Workflow" css={tw`w-auto h-12 mx-auto`} />
			</div>

			<div css={tw`mt-10 sm:mx-auto sm:w-full sm:max-w-md`}>
				<div css={tw`px-4 sm:px-10`}>
					<Form
						css={tw`space-y-6`}
						initialValues={initialValues}
						validationSchema={validationSchema}
						onSubmit={onSubmit}
					>
						<InputField
							id="email"
							name="email"
							type="email"
							autoComplete="email"
							label="Email address"
							placeholder="Email address"
						/>

						<InputField
							id="password"
							name="password"
							type="password"
							autoComplete="current-password"
							label="Password"
							placeholder="Password"
						/>

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
								<Link to="../../" css={tw`font-medium text-rose-600 hover:text-rose-700`}>
									Forgot password?
								</Link>
							</div>
						</div>
					</Form>
				</div>
			</div>
		</div>
	);
}
