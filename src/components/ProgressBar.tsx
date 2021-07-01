import { useStoreActions, useStoreState } from 'easy-peasy';
import { useEffect, useRef, useState } from 'react';
import { CSSTransition } from 'react-transition-group';
import tw, { styled } from 'twin.macro';

const randomInt = (low: number, high: number) => Math.floor(Math.random() * (high - low) + low);

const BarFill = styled.div`
	${tw`h-full bg-blue-400`};
	transition: 250ms ease-in-out;
	box-shadow: 0 -2px 10px 2px hsl(178, 78%, 57%);
`;

export function ProgressBar(): JSX.Element {
	const [ visible, setVisible ] = useState(false);

	const interval = useRef<NodeJS.Timeout>();
	const timeout = useRef<NodeJS.Timeout>();

	const progress = useStoreState(state => state.progress.progress);
	const continuous = useStoreState(state => state.progress.continuous);
	const setProgress = useStoreActions(actions => actions.progress.setProgress);

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
	}, [ progress ]);

	useEffect(() => {
		if (!continuous) {
			interval.current && clearInterval(interval.current);
			return;
		}

		if (!progress || progress === 0) {
			setProgress(randomInt(20, 30));
		}
	}, [ continuous ]);

	useEffect(() => {
		if (continuous) {
			interval.current && clearInterval(interval.current);
			if ((progress ?? 0) >= 90) {
				setProgress(90);
			} else {
				interval.current = setTimeout(() => setProgress((progress ?? 0) + randomInt(1, 5)), 500);
			}
		}
	}, [ progress, continuous ]);

	return (
		<div css={tw`h-[2px] fixed z-10 w-full`}>
			<CSSTransition timeout={150} appear in={visible} unmountOnExit classNames="fade">
				<BarFill style={{ width: progress === undefined ? '100%' : `${progress}%` }} />
			</CSSTransition>
		</div>
	);
}
