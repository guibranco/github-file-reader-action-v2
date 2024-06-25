import * as core from '@actions/core'
import fs from 'fs'
import util from 'util'
import { statSync } from 'fs'

/**
 * The main function for the action.
 * @returns {Promise<void>} Resolves when the action is complete.
 */
export async function run(): Promise<void> {
  try {
    const filePath: string = core.getInput('path')
    const encoding: string = core.getInput('encoding')
   const stats = statSync(filePath)
   const fileSize = stats.size
    const readFile = util.promisify(fs.readFile)
    const contentBuffer = await readFile(filePath, encoding as BufferEncoding)
   core.setOutput('size', fileSize)
    const contents: string = contentBuffer.toString()
    core.info(`File contents:\n${contents}`)
    core.setOutput('contents', contents)
  } catch (error: unknown) {
    core.setFailed((error as Error).message)
  }
}
