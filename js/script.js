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
let quoteArray = [{
        quote: "I have no special talent. I am only passionately curious.",
        source: "Albert Einstein",
        citation: "https://wisdomquotes.com/famous-quotes/",
        COD: "Cause of Death: Abdominal aortic aneurysm"
    },
    {
        quote: "Wisely, and slow. They stumble that run fast.",
        source: "William Shakespeare",
        year: "1585–1613",
        citation: "https://wisdomquotes.com/famous-quotes/"
    },
    {
        quote: "The greatest wealth is to live content with little.",
        source: "Plato",
        year: "1879 - 1955",
        citation: "https://wisdomquotes.com/famous-quotes/"
    }, ,
    {
        quote: "If you judge people, you have no time to love them.",
        source: "Mother Teresa",
        COD: "Cause of Death: Heart failure"
    },
    {
        quote: "All that we are is the result of what we have thought.",
        source: "Buddha"
    }
]

//array to hold colors we will set the page background color to.
let colorArray = [{
        color: "lightblue"
    },
    {
        color: "green"
    },
    {
        color: "red"
    },
    {
        color: "orange"
    },
    {
        color: "purple"
    },
]

//ID that will be assigned from setInterval, so we have a handle to the timer.
let timerID = 0;

//Hold the random selected quote index, so we can prevent duplicate quotes
let lastIndex = -1;

//store the randomized timer interval when the website started
let timerInterval = 0;

/***
 * `getRandomQuote` function
 ***/
function getRandomQuote() {
    //build a random constant number between quoteArray.length and 1
    let randnum = 0;

    //prevent duplicate quotes by tracking the last index used, loop till we have a new index.
    do {
        randnum = Math.floor((Math.random() * quoteArray.length));
    } while (randnum === lastIndex);

    console.log(`Random Quote Index = ${randnum}`);
    //get a reference to an entry in the quoteArray. We make it const because we have no intention of modifying the return value.
    const quote = quoteArray[randnum];

    //store the last index
    lastIndex = randnum;

    //return the object
    return quote;
}

/*
    startTimerCycle
    function called from HTML to cycle quotes every 10 to 20 seconds
*/
function startTimerCycle() {
    //make sure we only start the interval if we dont already have one going!
    if (timerID == 0) {

        //const random interval using math random, this will decide how long we wait.
        timerInterval = Math.floor(Math.floor((Math.random() * 10000) + 10000));

        //setup our timer interval, using the random interval we computed.
        timerID = setInterval(timerHandler, timerInterval);

        console.log(`Timer Interval Started! ID: ${timerID} Interval: ${timerInterval}`);
    }
}

/*
    function TimerHandler
    the timer interval will call this function, which will update the page with a new quote, and restart the timer.
*/
function timerHandler() {

    //get a new quote
    const newQuote = generateNewQuote();

    //update the html document
    updateDocument(newQuote);

    console.log(`Timer Handler Firing! ID: ${timerID} Interval: ${timerInterval}`);

}

function updateDocument(choseQuote) {
    //set the new quote 
    document.getElementById('quote-box').innerHTML = choseQuote;

    //choose a random color from the array
    const colorIndex = Math.floor((Math.random() * colorArray.length));

    //get a color from the color array, using a random color
    const color = colorArray[colorIndex].color;

    //set the background color
    document.body.style.backgroundColor = color;
}

function generateNewQuote() {

    //Create an html string to hold the new quote, initialize it with java script error for debugging!
    let htmlString = '<p class="quote"> JAVA SCRIPT ERROR! </p>';

    //grab a const reference to a quote
    const quote = getRandomQuote();

    //make sure we have a valid object(someone else could modify the code and break it.)
    if (quote != null) {
        //build a series of string we can put together
        const htmlQuote = `<p class="quote"> ${quote.quote} </p>`;
        const htmlSource = `<p class="source"> ${quote.source}`;

        //will append this in the logic
        htmlString = htmlQuote + htmlSource;

        if (quote.citation != null) {
            htmlString += `<span class="citation"> ${quote.citation} </span>`;
        }
        if (quote.year != null) {
            htmlString += `<span class="year"> ${quote.year} </span>`;
        }
        //for exceeds requirements, added cause of death
        if (quote.COD != null) {
            htmlString += `<span class="year"> ${quote.COD} </span>`;
        }

        //finally append the closing paragraph tag.
        htmlString += "</p";
    }

    return htmlString;
}


/***
 * `printQuote` function
 ***/
function printQuote() {
    console.log("Printing New Quote!");

    //grab a constant reference to the generated quote
    const newQuote = generateNewQuote();

    //update the html document
    updateDocument(newQuote);

    //if we have a timer interval going, reset it, because the user pressed the button, we dont want the interval
    //to suddenly change quote after the user pressed the quote button.
    if (timerID != 0) {
        console.log("Restarting Timer Interval...");

        //clear the timer
        clearInterval(timerID);
        timerID = 0;

        //start a new timer 
        startTimerCycle();
    }
}


/***
 * click event listener for the print quote button
 * DO NOT CHANGE THE CODE BELOW!!
 ***/

document.getElementById('load-quote').addEventListener("click", printQuote, false);