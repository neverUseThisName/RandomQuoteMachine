const colors = [
    '#16a085',
    '#27ae60',
    '#2c3e50',
    '#f39c12',
    '#e74c3c',
    '#9b59b6',
    '#FB6964',
    '#342224',
    '#472E32',
    '#BDBB99',
    '#77B1A9',
    '#73A857'
]

const quotes = [
    {text : 'aa', author : 'a'},
    {text : 'bb', author : 'b'},
    {text : 'cc', author : 'c'},
]


let quote;

function nextQuote() {
    const color = colors[Math.floor(Math.random() * colors.length)];
    quote = quotes[Math.floor(Math.random() * quotes.length)]
    $('#quote-text').animate({opacity:0}, 500, 'linear', ()=>{
        $('#text').html(quote.text);
        $('#quote-text').animate({opacity:1, color: color}, 500);
    });
    $('#quote-author').animate({opacity:0, color: color}, 500, 'linear', ()=>{
        $('#author').html(quote.author);
        $('#quote-author').animate({opacity:1}, 500);
    });
    $('body').animate({backgroundColor: color, color: color}, 1000);
    $('#tweet-quote').animate({backgroundColor: color}, 1000);
    $('#tumblr-quote').animate({backgroundColor: color}, 1000);
    $('#new-quote').animate({backgroundColor: color}, 1000);
}


$(document).ready(() => {
    nextQuote();
    $('#new-quote').on('click', nextQuote);
});