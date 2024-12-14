import { tool } from '@langchain/core/tools'
import { z } from 'zod'
import { promisify } from 'node:util'
import { exec } from 'node:child_process'
import TypedError from '~/utils/create-error/custom-error'

const execPromise = promisify(exec)

export const ShellExecSchema = z.object({
	command: z.string().describe('The shell command to run'),
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
		.describe('Options to pass to the child_process exec function'),
})
export type ShellExecSchema = z.infer<typeof ShellExecSchema>

const shellRunnerTool = tool(
	async ({ command, options }): Promise<string> => {
		const { stdout, stderr } = await execPromise(command, options)

		if (stderr) {
			throw new TypedError('tool', 'ShellRunner', {})
		}

		return stdout
	},
	{
		name: 'shellExec',
		description: 'Run a command in the shell',
		schema: ShellExecSchema,
	},
)

export default shellRunnerTool
