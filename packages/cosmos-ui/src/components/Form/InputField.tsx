import { ExclamationCircleIcon } from '@heroicons/react/solid';
import PropTypes from 'prop-types';
import { forwardRef } from 'react';
import tw, { styled } from 'twin.macro';
import { Except } from 'type-fest';

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
	name: string;
	label?: string;
	description?: string;
	error?: string;
}

// By default name is `string | undefined` which is a nono for our use case.
type FieldProps = fieldProps & Except<React.InputHTMLAttributes<HTMLInputElement>, 'name'>;

export const InputField = forwardRef<HTMLInputElement, FieldProps>(
	({ name, label, description, error, ...props }, ref) => (
		<div>
			{label && (
				<Label htmlFor={name} show={label === undefined}>
					{label}
				</Label>
			)}

			<FieldWrapper hasLabel={label === undefined}>
				<Input {...props} ref={ref} id={name} name={name} hasError={error !== undefined} />

				{error && (
					<div css={tw`absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none`}>
						<ExclamationCircleIcon css={tw`w-5 h-5 text-red-400`} aria-hidden="true" />
					</div>
				)}
			</FieldWrapper>

			{error ? (
				<p id={`${name}-error`} css={tw`mt-2 text-sm text-red-400`}>
					{`${error.charAt(0).toUpperCase()}${error.slice(1)}`}
				</p>
			) : description ? (
				<p id={`${name}-description`} css={tw`mt-2 text-sm text-grey-500`}>
					{description}
				</p>
			) : null}
		</div>
	),
);

InputField.displayName = 'InputField';
InputField.propTypes = {
	name: PropTypes.string.isRequired,
	label: PropTypes.string.isRequired,
	description: PropTypes.string,
	error: PropTypes.string,
};
InputField.defaultProps = {
	description: undefined,
	error: undefined,
};
