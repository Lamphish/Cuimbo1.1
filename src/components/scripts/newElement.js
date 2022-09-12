export default function createCircle() {
    var canvas = document.getElementById("playground")
     var ctx = canvas.getContext('2d')

    ctx.beginPath()
    ctx.strokeRect(50, 35, 50, 50)
}