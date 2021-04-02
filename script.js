const arrOfQuotes = [
    {
        autor: 'Walt Disney',
        quote: 'All our dreams can come true, if we have the courage to pursue them.',
    },
    {
        autor: 'Mark Twain',
        quote: 'The secret of getting ahead is getting started.',
    },
    {
        author: 'Andy Grove',
        quote: 'Only the paranoid survive.',
    },
    {
        author: 'Babe Ruth',
        quote: 'It’s hard to beat a person who never gives up.',
    },
    {
        author: 'Michele Ruiz',
        quote:
            'If people are doubting how far you can go, go so far that you can’t hear them anymore.',
    },
    {
        author: 'Eleanor Roosevelt',
        quote: 'Do one thing every day that scares you.',
    },
    {
        author: 'Lewis Carroll',
        quote: 'It’s no use going back to yesterday, because I was a different person then.',
    },
    {
        author: 'Socrates',
        quote:
            'Smart people learn from everything and everyone, average people from their experiences, stupid people already have all the answers.',
    },
    {
        author: 'Eleanor Roosevelt',
        quote: 'Do what you feel in your heart to be right – for you’ll be criticized anyway.',
    },
    {
        author: 'Abraham Lincoln',
        quote: 'Whatever you are, be a good one.',
    },
];

function randomSelector(arrLength) {
    return Math.floor(Math.random() * arrLength);
}
