import { tool } from '@langchain/core/tools'
import { writeFile } from 'node:fs/promises'
import { z } from 'zod'

export const WwwDownloadSchema = z.object({
	url: z.string().describe('The URL to download the file from'),
	path: z.string().describe('The path to save the downloaded file'),
})
export type WwwDownloadSchema = z.infer<typeof WwwDownloadSchema>

const wwwDownloadTool = tool(
	async ({ url, path }: WwwDownloadSchema): Promise<string> => {
		const response = await fetch(url)

		const buffer = await response.arrayBuffer()

		await writeFile(path, new Uint8Array(buffer))

		return `File downloaded from ${url} and saved to ${path}`
	},
	{
		name: 'wwwDownload',
		description: 'Download a file from the web',
		schema: WwwDownloadSchema,
	},
)

export default wwwDownloadTool
