let spinner = document.querySelector('.spinner')
let video = document.querySelector('#video')
let worker = new Worker('worker.js')
let canvas2 = document.createElement('canvas')
if (navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
  navigator.mediaDevices.getUserMedia({
    video: true
  }).then(function (stream) {
    video.srcObject = stream
    video.play()
  })
}
let canvas = document.querySelector('#canvas')
let ctx = canvas.getContext('2d')
canvas2.height = canvas.height 
canvas2.width = canvas.width
let ctx2 = canvas2.getContext('2d')
let i = new Image()
i.src = '1.png'

let bodypix

bodyPix.load().then(net => {
  bodypix = net
  spinner.style.display = 'none'
  console.log(bodypix)
})

setInterval(() => {
  ctx2.drawImage(video, 0, 0, 800, 800)
  if(bodypix){
    bodypix.estimatePersonSegmentation(video, 16, 0.6).then(pix=>{
      let data = ctx2.getImageData(0, 0, canvas.width, canvas.height)
      worker.postMessage({data, pix})
    })
    
  }
}, 1)

worker.onmessage = e => {
  ctx.putImageData(e.data, 0, 0)  
}