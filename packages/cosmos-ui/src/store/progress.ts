import { StateSlice } from '~/store';

export interface ProgressSlice {
	continuous: boolean;
	progress?: number;

	setComplete: () => void;
	setProgress: (payload: number | undefined) => void;
	startContinuous: () => void;
}

export const createProgressSlice: StateSlice<ProgressSlice> = set => ({
	continuous: false,
	progress: undefined,

	setComplete: () =>
		set(prev => {
			const data: Pick<ProgressSlice, 'continuous' | 'progress'> = { continuous: false };
			if (prev.progress !== undefined) {
				data.progress = 100;
			}
			return data;
		}),

	setProgress: (payload: number | undefined) => set({ progress: payload }),
	startContinuous: () => set({ continuous: true }),
});
