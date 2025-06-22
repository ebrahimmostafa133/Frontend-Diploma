const quotes = [
    {
      author: "Oscar Wilde",
      text: "Be yourself; everyone else is already taken.",
    },
    {
      author: "Marilyn Monroe",
      text: "I'm selfish, impatient and a little insecure. I make mistakes, I am out of control...",
    },
    {
      author: "Frank Zappa",
      text: "So many books, so little time.",
    },
    {
      author: "Albert Einstein",
      text: "Two things are infinite: the universe and human stupidity; and I'm not sure about the universe.",
    },
    {
      author: "Marcus Tullius Cicero",
      text: "A room without books is like a body without a soul.",
    },
    {
      author: "Bernard M. Baruch",
      text: "Be who you are and say what you feel, because those who mind don't matter...",
    },
    {
      author: "William W. Purkey",
      text: "You've gotta dance like there's nobody watching...",
    },
    {
      author: "Dr. Seuss",
      text: "You know you're in love when you can't fall asleep because reality is finally better than your dreams.",
    },
    {
      author: "Mae West",
      text: "You only live once, but if you do it right, once is enough.",
    },
    {
      author: "Mahatma Gandhi",
      text: "Be the change that you wish to see in the world.",
    }
  ];
  
let lastIndex = -1;

function showRandomQuote() {
    let randomIndex;

    do {
        randomIndex = Math.floor(Math.random() * quotes.length);
    } while (randomIndex === lastIndex && quotes.length > 1);

    lastIndex = randomIndex;
    const quote = quotes[randomIndex];

    document.getElementById("quoteAuthor").textContent = quote.author;
    document.getElementById("quoteText").textContent = `“${quote.text}”`;
    document.getElementById("quoteContainer").classList.remove("d-none");
}