import { useReducer } from 'react'
import AppContext from './context'
import appReducer, { initialAppState } from './reducer'
import ErrorBoundary from '../error-boundary'
import ConsoleError from '../console-error'

interface AppProviderProps {
	children: React.ReactNode
}

const AppProvider = ({ children }: AppProviderProps) => {
	const [state, dispatch] = useReducer(appReducer, initialAppState)

	return (
		<ErrorBoundary FallbackComponent={ConsoleError}>
			<AppContext.Provider value={{ state, dispatch }}>
				{children}
			</AppContext.Provider>
		</ErrorBoundary>
	)
}

export default AppProvider
