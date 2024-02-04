const quotes = [
    {
        quote: "知彼知己 百戰不殆",
        author: "손자병법",
    },
    {
        quote: "Stay hungry, stay foolish.",
        author: "Steve Jobs",
    },
    {
        quote: "Everything seems impossible until it's done.",
        author: "Nelson Mandela",
    },
    {
        quote: "늦었다고 생각할 때가 늦은 거다.",
        author: "박명수",
    },
    {
        quote: "너무 아픈 사랑은 사랑이 아니었음을,",
        author: "김광석",
    },
    {
        quote: "Love your neighbor as yourself.",
        author: "Matthew 22:39",
    },
    {
        quote: "I can do all things through him who strengthens me.",
        author: "Philippians 4:13",
    },
    {
        quote: "You and I are gonna live forever.",
        author: "Oasis",
    },
    {
        quote: "You risk tears if you let yourself be tamed.",
        author: "Le Petit Prince",
    },
    {
        quote: "What doesn't kill me makes me stronger.”",
        author: "Friedrich Nietzsche",
    },
];

const quote = document.querySelector(".quote__quote");
const author = document.querySelector(".quote__author");
const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = `"${todaysQuote.quote}"`;
author.innerText = " -" + todaysQuote.author;

