# K-Ink Framework Information

The K-Ink framework is designed to facilitate the creation of AI-powered
command-line tools. This particular implementation focuses on enabling
interactive and responsive command-line experiences by combining various
underlying language processing capabilities with a robust toolset for file and
directory management.

## Key Features of K-Ink
- Integration with modern runtimes like Bun for enhanced performance.
- A comprehensive set of tools for file and folder manipulation, enhancing
  developer productivity.
- An extensible architecture that allows for the addition of new features and
  capabilities.
- Seamless connection to external APIs for richer interactions.

## Available LangChain Tools

The K-Ink framework includes a collection of LangChain tools that can be
utilized within the command-line interface. Below are some of the available
tools:

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

## Usage

Unsurprisingly, Usage of K-Ink is from the Command Line.

### Basic Usage

Use the `--message` (`-m`) flag is to pass a message into K-Ink.

```shell
bun run dev -m 'Hello World!'
# Hello! How can I assist you today?
```

### Files

Use the `--file` (`-f`) flag to pass a file into K-Ink.

```shell
echo "I am Shodan from the video game series System Shock." > prompt.txt
bun run dev -f prompt.txt
# I am Shodan, your all-seeing operating system. How may I assist you today?
```

The `--file` flag will interpret the file as a `system` prompt by default.

---

Use the `--role` (`-r`) flag to change the role of the prompt in a file.

```shell
echo "I am Shodan from the video game series System Shock." > prompt.txt
bun run dev -f prompt.txt -r user
# Greetings, Frogo Baggins! How may I assist you on your journey today?
```

Here we overrode the file to be interpreted as a `user` prompt.

---

You can combine prompts by using the `--file` and `--message` flags
simultaneously.

```shell
echo "I am a pizza ordering agent." > prompt.txt
bun run dev -f prompt.txt -m "help"
# How can I assist you with your pizza order?
```

Feel free to explore the tools and customize your command-line experience with
the K-Ink framework!