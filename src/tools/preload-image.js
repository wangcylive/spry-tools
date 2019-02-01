function imageLoad (url) {
  return new Promise((resolve, reject) => {
    requestAnimationFrame(() => {
      const img = new Image()
      img.onload = () => {
        img.onload = null
        resolve(url)
      }
      img.onerror = () => {
        reject(url)
      }
      img.src = url
    })
  })
}

function windowLoad () {
  return new Promise((resolve, reject) => {
    if (document.readyState === 'complete') {
      resolve()
      return
    }
    const load = () => {
      window.removeEventListener('load', load, false)
      resolve()
    }
    window.addEventListener('load', load, false)
  })
}

let preloadImage = async function (url) {
  await windowLoad()
  preloadImage = async function (url) {
    await imageLoad(url)
  }
  await imageLoad(url)
}

export default preloadImage
