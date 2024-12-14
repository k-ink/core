## K-Ink Framework Information

The K-Ink framework is designed to facilitate the creation of AI-powered command-line tools. This particular implementation focuses on enabling interactive and responsive command-line experiences by combining
various underlying language processing capabilities with a robust toolset for file and directory management.

### Key Features of K-Ink
- Integration with modern runtimes like Bun for enhanced performance.
- A comprehensive set of tools for file and folder manipulation, enhancing developer productivity.
- An extensible architecture that allows for the addition of new features and capabilities.
- Seamless connection to external APIs for richer interactions.

### Available LangChain Tools

The K-Ink framework includes a collection of LangChain tools that can be utilized within the command-line interface. Below are some of the available tools:

- **File Management Tools:**
  - `file-delete.ts`: Deletes specified files.
  - `file-rename.ts`: Renames files from an old path to a new path.
  - `file-read.ts`: Reads the content of specified files.
  - `file-write.ts`: Writes content to a file, with the option to append.
  - `file-info.ts`: Retrieves information about specific files.

- **Directory Management Tools:**
  - `dir-create.ts`: Creates new directories at specified paths.
  - `dir-delete.ts`: Deletes directories, with an option for recursive deletion.
  - `dir-read.ts`: Reads the contents of specified directories.

- **Shell Execution Tools:**
  - `shell-exec.ts`: Executes shell commands directly.
  - `shell-exec-file.ts`: Executes a file with provided arguments.

- **Web Utilities:**
  - `www-download.ts`: Downloads files from specified URLs.

### Usage

You have two primary modes of operation:

1. To send a message using the default role (`system`):
    ```shell
    bun run dev -m 'user message'
    ```

2. To send a message with a specified file and role:
    ```shell
    bun run dev -f some-file.txt -r role -m 'user message'
    ```

Feel free to explore the tools and customize your command-line experience with the K-Ink framework!