function setup() {
  createCanvas(400, 400)
  background(200)
}

function draw() {
  var count = 5
  var x = 10
  for(i = 1; i < 5; i < count) {
    rect(x, 10, 10, 10)
    x = x + 20
    i = i + 1
  }
}
 