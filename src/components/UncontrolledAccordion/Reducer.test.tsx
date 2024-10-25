import {reducer, StateType, TOGGLE_COLLAPSED} from './Reducer';


test('collapsed should be true', async () => {
    const state: StateType = {
        collapsed: false,
    }

    const newState = reducer(state, {type: TOGGLE_COLLAPSED})

    expect(newState.collapsed).toBe(true);
})

test('collapsed should be false', async () => {
    const state: StateType = {
        collapsed: true,
    }

    const newState = reducer(state, {type: TOGGLE_COLLAPSED})

    expect(newState.collapsed).toBe(false);
})