import { file } from 'bun'
import { parseArgs } from 'node:util'

const getArgs = (args: string[] = process.argv.slice(2)) =>
	parseArgs({
		args: args,
		options: {
			message: { type: 'string', short: 'm' },
			file: { type: 'string', short: 'f' },
			role: { type: 'string', default: 'system', short: 'r' },
			model: { type: 'string' },
		},
	})

export default getArgs
