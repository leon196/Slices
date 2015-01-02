
var cheers = [
"awesome",
"impressive",
"great",
"cooooool",
"aaahhhhhhhh",
"incredible",
"terrific",
"fantastic",
"hoho"
]

var cheerOrder = Utils.GetRandomUniqueNumbers(cheers.length);
var textCheerCursor = 0;

var text = "hihi";
var textCursor = 0;

var Font = {};

// Get the next letter in the text
Font.GetTextCharacter = function ()
{
	textCursor = (textCursor + 1) % text.length;
	return text[textCursor];
}

Font.GetCheer = function ()
{
	textCheerCursor = (textCheerCursor + 1) % cheers.length;
	return cheers[cheerOrder[textCheerCursor]];
}