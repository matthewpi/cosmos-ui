import PropTypes from 'prop-types';
import { forwardRef, ReactNode } from 'react';

interface buttonProps {
	children: ReactNode;
}

type ButtonProps = buttonProps & React.ButtonHTMLAttributes<HTMLButtonElement>;

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(({ children, ...props }, ref) => (
	// eslint-disable-next-line react/button-has-type
	<button {...props} ref={ref}>
		{children}
	</button>
));

Button.displayName = 'Button';
Button.propTypes = {
	children: PropTypes.node.isRequired,
};
