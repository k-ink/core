import { useMemo } from 'react'
import useArgs from './use-args'
import createModel from '~/lib/langchain/create-model'

const useModel = () => {
	const args = useArgs()

	return useMemo(
		() =>
			createModel(args.values.model, Number.parseFloat(args.values.temp ?? '')),
		[args.values.model, args.values.temp],
	)
}

export default useModel
