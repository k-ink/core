import { tool } from '@langchain/core/tools'
import { useContext, useMemo } from 'react'
import { z } from 'zod'
import AppContext from '~/components/app/context'
import { AppState } from '~/components/app/reducer'

export const StateReadSchema = z.object({
	path: AppState.keySchema.describe('The field to read from the app state'),
})
export type StateReadSchema = z.infer<typeof StateReadSchema>

export const useStateReadTool = () => {
	const { state } = useContext(AppContext)

	return useMemo(() => {
		return tool(
			async ({ path }): Promise<string> => {
				return state[path] ?? `Field ${path} not found in state`
			},
			{
				name: 'stateRead',
				description: 'Read a value from the app state',
				schema: StateReadSchema,
			},
		)
	}, [])
}

export default useStateReadTool
