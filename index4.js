let textList = ["7Ja065SU6rmM7KeAIOydtOyWtOyngOuKlCDqsbDslbw/", "64GK7J6E7JeG64qUIOuwqQ==", "7IiY66m067aA7KGx"];

//where the 3 texts are, chosen again every time the page opens
let x1, y1, x2, y2, x3, y3;

//square's location
let x, y

//background color, chosen again every time the page opens
let r, g, b;

function setup() {
  let canvas = createCanvas(1200, 700);
  canvas.parent("sketch");
  rectMode(CENTER);

  //new random places for the texts
  x = random(0, 1200);
  y = random(0, 700);
  x1 = random(0, 400);
  y1 = random(0, 250);
  x2 = random(400, 800);
  y2 = random(250, 500);
  x3 = random(800, 1200);
  y3 = random(500, 700);

  //new random dark background color
  r = random(0, 255);
  g = random(0, 255);
  b = random(0, 255);
}

function draw() {
  background(r, g, b);
  noStroke();

  //these are black, so you only see them under the flashlight
  fill(0);
  textSize(20);
  text(random(textList), x1, y1);
  text(random(textList), x2, y2);
  text(random(textList), x3, y3);
  text(random(textList), x1, y2);
  text(random(textList), x1, y3);
  text(random(textList), x2, y1);
  text(random(textList), x2, y3);
  text(random(textList), x3, y1);
  text(random(textList), x3, y2);

  //hidden door in the corner
  rect(x, y, 30, 30);
  rect(x/2, y/2, 50, 50);

  //after 2 seconds, open index.html again
  //it is the same page, but the texts and color are new, so it feels like a different page
  if (millis() > 1000) {
    window.location.href = "index4.html";
    noLoop();
    //stop draw() so it only goes once
  }
}

function mousePressed() {
  if (insideRect(mouseX, mouseY, x, y, 30, 30)) {
    window.location.href = "index.html";
  }
  if (insideRect(mouseX, mouseY, x/2, y/2, 30, 30)) {
  window.location.href = "dead-end.html";
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
