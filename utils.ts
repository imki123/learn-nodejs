import fs from 'fs'

// 경로가 존재하는지 체크하고 디렉토리가 없으면 생성
export function checkAndMakePath(dirPath: string) {
  try {
    const isExistDir =
      fs.existsSync(dirPath) && fs.lstatSync(dirPath).isDirectory()
    if (!isExistDir) fs.mkdirSync(dirPath, { recursive: true })
    return true
  } catch (err) {
    console.error(err)
    return false
  }
}

// 경로에 파일을 만들어주는 유틸
export function makeFile(path: string, data: string) {
  // path는 경로/파일명 으로 이루어 져야함
  const idx = path.lastIndexOf('/')
  const dir = path.substring(0, idx + 1)
  const fileName = path.substring(idx + 1)
  const newFilePath = `${dir}${fileName}`

  if (checkAndMakePath(dir)) {
    fs.writeFile(newFilePath, data, (error) => {
      if (!error) console.log(`${newFilePath} was written!`)
      else console.log('Writing file failed!', error)
    })
  }
}
