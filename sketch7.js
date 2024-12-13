let img;
let brushShape = "square"; 
let brushColor = [0, 0, 0]; // Initial color is black
const brushSize = 10; 
const size1 = 45; // Size of each color square
const size2 = 45;
function preload() {
  img = loadImage('img/dino.png'); 
}

function setup() {
  let myCanvas = createCanvas(400, 500);
myCanvas.parent ("sketchbox");
  background(255);
  rectMode(CORNER); // Use CORNER mode for easier detection
  noStroke();

  imageMode(CENTER); 
  image(img, width / 2, height / 2, 300, 250);
}

function draw() {
  if (mouseIsPressed) {
    drawShape(mouseX, mouseY, pmouseX, pmouseY, brushShape);
  }

  push();
  fill('#fe6076');
  rect(0, 0, 400, 110);
  rect(0, 400, 800, 110);
  pop();

    fill(0);
  textSize(16);
    textFont('Courier New', 10);
  text("click to draw, space to clear", 120, 390);
   
  drawPalette();
}

function drawShape(x, y, px, py, type) {
  fill(brushColor); // This will use the updated brush color

  if (type === "square") {
    for (let i = 0; i < 1; i += 0.1) {
      let interpX = lerp(px, x, i);
      let interpY = lerp(py, y, i);
      square(interpX, interpY, brushSize);
    }
  } else if (type === "circle") {
    for (let i = 0; i < 1; i += 0.1) {
      let interpX = lerp(px, x, i);
      let interpY = lerp(py, y, i);
      circle(interpX, interpY, brushSize);
    }
  }
}

function drawPalette() {
  push();
  noStroke();

  // White
  fill(255);
  rect(30, 50, size1, size2);

  // Black
  fill(0);
  rect(90, 50, size1, size2);

  // Green
  fill(100, 255, 100);
  rect(150, 50, size1, size2);

  // Blue
  fill(130, 226, 237);
  rect(210, 50, size1, size2);

  // Purple
  fill(207, 130, 237);
  rect(270, 50, size1, size2);

  // Pink
  fill('pink');
  rect(330, 50, size1, size2);

  pop();
}

function setShape(shape) {
  brushShape = shape;
}

function resetCanvas() {
  background(255);
}

function keyPressed() {
  if (key === "s") {
    setShape("square");
  }
  if (key === "c") {
    setShape("circle");
  }
  if (key === " ") {
    resetCanvas();
  }
}

function mousePressed() {
  console.log(`MousePressed: (${mouseX}, ${mouseY})`); // Log to debug the mouse position

  // Check if mouse is inside the White block
  if (mouseX > 30 && mouseX < 30 + size1 && mouseY > 50 && mouseY < 50 + size2) { 
    brushColor = [255, 255, 255]; // White
    console.log("Color changed to White");
  } 
  // Check if mouse is inside the Black block
  else if (mouseX > 90 && mouseX < 90 + size1 && mouseY > 50 && mouseY < 50 + size2) { 
    brushColor = [0, 0, 0]; // Black
    console.log("Color changed to Black");
  } 
  // Check if mouse is inside the Green block
  else if (mouseX > 150 && mouseX < 150 + size1 && mouseY > 50 && mouseY < 50 + size2) { 
    brushColor = [100, 255, 100]; // Green
    console.log("Color changed to Green");
  } 
  // Check if mouse is inside the Blue block
  else if (mouseX > 210 && mouseX < 210 + size1 && mouseY > 50 && mouseY < 50 + size2) { 
    brushColor = [130, 226, 237]; // Blue
    console.log("Color changed to Blue");
  } 
  // Check if mouse is inside the Purple block
  else if (mouseX > 270 && mouseX < 270 + size1 && mouseY > 50 && mouseY < 50 + size2) { 
    brushColor = [207, 130, 237]; // Purple
    console.log("Color changed to Purple");
  } 
  // Check if mouse is inside the Pink block
  else if (mouseX > 330 && mouseX < 330 + size1 && mouseY > 50 && mouseY < 50 + size2) { 
    brushColor = [255, 192, 203]; // Pink
    console.log("Color changed to Pink");
  }
}
