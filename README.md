# GitHub File Reader Action V2

[![GitHub repo](https://img.shields.io/badge/GitHub-guibranco%2Fgithub--file--reader--action--v2-green.svg?style=plastic&logo=github)](https://github.com/guibranco/github-file-reader-action-v2 "shields.io")
[![GitHub code size in bytes](https://img.shields.io/github/languages/code-size/guibranco/github-file-reader-action-v2?color=green&label=Code%20size&style=plastic&logo=github)](https://github.com/guibranco/github-file-reader-action-v2 "shields.io")
[![GitHub last commit](https://img.shields.io/github/last-commit/guibranco/github-file-reader-action-v2?color=green&logo=github&style=plastic&label=Last%20commit)](https://github.com/guibranco/github-file-reader-action-v2 "shields.io")
[![GitHub license](https://img.shields.io/github/license/guibranco/github-file-reader-action-v2?color=green&logo=github&style=plastic&label=License)](https://github.com/guibranco/github-file-reader-action-v2 "shields.io")

![Check Dist](https://github.com/guibranco/github-file-reader-action-v2/actions/workflows/check-dist.yml/badge.svg)
![CI](https://github.com/guibranco/github-file-reader-action-v2/actions/workflows/ci.yml/badge.svg)
![CodeQL](https://github.com/guibranco/github-file-reader-action-v2/actions/workflows/codeql.yml/badge.svg)
![Linter](https://github.com/guibranco/github-file-reader-action-v2/actions/workflows/linter.yml/badge.svg)
[![wakatime](https://wakatime.com/badge/github/guibranco/github-file-reader-action-v2.svg)](https://wakatime.com/badge/github/guibranco/github-file-reader-action-v2)

GitHub Action to read the contents of a file

> [!Important]
>
> **Disclaimer:** This version was created because the creator has not updated the [original (V1)](https://github.com/andstor/file-reader-action) for a while.

This is a GitHub Action that reads a file's contents. If you give it a path to a file, it will provide its contents and file size, accessible through an output variable.

## Usage

The following example [workflow step](https://help.github.com/en/actions/configuring-and-managing-workflows/configuring-a-workflow) will read the contents of the `package.json` file.

```yml
- name: "Read file contents"
  uses: guibranco/github-file-reader-action-v2@latest
  id: read_file
  with:
    path: "package.json"
```

## Options ⚙️

The following input variable options can/must be configured:

|Input variable|Necessity|Description|Default|
|----|----|----|----|
|`path`|Required|the path to the file to read.||
|`encoding`|Optional|the encoding of the file to read.|`utf8`|

## Outputs

- `contents`: The contents of the file.
- `size`: The size of the file.

## Example

```yml
name: "Read file contents"

on: [push, pull_request]

jobs:
  file_contents:
    runs-on: ubuntu-latest
    steps:
      - name: Checkout code
        uses: actions/checkout@v4

      - name: Read file contents
        uses: guibranco/github-file-reader-action-v2@latest
        id: read_file
        with:
          path: "package.json"

      - name: File contents
        run: echo "${ steps.read_file.outputs.contents }"

      - name: File size
        run: echo "${ steps.read_file.outputs.size }"
```

## License

Copyright © 2024 [André Storhaug](https://github.com/andstor), [GuiBranco](https://github.com/guibranco).

file-reader-action-v2 is licensed under the [MIT License](https://github.com/guibranco/github-file-reader-action-v2/blob/main/LICENSE).
