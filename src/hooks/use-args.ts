import { useMemo } from 'react'
import getArgs from '~/utils/create-error/get-args'

const useArgs = () => {
	return useMemo(() => getArgs(), [process.argv])
}

export default useArgs
