
// Dimensions
var windowWidth = window.innerWidth;
var windowHeight = window.innerHeight;
var dimensionMin = Math.min(windowWidth, windowHeight);

// Grid
var gridDimension = 4;
var gridMargin, gridSize, gridAnchor, gridCellSize;

// Global Sizes
var sizeHead = 48;
var sizeLetter = 24;
var sizeHear = 32;

// Setup Pixi
var stage = new PIXI.Stage();
var renderer = new PIXI.CanvasRenderer(windowWidth, windowHeight, {transparent:true, clearBeforeRender:false});
var context;

// Keyboard Event
window.addEventListener('keyup', Controls.KeyUp, true);
window.addEventListener('keydown', Controls.KeyDown, true);
window.addEventListener("resize", Controls.Resize);

// Pixi Loader
var loader = new PIXI.AssetLoader(assets);
var pixiReady = false;

// Html Loader
var img = document.createElement('img');
img.src = 'asset/ncs.png';
var htmlReady = false;

var Engine = {};

Engine.Start = function ()
{
	// Start Everything
	Asset.onAssetsLoaded();
	Game.Start();

	// Add the canvas to the div element
	var div = document.getElementById("screen");
	div.appendChild(renderer.view);

	// Start Game Loop
	requestAnimFrame( Game.Update );
}

Engine.HtmlLoaded = function () 
{
	htmlReady = true;
	if (pixiReady) {
		Engine.Start();
	}
}

Engine.PixiLoaded = function () 
{
	pixiReady = true;
	if (htmlReady) {
		Engine.Start();
	}
}

// Set callback and start loading
img.onload = Engine.HtmlLoaded;
loader.onComplete = Engine.PixiLoaded;
loader.load();