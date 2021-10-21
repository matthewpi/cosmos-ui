import { Transition } from '@headlessui/react';
import { css } from '@stitches/react';
import { Fragment, useEffect, useRef, useState } from 'react';
import tw, { styled, theme } from 'twin.macro';

import { useStore } from '~/store';

const randomInt = (low: number, high: number) => {
	return Math.floor(Math.random() * (high - low) + low);
};

const BarFill = styled.div({
	...tw`h-full bg-pink-500`,

	transition: '250ms ease-in-out',
	boxShadow: '0 -2px 10px 2px ' + theme`colors.pink.500`,
});

export function ProgressBar(): JSX.Element {
	const ref = useRef(null);

	const interval = useRef<NodeJS.Timeout>();
	const timeout = useRef<NodeJS.Timeout>();

	const progress = useStore(state => state.progress);
	const setProgress = useStore(state => state.setProgress);
	const continuous = useStore(state => state.continuous);

	const [visible, setVisible] = useState(false);

	useEffect(() => {
		return () => {
			if (timeout.current) {
				clearTimeout(timeout.current);
			}

			if (interval.current) {
				clearInterval(interval.current);
			}
		};
	}, []);

	useEffect(() => {
		setVisible((progress ?? 0) > 0);

		if (progress === 100) {
			timeout.current = setTimeout(() => {
				setProgress(undefined);
			}, 500);
		}
	}, [progress, setProgress]);

	useEffect(() => {
		if (!continuous) {
			if (interval.current) {
				clearInterval(interval.current);
			}

			return;
		}

		if (!progress || progress === 0) {
			setProgress(randomInt(1, 5));
		}
	}, [continuous, progress, setProgress]);

	useEffect(() => {
		if (!continuous) {
			return;
		}

		if (interval.current) {
			clearInterval(interval.current);
		}

		if ((progress ?? 0) >= 90) {
			setProgress(90);
		} else {
			interval.current = setTimeout(() => {
				setProgress((progress ?? 0) + randomInt(1, 5));
			}, 333);
		}
	}, [continuous, progress, setProgress]);

	return (
		<div css={tw`h-[2px] fixed z-10 w-full`}>
			<Transition
				appear
				unmount
				as={Fragment}
				show={visible}
				enter={css(tw`transition-opacity duration-150`).toString()}
				enterFrom={css(tw`opacity-0`).toString()}
				enterTo={css(tw`opacity-100`).toString()}
				leave={css(tw`transition-opacity duration-150`).toString()}
				leaveFrom={css(tw`opacity-100`).toString()}
				leaveTo={css(tw`opacity-0`).toString()}
			>
				<BarFill ref={ref} style={{ width: progress === undefined ? '100%' : `${progress}%` }} />
			</Transition>
		</div>
	);
}
