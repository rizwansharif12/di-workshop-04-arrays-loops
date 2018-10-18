function setup() {
  createCanvas(800, 800)
  background(200)
}

function draw() {
  var x = 0
  var y = 0
  var count = 40

  for(j = 0; j < count; j+1) {
  for(i = 0; i < count; i+1) {
  rect(x, y, 10, 10)
  x = x + 10
  y = y + 10
  x = 0 
  }
  }
}