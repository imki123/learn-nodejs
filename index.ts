import fs from 'fs'
import { makeFile } from './utils.js'

// 파일을 읽고 새로운 파일 생성
fs.readFile('hello.html', 'utf8', (err, data) => {
  if (err) {
    console.error(err)
    return
  }
  const lines = data.split('\n')

  lines[1] += '\n  Hoodie!'
  const targetPath = './output/1/2/3'
  const newFilePath = `${targetPath}/newHello.html`

  makeFile(newFilePath, lines.join('\n'))

  // fs.unlinkSync(newFilePath) // 파일 삭제
})
