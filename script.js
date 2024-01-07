const quoteContainer = document.getElementById('quote-container')

let apiQuotes = [ ];

// Showing New Quote
function newQuote( ){
    //Picking a random quote from apiQuotes array
    const quote = apiQuotes[Math.floor(Math.random( ) *  apiQuotes.length)];
    console.log(quote);
}

// Get Quotes From API
async function getQuotes( ){
    const apiUrl = 'https://jacintodesign.github.io/quotes-api/data/quotes.json';
    try {
        const response = await fetch(apiUrl);
        apiQuotes = await response.json();
        newQuote();
    } catch (error) {
        console.log("No Data From The Jokes API: ", error);
    }
}



//On Load
getQuotes()