
// Drag and Drop
var dragging = false;
var eventData = null;
var originPoint = new Utils.Vec2();

var Controls = {};

Controls.MouseDown = function (data)
{
	data.originalEvent.preventDefault();
    //var mousePosition = eventData.getLocalPosition(clip.parent);
};

Controls.DropHeadCallback = function (data)
{
};

Controls.MoveHeadCallback = function (data)
{
}; 

Controls.KeyUp = function (event)
{
};

Controls.KeyDown = function (event)
{
};

// Resize
Controls.Resize = function (event)
{
    // Pixi Resize
    renderer.resize(windowWidth, windowHeight);
};