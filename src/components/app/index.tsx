import AiResponse from '../ai-response'
import useArgs from '~/hooks/use-args'
import AppProvider from './content-provider'
import AiFileResponse from '../ai-file-response'

const App = () => {
	const { values } = useArgs()

	return (
		<AppProvider>
			{values.file ? (
				<AiFileResponse
					file={values.file}
					messages={values.message ? [['user', values.message]] : []}
				/>
			) : (
				values.message && <AiResponse messages={[['user', values.message]]} />
			)}
		</AppProvider>
	)
}

export default App
