import create, { GetState, SetState, StateCreator, StoreApi } from 'zustand';

import { createFlashSlice, FlashSlice } from '~/store/flash';
import { createProgressSlice, ProgressSlice } from '~/store/progress';

export type StateSlice<T extends object> = StateCreator<T>;

interface State extends FlashSlice, ProgressSlice {}

export const useStore = create<State>((set, get, api) => ({
	...createFlashSlice(
		set as unknown as SetState<FlashSlice>,
		get as GetState<FlashSlice>,
		api as unknown as StoreApi<FlashSlice>,
	),
	...createProgressSlice(
		set as unknown as SetState<ProgressSlice>,
		get as GetState<ProgressSlice>,
		api as unknown as StoreApi<ProgressSlice>,
	),
}));
