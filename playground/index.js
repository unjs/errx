import assert from 'node:assert'
import { captureStackTrace } from 'errx'

// eslint-disable-next-line no-console
console.log(captureStackTrace())

const [thisFile] = captureStackTrace()
assert.equal(thisFile.source, import.meta.url)
