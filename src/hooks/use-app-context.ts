import { useContext } from 'react'
import AppContext from '~/components/app/context'

const useAppContext = () => {
	const appContext = useContext(AppContext)

	return appContext
}

export default useAppContext
