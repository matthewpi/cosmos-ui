import { createStore } from 'easy-peasy';
import flashes, { FlashStore } from '~/state/flashes';
import progress, { ProgressStore } from '~/state/progress';

export interface ApplicationStore {
	flashes: FlashStore;
	progress: ProgressStore;
}

const state: ApplicationStore = {
	flashes,
	progress,
};

export const store = createStore(state);
