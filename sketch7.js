let brushShape = "square"; // Default shape
let brushColor = [0, 0, 0]; // Default color (black)
const brushSize = 10; // Brush size

let size = 30; // Default palette size

function setup() {
  let myCanvas = createCanvas(400, 500)
  myCanvas.parent("sketchbox");

  background(255);
  rectMode(CENTER);
  noStroke();
}

function draw() {
  // Continuously draw shapes along the mouse path when the mouse is pressed
  if (mouseIsPressed) {
    drawShape(mouseX, mouseY, pmouseX, pmouseY, brushShape);
  }

  push();
  fill('grey');
  rect(0, 10, 800, 100);
  pop();

  // Handle hover effects for the palette
  mouseHover();

  // Draw the color palette
  drawPalette();
}

function drawShape(x, y, px, py, type) {
  fill(brushColor); // Set the current brush color

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
  square(50, 28, size);

  // Black
  fill(0);
  square(100, 28, size);

  // Green
  fill(100, 255, 100);
  square(150, 28, size);

  // Blue
  fill(130, 226, 237);
  square(200, 28, size);

  // Purple
  fill(207, 130, 237);
  square(250, 28, size);

  // Pink
  fill('pink');
  square(300, 28, size);

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
  // Check if a palette square is clicked
  if (mouseY > 15 && mouseY < 45) { // Adjusted Y range for the palette
    if (mouseX > 35 && mouseX < 65) { // White
      brushColor = [255, 255, 255];
    } else if (mouseX > 85 && mouseX < 115) { // Black
      brushColor = [0, 0, 0];
    } else if (mouseX > 135 && mouseX < 165) { // Green
      brushColor = [100, 255, 100];
    } else if (mouseX > 185 && mouseX < 215) { // Blue
      brushColor = [130, 226, 237];
    } else if (mouseX > 235 && mouseX < 265) { // Purple
      brushColor = [207, 130, 237];
    } else if (mouseX > 285 && mouseX < 315) { // Pink
      brushColor = [255, 192, 203];
    }
  }
}

function mouseHover() {
  // Reset the size of all squares to the default size
  size = 30;

  // Check if hovering over a specific palette square
  if (mouseY > 15 && mouseY < 45) { // Adjusted Y range for the palette
    if (mouseX > 35 && mouseX < 65) { // White
      size = 40;
    } else if (mouseX > 85 && mouseX < 115) { // Black
      size = 40;
    } else if (mouseX > 135 && mouseX < 165) { // Green
      size = 40;
    } else if (mouseX > 185 && mouseX < 215) { // Blue
      size = 40;
    } else if (mouseX > 235 && mouseX < 265) { // Purple
      size = 40;
    } else if (mouseX > 285 && mouseX < 315) { // Pink
      size = 40;
    }
  }
}
