function setup() {
	createCanvas(windowWidth, windowHeight);

}

function draw() {
	background(0,0,0);

	var sec = second();
    var min = minute();
    var hr = hour();
    //var day = day();
    var minRadius = map(min, 0, 59, 60, 119);
    var hrRadius = map(hr, 0, 23, 120, 143)

    var fullscreen = 300 / 60;

/*	//Day-Underlay
    fill(255, 255, 255);
    ellipse(width/2,height/2, 870, 870);
	//Days
    noFill;
    stroke(0);
    ellipse(width/2,height/2,day * fullscreen,day * fullscreen);*/

    //Hours-Underlay
    fill(255, 0, 0);
    ellipse(width/2,height/2, 715, 715);
    //Hours
    noFill;
    stroke(0);
    ellipse(width/2,height/2,hrRadius * fullscreen,hrRadius * fullscreen);

    //Minutes-Underlay
    fill(0, 255, 0);
    ellipse(width/2,height/2, 600, 600);
    //Minutes
    noFill;
    ellipse(width/2,height/2,minRadius * fullscreen,minRadius * fullscreen);


    //Seconds Underlay
    fill(255, 255, 0);
    ellipse(width/2,height/2,300, 300);
    //Seconds
    noFill;
    stroke(0);
    ellipse(width/2,height/2,sec * fullscreen,sec * fullscreen);

//
}


//1m = 60s
//1h = 60m
//1d = 24h
//1w = 168d
//1y = 52w//
