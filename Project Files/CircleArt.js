var lines = []
var circles = []

function setup() {
  createCanvas(displayWidth,displayHeight)
	background(20)
	noFill()
	createGridOfCircles(60,120, 6, 10)
	
}

function draw() {
  noSmooth()
}

function createGridOfCircles(numberOfCircles, spacing, rows, columns){
  var defaultXPosition = displayWidth/8;
	var xPosition = defaultXPosition;
	var yPosition = 100;
	var rows = rows
	console.log(rows)
	var totalNumberOfCircles = 0
  for(var x = 0; x < rows; x++){
    for(var i = 0; i < columns; i++){
			if(totalNumberOfCircles < numberOfCircles){
      	circles[circles.length] = new circle(random(1,40), xPosition + (i * spacing) , yPosition ,100)
				totalNumberOfCircles += 1
			}
		}
		yPosition += spacing
		xPosition = defaultXPosition
  }
	
	
}

class circle{
  constructor(numberOfLines, xPos, yPos, Diameter){
    this.xPosition = xPos
    this.yPosition = yPos
    this.diameter = Diameter
    this.numberOfLines = numberOfLines
    this.totalLines = 0
		this.drawCircle()
  }
  
  drawCircle(){
		ellipseMode(CENTER)
    noFill()
    while(this.totalLines < this.numberOfLines){
	    
	new Circleline(this.xPosition, this.yPosition, this.diameter)
	      this.totalLines++
    }
  }
}

class Circleline{
 constructor(circleX,circleY,circleDiameter){
    this.circleX = circleX
    this.circleY = circleY
    this.circleRadius = circleDiameter/2
	  this.angleFromOrigin = random(0,360)
	 	this.xOne = circleX;
	 	this.yOne = circleY;
	  this.randomAngle = random(0,90)
    this.drawLine()
 }
 
 drawLine(){
    stroke(210)
    strokeWeight(1)
    var x1 = this.circleX + this.circleRadius * cos(this.angleFromOrigin)
    var x2 = this.circleX - this.circleRadius * cos(this.angleFromOrigin+this.randomAngle )
    var y1 = this.circleY + this.circleRadius * sin(this.angleFromOrigin)
    var y2 = this.circleY - this.circleRadius * sin(this.angleFromOrigin+this.randomAngle )
    var lineCreated = false
    line(x1,y1,x2,y2)
 }
 
  checkIfOnDiameter(x,y){
    if( abs(sqrt(((x - this.circleX)*(x - this.circleX) )+ ((y - this.circleY)*(y - this.circleY)))) == this.circleRadius){
      return true
    }else{
      return false
    }
  }
 }
