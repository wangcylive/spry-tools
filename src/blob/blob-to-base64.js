/**
 * blob 转 base64
 * @param blob {Blob}
 * @return {Promise<any>}
 */
export async function blobtobase64 (blob) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader()
    reader.onload = (event) => {
      resolve(event.target.result)
    }
    reader.onabort = (abort) => {
      reject(abort)
    }
    reject.onerror = (error) => {
      reject(error)
    }
    reader.readAsDataURL(blob)
  })
}

export default blobtobase64