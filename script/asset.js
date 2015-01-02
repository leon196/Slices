
// Load Images
var assets = [ "asset/font.png", "asset/font.json" ];

// Font
var font = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z", "!", "?", "."];

// Textures List
var textureListLetter;

var Asset = {};

// PIXI Loader Callback
Asset.onAssetsLoaded = function ()
{
	textureListLetter = Asset.LoadFont();
};

// Setup Textures From Frames
Asset.LoadFrames = function (tag, count)
{
	var textureList = [];
	for (var i = 0; i < count; ++i)
	{
		var frameName = tag + i;
		var texture = PIXI.Texture.fromFrame(frameName);
		textureList.push(texture);
	}
	return textureList;
};

// Setup Font Texture From Frames
Asset.LoadFont = function ()
{
	var textureList = [];
	for (var i = 0; i < font.length; ++i)
	{
		var frameName = font[i];
		var texture = PIXI.Texture.fromFrame(frameName);
		textureList.push(texture);
	}
	return textureList;
};

// Get Letter Texture
Asset.TextureLetter = function (letter_) 
{ 
	var index = font.indexOf(letter_);
	if (index == -1) return null;
	return textureListLetter[index]; 
};

// Get Random Character
Asset.RandomLetter = function () { return font[ Math.floor( Math.random() * font.length ) ]; };