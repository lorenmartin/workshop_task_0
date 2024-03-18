# workshop_task_0
2D triangle shape
https://lorenmartin.github.io/workshop_task_0/


Workshop 0 documentation notes 

Set up canvas, changed to: createCanvas(400, 400);  so i can have square to work my shapes on. 

Background: 

Before I start I needed to be able to see the shapes i was creating, so i needed a color for the background of my canvas. 

I started with a primary color yellow, as i found the code in the reference in background. 

background (255, 204, 0); - yellow 

However, i wanted a cooler color, so i played with the last number of the code and created a purple. 

background (220, 0, 500); - purple 

 

Rectangle shape: 

Looked in the reference for rectangle: rect(30, 20, 55, 55); 

It was in the corner, so i changed the code to rect(150, 70, 70, 55); and now its more in the middle. 

First number(150) is what made it move across the x line. 

 

Line: 

Refrence for line: line(30, 20, 85, 75); 

Line was small so I played with the code and coordinates to make the line go across the whole canvas 

New reference for line: line (0, 50, 400, 300); 

 

Ellipse 

Reference for ellipse: ellipse(56, 46, 55, 55); 

Wanted the circle away from my other shapes 

New reference: ellipse(56, 150, 55, 55); 

 

Triangle: 

Reference for triangle: triangle(30, 75, 58, 20, 86, 75); 

I found with this shape, when you play with the code and coordinates, it changes the shape quite a lot. 

New reference for my triangle: triangle(10, 70, 50, 20, 80, 70); 

Moving Shapes: 

Value x = is the value of 0 

let x = 0; sets up the start of the moving object 

Then under your shape that you want to move, replace the first  number in code with an (x)  

rect(x, 70, 70, 55); The shape will then move across the canvas, on its own. 

MouseX = where ever the mouse is on the x axis, the computer mouse will control where the shape goes. 

To get the shape to repeat and come back onot the canvas 

 if(x > width) { 

    x = 0; 

  } 
