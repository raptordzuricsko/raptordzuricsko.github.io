require("./style.css");


var img = document.createElement('img');
img.src = require('./heart9.gif');
document.body.appendChild(img);
var img2 = img.cloneNode(true);
document.body.appendChild(img2);
document.write(require('./content.js'));
document.body.appendChild(img.cloneNode(true))
document.body.appendChild(img.cloneNode(true))