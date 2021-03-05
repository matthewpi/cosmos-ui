import { createStore } from 'easy-peasy';

export interface ApplicationStore {}

const state: ApplicationStore = {};

export const store = createStore(state);
