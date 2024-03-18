function setup() {
  createCanvas(400, 600, WEBGL); // Set canvas to 3D mode
}

function draw() {
  background(220);
  
  fill(255, 255, 0); // Yellow color
  noStroke(); // No stroke around the triangle
  
  // Define the vertices of the triangle
  let vertices = [
    createVector(0, 0, 0), // Top vertex
    createVector(-20, 30, 0), // Bottom-left vertex
    createVector(20, 30, 0) // Bottom-right vertex
  ];
  
  // Draw the triangle
  beginShape();
  for (let v of vertices) {
    vertex(v.x, v.y, v.z);
  }
  endShape(CLOSE);
}
