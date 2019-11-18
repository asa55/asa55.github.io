var wallpapercanvas = document.getElementById("wallpaper")
wallpapercanvas.width = window.innerWidth;
wallpapercanvas.height = window.innerHeight;
var wc = wallpapercanvas.getContext('2d');
wc.strokeStyle = '#00000000'

function screensaver(listOfColors, startingAtTop){
    var i;
    var x;
    for (i in listOfColors) {
        if (startingAtTop) {
        x = (innerWidth*(3/4) + Math.min(innerWidth*Math.sin(pageYOffset/innerHeight*Math.PI/2)/4, innerWidth/4))/(2**i);
        wc.fillStyle = '#00000066';
        wc.beginPath();
        wc.moveTo(0,0);
        wc.lineTo(x+3,0);
        wc.lineTo(0,innerHeight);
        wc.closePath();
        wc.fill();
        wc.stroke();
        wc.fillStyle = listOfColors[i];
        wc.beginPath();
        wc.moveTo(0,0);
        wc.lineTo(x,0);
        wc.lineTo(0,innerHeight);
        wc.closePath();
        wc.fill();
        wc.stroke();
    } else {
        x = (innerWidth*(3/4) + Math.min(innerWidth*Math.sin(pageYOffset/innerHeight*Math.PI)/4, innerWidth/4))/(2**i);
        wc.fillStyle = '#00000066';
        wc.beginPath();
        wc.moveTo(0,innerHeight);
        wc.lineTo(x+5,innerHeight);
        wc.lineTo(0,0);
        wc.closePath();
        wc.fill();
        wc.stroke();
        wc.fillStyle = listOfColors[i];
        wc.beginPath();
        wc.moveTo(0,innerHeight);
        wc.lineTo(x,innerHeight);
        wc.lineTo(0,0);
        wc.closePath();
        wc.fill();
        wc.stroke();
    }
    };
};
