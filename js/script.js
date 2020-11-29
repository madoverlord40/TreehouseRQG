/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
Student: James Hanley
******************************************/

// For assistance: 
// Check the "Project Resources" section of the project instructions
// Reach out in your Slack community - https://treehouse-fsjs-102.slack.com/app_redirect?channel=chit-chat

/*** 
 * `quotes` array 
 ***/
//Apologies, I cannot find a year for these quotes, they all come from people who lived a long time ago. 
//I dont think anyone really knows when these quotes were said.
let quoteArray = [{
        quote: "I have no special talent. I am only passionately curious.",
        source: "Albert Einstein",
        citation: "https://wisdomquotes.com/famous-quotes/",
    },
    {
        quote: "Wisely, and slow. They stumble that run fast.",
        source: "William Shakespeare",
    },
    {
        quote: "If you judge people, you have no time to love them.",
        source: "Mother Teresa",
        citation: "https://wisdomquotes.com/famous-quotes/"
    },
    {
        quote: "All that we are is the result of what we have thought.",
        source: "Buddha"
    }
]

/***
 * `getRandomQuote` function
 ***/
function getRandomQuote() {
    //build a random constant number between quoteArray.length and 1
    const randnum = Math.floor((Math.random() * quoteArray.length) + 1);
    //get a reference to an entry in the quoteArray. We make it const because we have no intention of modifying the return value.
    const quote = quoteArray[randnum];
    //return the object
    return quote;
}


/***
 * `printQuote` function
 ***/
function printQuote() {
    //grab a const reference to a quote
    const quote = getRandomQuote();

    //make sure we have a valid object(someone else could modify the code and break it.)
    if (quote != null) {
        //build a series of string we can put together
        const htmlQuote = `<p class="quote"> ${quote.quote} </p>`;
        const htmlSource = `<p class="source"> ${quote.source}`;

        //will append this in the logic
        let htmlString = htmlQuote + htmlSource;

        if (quote.citation != null) {
            htmlString += `<span class="citation"> ${quote.citation} </span>`;
        }
        if (quote.year != null) {
            htmlString += `<span class="year"> ${quote.year} </span>`;
        }

        //finally append the closing paragraph tag.
        htmlString += "</p";

        //update the html document
        document.getElementById('quote-box').innerHTML = htmlString;
    }
}


/***
 * click event listener for the print quote button
 * DO NOT CHANGE THE CODE BELOW!!
 ***/

document.getElementById('load-quote').addEventListener("click", printQuote, false);