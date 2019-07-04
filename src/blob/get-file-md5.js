import SparkMD5 from 'spark-md5'

const blobSlice = File.prototype.slice || File.prototype.mozSlice || File.prototype.webkitSlice

/**
 * 获取文件 md5
 * @param file {Blob}
 * @return {Promise<any>}
 */
export async function getFileMd5 (file) {
  return new Promise((resolve, reject) => {
    const chunkSize = 2097152
    const chunks = Math.ceil(file.size / chunkSize)
    let currentChunk = 0
    const spark = new SparkMD5.ArrayBuffer()
    const fileReader = new FileReader()

    fileReader.onload = function (e) {
      spark.append(e.target.result)
      currentChunk++

      if (currentChunk < chunks) {
        loadNext()
      } else {
        resolve(spark.end())
      }
    }

    fileReader.onerror = function () {
      reject(new Error('getFileMd5 fileReader fail.'))
    }

    function loadNext () {
      const start = currentChunk * chunkSize
      const end = ((start + chunkSize) >= file.size) ? file.size : start + chunkSize

      fileReader.readAsArrayBuffer(blobSlice.call(file, start, end))
    }

    loadNext()
  })
}