// Timing
var timeScale = 0.001;
var timeStarted = new Date() * timeScale;
var timeElapsed = 0;
var timeDelta = 0;

// Layers
var layerHead = new PIXI.DisplayObjectContainer();
var layerLetter = new PIXI.DisplayObjectContainer();
var layerOverlay = new PIXI.DisplayObjectContainer();
var layerText = new PIXI.DisplayObjectContainer();

var Game = {};

Game.Start = function ()
{
	stage.addChild(layerHead);
	stage.addChild(layerLetter);
	stage.addChild(layerOverlay);
	stage.addChild(layerText);

	Animation.ShowText("welcome");
}

Game.Update = function () 
{
	// Timing
    timeDelta = (new Date() * timeScale - timeStarted) - timeElapsed;
	timeElapsed = new Date() * timeScale - timeStarted;

	//
	Animation.Update();

    // Render
    //renderer.render(stage);

    var width = 1024;
    var height = 837;
    var ratioWidth = Math.floor(windowWidth / width);
    var step = 32;
    var speed = 500;
    //for (var i = 0; i < windowWidth; i += step)
    //{
    	var ratio = Math.cos(timeElapsed * 200) * 0.125;
    	var sx = Math.floor(timeElapsed * speed) % width;
    	var sy = Math.floor(ratio * height * 0.125);
    	var sheight = height;//(height + Math.floor(ratio * height)) % height;
    	var x = Math.floor(timeElapsed * speed) % width;
		renderer.context.drawImage(img,
			sx, sy, step, height,
			x, 0, step, windowHeight);	
   // }

    requestAnimFrame(Game.Update);
}

