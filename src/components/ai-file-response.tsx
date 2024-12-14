import { readFile } from 'node:fs/promises'
import { useEffect, useState } from 'react'
import AiResponse from './ai-response'
import type { BaseMessageLike, MessageType } from '@langchain/core/messages'
import useArgs from '~/hooks/use-args'

interface FileAiResponseProps {
	file: string
	messages: BaseMessageLike[]
}

const AiFileResponse = ({ file, messages = [] }: FileAiResponseProps) => {
	const [fileContent, setFileContent] = useState<string>()
	const { values } = useArgs()

	useEffect(() => {
		const readFileContent = async () => {
			const content = await readFile(file, { encoding: 'utf-8' })

			setFileContent(content)
		}

		readFileContent()
	}, [file])

	return fileContent ? (
		<AiResponse
			messages={[[values.role as MessageType, fileContent], ...messages]}
		/>
	) : null
}

export default AiFileResponse
