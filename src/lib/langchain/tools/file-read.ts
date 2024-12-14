import { tool } from '@langchain/core/tools'
import { readFile } from 'node:fs/promises'
import { z } from 'zod'

export const FileReadSchema = z.object({
	path: z.string().describe('The path to the file to read'),
})
export type FileReadSchema = z.infer<typeof FileReadSchema>

const fileReadTool = tool(
	async ({ path }): Promise<string> => {
		const file = await readFile(path, { encoding: 'utf8' })

		return file
	},
	{
		name: 'fileRead',
		description: 'Read a file',
		schema: FileReadSchema,
	},
)

export default fileReadTool
