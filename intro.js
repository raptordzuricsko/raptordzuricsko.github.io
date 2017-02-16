require("./style.css");


var img = document.createElement('img');
img.src = require('./heart9.gif');
document.body.appendChild(img);
var img2 = img.cloneNode(true);
document.body.appendChild(img2);
document.write(require('./content.js'));
document.body.appendChild(img.cloneNode(true))
document.body.appendChild(img.cloneNode(true))

var sinkspeed=3;
var MAX_COUNT=10;
var leftRight = 0;
var hearts = new Array();

function randommaker(range) {
	var rand = Math.floor(range*Math.random());
    return rand;
}

function descend(hearts){
	for(var j = 0; j < MAX_COUNT; j++){
		if(hearts[j]){
			hearts[j].ud += sinkspeed;
			hearts[j].image.style['top'] = hearts[j].ud;
			if (j % 2 == 0){
				hearts[j].lr += sinkspeed;
				hearts[j].image.style['left'] = hearts[j].lr;
			} else {
				hearts[j].lr -= sinkspeed;
				hearts[j].image.style['left'] = hearts[j].lr;
			}
		}
	}

	setTimeout(descend, 200, hearts);
}

for(var i = 0; i < MAX_COUNT; i++){
	// document.body.appendChild(img.cloneNode(true));
	// lftrght = Math.random()*15;
	image = img.cloneNode(true);
	lftrght = randommaker(window.innerWidth);
	image.style['position'] = 'absolute';
	image.style['left'] = lftrght + 'px'
	document.body.appendChild(image);
	hearts.push({'image' : image, 'lr': lftrght, 'ud': 0});
}
descend(hearts);
