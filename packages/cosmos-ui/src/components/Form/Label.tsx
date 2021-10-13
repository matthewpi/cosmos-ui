import tw, { styled } from 'twin.macro';

export const Label = styled.label({
	variants: {
		show: {
			true: tw`block text-sm font-normal text-grey-300`,
			false: tw`sr-only`,
		},
	},
});
