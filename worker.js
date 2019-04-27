function manupluate(data, pix) {
  for (let i = 0; i < pix.data.length; i++) {
    let p = pix.data[i]
    if (p == 0) {
      data.data[((4 * i) - 4)] -= 100
      data.data[((4 * i) - 4) + 1] -= 100
      data.data[((4 * i) - 4) + 2] -= 100
    }
  }
  return data
}

this.onmessage = e => {
  let data = e.data.data 
  let pix = e.data.pix
  data = manupluate(data, pix)
  this.postMessage(data)
}