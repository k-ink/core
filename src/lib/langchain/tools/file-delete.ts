import { tool } from '@langchain/core/tools'
import { unlink } from 'node:fs/promises'
import { z } from 'zod'

export const FileDeleteSchema = z.object({
	path: z.string().describe('The path to the file to delete'),
})
export type FileDeleteSchema = z.infer<typeof FileDeleteSchema>

const fileDeleteTool = tool(
	async ({ path = process.cwd() }): Promise<string> => {
		await unlink(path)

		return `File ${path} deleted`
	},
	{
		name: 'fileDelete',
		description: 'Delete a file',
		schema: FileDeleteSchema,
	},
)

export default fileDeleteTool
