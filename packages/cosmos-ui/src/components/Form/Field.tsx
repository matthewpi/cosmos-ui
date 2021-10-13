import tw, { styled } from 'twin.macro';

export const FieldWrapper = styled.div({
	...tw`relative`,

	variants: {
		hasLabel: {
			true: tw`mt-1`,
		},
	},
});
