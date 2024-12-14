import dirCreate from './dir-create'
import dirDelete from './dir-delete'
import dirRead from './dir-read'
import fileDelete from './file-delete'
import fileInfo from './file-info'
import fileRead from './file-read'
import fileRename from './file-rename'
import fileWrite from './file-write'
import wwwDownload from './www-download'
import shellExec from './shell-exec'
import shellExecFile from './shell-exec-file'

const tools = [
	dirCreate,
	dirDelete,
	dirRead,
	fileDelete,
	fileInfo,
	fileRead,
	fileRename,
	fileWrite,
	shellExec,
	shellExecFile,
	wwwDownload,
]

export default tools
