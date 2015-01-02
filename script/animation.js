function Timing (delay_, onUpdate_, onComplete_)
{
	this.timeStart = -1000;
	this.timeDelay = delay_;
	this.onUpdate = onUpdate_;
	this.onComplete = onComplete_;
	this.ended = false;
	
	this.Start = function ()
	{
		this.timeStart = timeElapsed;
		this.ended = false;
	}

	this.GetRatioTimeline = function ()
	{
		return Math.max(0, Math.min(1, (timeElapsed - this.timeStart) / this.timeDelay));
	}

	this.Update = function ()
	{
		this.onUpdate(timeElapsed - this.timeStart, this.GetRatioTimeline());
		if (this.GetRatioTimeline() == 1 && !this.ended) {
			this.ended = true;
			if (typeof this.onComplete != "undefined" ) {
				this.onComplete();
			}
		}
	}
} 

var timings = [];
var letters = [];

var Animation = {};

Animation.Update = function ()
{
	for (var i = timings.length - 1; i >= 0; --i) {
		var timing = timings[i];
		timing.Update();
		if (timing.ended) {
			timings.splice(i, 1);
		}
	}
}

Animation.ShowText = function (text_)
{
	letters = [];
	layerText.removeChildren();
	var textArray = text_.toLowerCase().split("");
	var letterCount = textArray.length;
	var w = letterCount * 64;
	var y = windowHeight / 2;
	for (var i = 0; i < letterCount; ++i)
	{
		var textureLetter = Asset.TextureLetter(textArray[i]);
		if (textureLetter != null)
		{
			var sprite = new PIXI.Sprite(textureLetter);
			sprite.anchor.x = sprite.anchor.y = 0.5;
			sprite.x = windowWidth / 2 - w / 2 + w * ((i+1) / (letterCount+1));
			sprite.y = y;
			//sprite.scale.x = sprite.scale.y = 0;
			layerText.addChild(sprite);
			letters.push(sprite);
		}
	}

	var animationText = new Timing(3,
	function(elapsed, ratio) {
		var letterCount = letters.length;
		var step = 1 / (letterCount * 2);
		for (var i = 0; i < letterCount; ++i)
		{
			var letter = letters[i];
			var r = i/letterCount;
			letter.scale.x = letter.scale.y = Math.sin(Utils.SmoothStep(i * step, 1, ratio) * pi);
		}
	});

	animationText.Start();
	timings.push(animationText);
};