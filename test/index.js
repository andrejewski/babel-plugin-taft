import fs from 'fs'
import test from 'ava'
import taft from '../src'
import path from 'path'
import * as babel from 'babel-core'

function testFile (inputFilepath) {
  const title = path.basename(inputFilepath)
  test(title, t => {
    const result = babel.transformFileSync(inputFilepath, {plugins: [taft]})
    const actual = result.code
    console.log(actual)
  })
}

const root = path.join(__dirname, 'fixtures')
const files = fs.readdirSync(root).map(filename => path.join(root, filename))
files.map(testFile)
