import { StyledComponent } from '@emotion/styled';
import { useStoreActions, useStoreState } from 'easy-peasy';
import { DetailedHTMLProps, HTMLAttributes, useEffect, useRef, useState } from 'react';
import { CSSTransition } from 'react-transition-group';
import tw, { styled, theme } from 'twin.macro';

const randomInt = (low: number, high: number) => {
	return Math.floor(Math.random() * (high - low) + low);
};

const BarFill: StyledComponent<HTMLAttributes<HTMLDivElement>, DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>, HTMLAttributes<HTMLDivElement>> = styled.div`
	${tw`h-full bg-rose-600`};
	transition: 250ms ease-in-out;
	box-shadow: 0 -2px 10px 2px ${theme`colors.rose.600`};
`;

export function ProgressBar(): JSX.Element {
	const nodeRef = useRef(null);

	const interval = useRef<NodeJS.Timeout>();
	const timeout = useRef<NodeJS.Timeout>();

	const progress = useStoreState(state => state.progress.progress);
	const setProgress = useStoreActions(actions => actions.progress.setProgress);
	const continuous = useStoreState(state => state.progress.continuous);

	const [ visible, setVisible ] = useState(false);

	useEffect(() => {
		return () => {
			timeout.current && clearTimeout(timeout.current);
			interval.current && clearInterval(interval.current);
		};
	}, []);

	useEffect(() => {
		setVisible((progress ?? 0) > 0);

		if (progress === 100) {
			timeout.current = setTimeout(() => setProgress(undefined), 500);
		}

		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [ progress ]);

	useEffect(() => {
		if (!continuous) {
			interval.current && clearInterval(interval.current);
			return;
		}

		if (!progress || progress === 0) {
			setProgress(randomInt(20, 30));
		}

		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [ continuous ]);

	useEffect(() => {
		if (!continuous) {
			return;
		}

		interval.current && clearInterval(interval.current);

		if ((progress ?? 0) >= 90) {
			setProgress(90);
		} else {
			interval.current = setTimeout(() => setProgress((progress ?? 0) + randomInt(1, 5)), 500);
		}

		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [ continuous, progress ]);

	return (
		<div css={tw`h-[2px] fixed z-10 w-full`}>
			<CSSTransition nodeRef={nodeRef} timeout={150} appear in={visible} unmountOnExit classNames="fade">
				<BarFill ref={nodeRef} style={{ width: progress === undefined ? '100%' : `${progress}%` }} />
			</CSSTransition>
		</div>
	);
}
