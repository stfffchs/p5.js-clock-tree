function setup() {
    createCanvas(windowWidth, windowHeight);

}

function draw() {
	background(0);

	var sec = second();
    var min = minute();
    var hr = hour();
    var d = day();
    var m = month();

    var minRadius = map(min, 0, 59, 60, 119);
    var hrRadius = map(hr, 0, 23, 120, 143)
    var dRadius = map(day, 1, 31, 144, 175)
    var mRadius = map(month, 1, 12, 176, 188)

    var fullscreen = 300 / 60;



    //Month-Underlay
    fill(50, 100, 200);
    ellipse(width/2,height/2, 935, 935);
    //Month
    noFill;
    stroke(0);
    ellipse(width/2,height/2,mRadius * fullscreen,mRadius * fullscreen);

    //Day-Underlay
    fill(230, 200, 230);
    ellipse(width/2,height/2, 875, 875);
    //Days
    noFill;
    stroke(0);
    ellipse(width/2,height/2,dRadius * fullscreen,dRadius * fullscreen);

    //Hours-Underlay
    fill(224,255,255);
    ellipse(width/2,height/2, 720, 720);
    //Hours
    noFill;
    stroke(0);
    ellipse(width/2,height/2,hrRadius * fullscreen,hrRadius * fullscreen);

    //Minutes-Underlay
    fill(72,209,204);
    ellipse(width/2,height/2, 600, 600);
    //Minutes
    noFill;
    ellipse(width/2,height/2,minRadius * fullscreen,minRadius * fullscreen);


    //Seconds Underlay
    fill(100,149,237);
    ellipse(width/2,height/2,300, 300);
    //Seconds
    noFill;
    stroke(0);
    ellipse(width/2,height/2,sec * fullscreen,sec * fullscreen);

//
}


