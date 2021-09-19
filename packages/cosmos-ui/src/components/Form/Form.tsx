import { Form as FormikForm, Formik, FormikHelpers } from 'formik';
import { ReactNode } from 'react';

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
