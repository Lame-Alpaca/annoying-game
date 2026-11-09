let size = 50;
let a = 0;
let b = 0;
let setNumber = 13;
//Number of phases; pattern versatility

function setup() {
  createCanvas(windowWidth, windowHeight);
  rectMode(CENTER);
}

function draw() {

  noStroke();
  background(0, 100, 255);

  a = floor(millis() / 300) % 11;
  //Speed of the transition
  console.log(a)
  

  let count = 0;
  let step = floor(millis() / 300);
  //Speed of the movement

  for (x = size / 2; x <= width; x += size) {
    for (y = size / 2; y <= height; y += size) {
      if ((count % setNumber) + a === (step % setNumber) + a) {
        fill(200, 200, 255);
        circle(x, y, size);
      } else {
        fill(0, 10 + (5*a), 200);
        square(x, y, size, 50);
      }
      count += 2 + b;
    }
  }
  fill(255);
  rect(width / 2, height / 2, 50, 50);
}

function mousePressed() {
  if (insideRect(mouseX, mouseY, width / 2, height / 2, 50, 50)) {
    window.location.href = "index.html";
  }
}

function insideRect(px, py, rx, ry, rw, rh) {
  return (
    px > rx - rw / 2 &&
    px < rx + rw / 2 &&
    py > ry - rh / 2 &&
    py < ry + rh / 2
  );
}