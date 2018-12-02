function setup() {
	createCanvas(500, 500);

	fill(255,255,255);
	stroke(255);

}

function draw() {
	background(0,0,0);

	var sec = second();

	rect(10,350,sec,100);
}

/*
 Aufgabe:
 Gib analog zu Sekunde den Wert der Minute und der Stunde in je eine weitere Variable.
 Benutze diese Variablen für andere Masse und andere Formen.
 Bsp. Position / Ellipse

 Zusatz: Die Auswirkung der Veränderung ist relativ klein. Wir bewegen uns im Pixelmass, 60 Pixel sind nicht so viel.
 Wir könntest du durch eine mathematische Manipulation den Effekt vergrössern?

 */
