import tw, { styled } from 'twin.macro';

export const Label = styled.label({
	variants: {
		show: {
			true: tw`block text-sm font-medium text-grey-400`,
			false: tw`sr-only`,
		},
	},
});
