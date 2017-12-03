// event listener to respond to "Show another quote" button clicks
// when user clicks anywhere on the button, the "printQuote" function is called

//Declare variables
document.getElementById('loadQuote').addEventListener("click", printQuote, false);
var randomNumber 
var selectedQuote;
var usedQuote = [];
var html;
var changeQuote = setInterval(printQuote, 5000);


//function to generate number between 0 and the length of the quotes array
function getRandomQuote() {
   randomNumber = Math.floor(Math.random() * quotes.length);
   selectedQuote=quotes[randomNumber];
   usedQuote.splice(0, 1, selectedQuote);
}

//function to call the quote function, format the quote to the html, and then print to page
function printQuote () {
    html = '';
    getRandomQuote();    
    html += '<p class="quote">' + usedQuote[0].quote + '</p>';
    html += '<p class="source">' + usedQuote[0].source;
    if (selectedQuote.citation !== null) {
        html += '<span class="citation">'+ usedQuote[0].citation + '</span>';
    }
    if (selectedQuote.year !== null) {
        html += '<span class="year">' + usedQuote[0].year + '</span>';
    }
    html += '</p>';
    document.getElementById("quote-box").innerHTML = html;
}



//function to generate a random rgb number and then set background color activated by button click
function randomColor() {
	var x = Math.floor(Math.random() * 256); 
	var y = Math.floor(Math.random() * 256);
	var z = Math.floor(Math.random() * 256);
	var randomRgb = "rgb(" + x + "," + y + "," + z + ")"; 
	document.body.style.background = randomRgb;
}


