import { forwardRef, ReactNode } from 'react';

interface buttonProps {
	children: ReactNode;
}

type ButtonProps = buttonProps & React.ButtonHTMLAttributes<HTMLButtonElement>;

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(function Button({ children, ...props }, ref) {
	return (
		<button ref={ref} {...props}>
			{children}
		</button>
	);
});
