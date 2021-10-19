import { ExclamationCircleIcon } from '@heroicons/react/solid';
import { forwardRef } from 'react';
import tw, { styled } from 'twin.macro';

import { FieldWrapper } from '~/components/Form/FieldWrapper';
import { Label } from '~/components/Form/Label';

const Input = styled.input({
	...tw`block w-full px-3 py-2 bg-transparent border rounded-md shadow-sm appearance-none focus:outline-none sm:text-sm`,

	variants: {
		hasError: {
			true: {
				...tw`text-red-500 border-red-400 focus:border-red-500 focus:ring-red-500`,
				'&::placeholder': tw`text-red-300`,
			},
			false: {
				...tw`text-white border-grey-800 focus:border-pink-500 focus:ring-0`,
				'&::placeholder': tw`text-grey-400`,
			},
		},
	},
});

interface fieldProps {
	label: string;
	showLabel?: boolean;
	description?: string;
	error?: string;
}

type FieldProps = fieldProps & React.InputHTMLAttributes<HTMLInputElement>;

export const InputField = forwardRef<HTMLInputElement, FieldProps>(function Field(
	{ name, label, showLabel: _showLabel, description, error, ...props },
	ref,
) {
	const showLabel = _showLabel === undefined ? true : _showLabel;

	return (
		<div>
			{label && (
				<Label htmlFor={name} show={showLabel}>
					{label}
				</Label>
			)}

			<FieldWrapper hasLabel={showLabel}>
				<Input {...props} ref={ref} id={name} name={name} hasError={error !== undefined} />

				{error !== undefined && (
					<div css={tw`absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none`}>
						<ExclamationCircleIcon css={tw`w-5 h-5 text-red-400`} aria-hidden="true" />
					</div>
				)}
			</FieldWrapper>

			{error !== undefined ? (
				<p id={name + '-error'} css={tw`mt-2 text-sm text-red-400`}>
					{error.charAt(0).toUpperCase() + error.slice(1)}
				</p>
			) : description ? (
				<p id={name + '-description'} css={tw`mt-2 text-sm text-grey-500`}>
					{description}
				</p>
			) : null}
		</div>
	);
});
