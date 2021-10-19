import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import tw from 'twin.macro';
import { z } from 'zod';

import Logo from '~/assets/logo.svg';
import { InputField } from '~/components/Form';

interface Values {
	email: string;
	password: string;
}

const schema = z.object({
	email: z.string().email({ message: 'Invalid email address' }),
	password: z.string().min(8).max(64),
});

export function LoginContainer(): JSX.Element {
	const {
		formState: { errors },
		handleSubmit,
		register,
	} = useForm({
		resolver: zodResolver(schema),
	});

	const onSubmit = (data: Values) => {
		console.log(data);
	};

	return (
		<div css={tw`flex flex-col justify-center min-h-screen py-12 bg-grey-2 sm:px-6 lg:px-8`}>
			<div css={tw`sm:mx-auto sm:w-full sm:max-w-md`}>
				<img src={Logo} alt="Workflow" css={tw`w-auto h-12 mx-auto`} width={'52.5px'} height={'48px'} />
			</div>

			<div css={tw`mt-10 sm:mx-auto sm:w-full sm:max-w-md`}>
				<div css={tw`px-4 sm:px-10`}>
					<form css={tw`space-y-6`} onSubmit={handleSubmit(onSubmit)}>
						<InputField
							{...register('email')}
							error={errors['email']?.message}
							type="email"
							autoComplete="email"
							label="Email address"
							placeholder="Email address"
						/>

						<InputField
							{...register('password')}
							error={errors['password']?.message}
							type="password"
							autoComplete="current-password"
							label="Password"
							placeholder="Password"
						/>

						<button
							type="submit"
							css={tw`flex justify-center w-full px-4 py-2 text-sm font-medium text-white bg-pink-500 border border-transparent rounded-md shadow-sm hover:bg-pink-400 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-pink-500 ring-offset-grey-2`}
						>
							Sign in
						</button>

						<div css={tw`text-sm text-center`}>
							<Link to="../../" css={tw`font-medium text-pink-400 hover:text-pink-500`}>
								Forgot password?
							</Link>
						</div>
					</form>
				</div>
			</div>
		</div>
	);
}
