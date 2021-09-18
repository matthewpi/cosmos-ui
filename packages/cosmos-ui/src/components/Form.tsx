import { ExclamationCircleIcon } from '@heroicons/react/solid';
import { Field as FField, FieldProps as FFieldProps, Form as FormikForm, Formik, FormikHelpers } from 'formik';
import { forwardRef, ReactNode } from 'react';
import tw, { styled } from 'twin.macro';

interface FormProps<T> {
	initialValues: T;
	validationSchema?: any | (() => any);
	onSubmit: (values: T, formikHelpers: FormikHelpers<T>) => void | Promise<any>;

	className?: string;
	children: ReactNode;
}

export function Form<T>({ initialValues, validationSchema, onSubmit, className, children }: FormProps<T>): JSX.Element {
	return (
		<Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={onSubmit}>
			<FormikForm className={className}>{children}</FormikForm>
		</Formik>
	);
}

const FieldWrapper = styled.div({
	...tw`relative`,
	variants: {
		hasLabel: {
			true: tw`mt-1`,
		},
	},
});

const Input = styled.input({
	...tw`block w-full px-3 py-2 border rounded-md shadow-sm appearance-none focus:outline-none focus:ring-rose-500 focus:border-rose-500 sm:text-sm`,
	variants: {
		hasError: {
			true: {
				...tw`text-red-900 border-red-300`,
				'&::placeholder': tw`text-red-300`,
			},
			false: {
				...tw`border-gray-300`,
				'&::placeholder': tw`text-gray-400`,
			},
		},
	},
});

interface fieldProps {
	name: string;
	label: string;
	showLabel?: boolean;
	description?: string;
}

type FieldProps = fieldProps & Omit<React.InputHTMLAttributes<HTMLInputElement>, 'name'>;

export const Field = forwardRef<HTMLInputElement, FieldProps>(function Field(
	{ id, name, label, showLabel, description, ...props },
	ref,
) {
	return (
		<FField innerRef={ref} name={name}>
			{({ field, meta: { error, touched } }: FFieldProps) => (
				<div>
					{label && (
						<label htmlFor={id} css={showLabel ? tw`block text-sm font-medium text-gray-700` : tw`sr-only`}>
							{label}
						</label>
					)}

					<FieldWrapper hasLabel={showLabel}>
						<Input id={id} {...field} {...props} hasError={error !== undefined && touched} />

						{error !== undefined && touched && (
							<div css={tw`absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none`}>
								<ExclamationCircleIcon css={tw`w-5 h-5 text-red-500`} aria-hidden="true" />
							</div>
						)}
					</FieldWrapper>

					{error !== undefined && touched ? (
						<p id={id + '-error'} css={tw`mt-2 text-sm text-red-600`}>
							{error.charAt(0).toUpperCase() + error.slice(1)}
						</p>
					) : description ? (
						<p id={id + '-description'} css={tw`mt-2 text-sm text-gray-500`}>
							{description}
						</p>
					) : null}
				</div>
			)}
		</FField>
	);
});
