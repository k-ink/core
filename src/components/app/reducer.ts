import { z } from 'zod'

export const AppState = z.record(z.string())
export type AppState = z.infer<typeof AppState>

export const initialAppState: AppState = {}

export const SetAction = z.object({
	type: z.literal('set'),
	payload: z.object({
		key: z.string().describe('The key in state to set (or create)'),
		value: z.any().describe('The value to set'),
	}),
})
export type SetAction = z.infer<typeof SetAction>

export const Actions = SetAction
export type Actions = z.infer<typeof Actions>

export const ReducerActions = SetAction
export type Reducerctions = z.infer<typeof ReducerActions>

const appReducer = (state: AppState, action: SetAction): AppState => {
	switch (action.type) {
		case 'set': {
			return {
				...state,
				[action.payload.key]: action.payload.value,
			}
		}
		default: {
			return state
		}
	}
}

export default appReducer
