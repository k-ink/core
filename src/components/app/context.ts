import { createContext, type Dispatch } from 'react'
import { type Actions, initialAppState, type AppState } from './reducer'

export interface AppContext {
	state: AppState
	dispatch: Dispatch<{ type: Actions['type']; payload: any }>
}

export const initialAppContext: AppContext = {
	state: initialAppState,
	dispatch: (..._: any[]) => initialAppState,
}

const AppContext = createContext(initialAppContext)

export default AppContext
