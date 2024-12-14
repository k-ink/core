import { Text } from 'ink'
import { useEffect, useState } from 'react'
import { createReactAgent } from '@langchain/langgraph/prebuilt'
import { MemorySaver } from '@langchain/langgraph'
import tools from '~/lib/langchain/tools'
import { rootTemplate } from '~/lib/langchain/chat/templates/general'
import useModel from '~/hooks/use-model'
import useStateReadTool from '~/hooks/tools/use-state-read-tool'
import useStateDispatchTool from '~/hooks/tools/use-state-dispatch-tool'
import type { BaseMessageLike } from '@langchain/core/messages'

interface AiResponseProps {
	messages: BaseMessageLike[]
}

const AiResponse = ({ messages }: AiResponseProps) => {
	const stateRead = useStateReadTool()
	const stateDispatch = useStateDispatchTool()
	const model = useModel()
	const [responseMessage, setResponseMessage] = useState('')

	useEffect(() => {
		const processResponse = async () => {
			const agent = createReactAgent({
				llm: model,
				tools: [stateRead, stateDispatch, ...tools],
				checkpointSaver: new MemorySaver(),
			})

			const response = await agent.invoke(
				{ messages: messages },
				{ configurable: { thread_id: 0xbead } },
			)

			const mostRecentMessageContent =
				response.messages[response.messages.length - 1].content

			if (typeof mostRecentMessageContent === 'string') {
				setResponseMessage(mostRecentMessageContent)
			}
		}

		processResponse()
	}, [messages, model, stateRead, stateDispatch])

	return <Text>{responseMessage}</Text>
}

export default AiResponse
