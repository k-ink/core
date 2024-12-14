import { tool } from '@langchain/core/tools'
import { useContext, useMemo } from 'react'
import { z } from 'zod'
import AppContext from '~/components/app/context'
import { ReducerActions } from '~/components/app/reducer'

export const StateDispatchSchema = z.object({
	action: ReducerActions,
})
export type StateDispatchSchema = z.infer<typeof StateDispatchSchema>

export const useStateDispatchTool = () => {
	const { dispatch } = useContext(AppContext)

	return useMemo(() => {
		return tool(
			async ({ action }): Promise<string> => {
				dispatch(action)

				return `Action ${action.type} dispatched`
			},
			{
				name: 'stateDispatch',
				description: 'Dispatch an action to the app reducer',
				schema: StateDispatchSchema,
			},
		)
	}, [])
}

export default useStateDispatchTool
