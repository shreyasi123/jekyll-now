function setup() { 
  createCanvas(400, 400);
} var x=35
  var y= 150

function draw() { 
  background(220);
	arc(x,150,50,50,PI/4,-PI/4,PIE)
  if(x>50) {}
	else{ellipse(50,150,5,5)}
  if(x>70) {}
  else{ellipse(70,150,5,5)}
	if(x>90) {}
	else{ellipse(90,150,5,5)}
	if(x>110) {}
	else{ellipse(110,150,5,5)}
	if(x>130) {}
	else{ellipse(130,150,5,5)}
	arc(35,y,50,50,PI/4,-PI/4,PIE)
	if(y>250) {}
	else{ellipse(130,250,5,5)}
	if(y>270) {}
	else{ellipse(130,270,5,5)}
	if(y>290) {}
	else{ellipse(130,290,5,5)}
	if(y>310) {}
	else{ellipse(130,310,5,5)}
	y=y+1
	x=x+1
}
