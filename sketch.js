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
    var dRadius = map(d, 1, 31, 144, 175)
    var mRadius = map(m, 1, 12, 176, 188)

    var fullscreen = 300 / 60;



    ////Month-Underlay
    //fill(255, 255, 255, 10);
    //noStroke();
    //ellipse(width/2,height/2, 935, 935);
    ////Month
    //noFill;
    //stroke(255);
    //ellipse(width/2,height/2,mRadius * fullscreen,mRadius * fullscreen);


    //Day-Underlay
    fill(255, 255, 255, 10);
    stroke(0);
    ellipse(width/2,height/2, 875, 875);
    //Days
    noFill;
    stroke(255);
    ellipse(width/2,height/2,dRadius * fullscreen,dRadius * fullscreen);


    //Hours-Underlay
    fill(255, 255, 255, 10);
    stroke(0);
    ellipse(width/2,height/2, 720, 720);
    //Hours
    noFill;
    stroke(255);
    ellipse(width/2,height/2,hrRadius * fullscreen,hrRadius * fullscreen);


    //Minutes-Underlay
    fill(255, 255, 255, 10);
    stroke(0);
    ellipse(width/2,height/2, 600, 600);
    //Minutes
    noFill;
    stroke(255);
    ellipse(width/2,height/2,minRadius * fullscreen,minRadius * fullscreen);


    //Seconds Underlay
    fill(255, 255, 255, 10);
    stroke(0);
    ellipse(width/2,height/2,300, 300);
    //Seconds
    noFill;
    stroke(255);
    ellipse(width/2,height/2,sec * fullscreen,sec * fullscreen);

//
}


//
