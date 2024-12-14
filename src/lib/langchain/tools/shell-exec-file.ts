import { tool } from '@langchain/core/tools'
import { execFile } from 'node:child_process'
import { promisify } from 'node:util'
import { z } from 'zod'
import TypedError from '~/utils/create-error/custom-error'

const execFilePromise = promisify(execFile)

export const ShellExecFileSchema = z.object({
	file: z.string().describe('The path to the file to execute'),
	args: z
		.array(z.string())
		.readonly()
		.optional()
		.describe('Arguments to pass to the file'),
	options: z
		.object({
			cwd: z
				.string()
				.describe('Current working directory of the child process'),
			env: z.record(z.string()).describe('Environment key-value pairs'),
			encoding: z
				.string()
				.describe('Character encoding of the stdout and stderr output'),
			shell: z.string().describe('Shell to execute the command with'),
		})
		.partial()
		.describe('Options to pass to the child_process execFile function'),
})
export type ShellExecFileSchema = z.infer<typeof ShellExecFileSchema>

const shellExecFileTool = tool(
	async ({ file, args = [], options }): Promise<string> => {
		const { stdout, stderr } = await execFilePromise(file, args, options)

		if (stderr) {
			throw new TypedError('tool', 'ShellExecFile', {})
		}

		return stdout
	},
	{
		name: 'shellExecFile',
		description: 'Execute a file in the shell',
		schema: ShellExecFileSchema,
	},
)

export default shellExecFileTool
