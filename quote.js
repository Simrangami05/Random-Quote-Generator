const buttonl = document.getElementById("btn");
const quotesl = document.getElementById("quote");
const authorl = document.getElementById("author");

const quoteApiURL = "https://api.quotable.io/random";

async function getQuote() {
  try {
    quotesl.innerText = "Updating Quote...";
    authorl.innerText = "Updating Author...";
    buttonl.innerText = "Loading...";
    buttonl.disabled = true;
    const response = await fetch(quoteApiURL);
    const data = await response.json();
    const quoteContent = data.content;
    const quoteAuthor = data.author;
    quotesl.innerText = quoteContent;
    authorl.innerText = "~ " + quoteAuthor;
    buttonl.innerText = "Get a quote";
    buttonl.disabled = false;
    console.log(data);
  } catch (error) {
    console.log(error);
    quotesl.innerText = "An error occured, try again";
    authorl.innerText = "unknown";
    buttonl.innerText = "Get a quote";
    buttonl.disabled = false;
  }
}

getQuote();

buttonl.addEventListener("click", getQuote);
