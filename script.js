var x = document.getElementById("quote");
var t = document.querySelector(".button-container");
var x2 = document.getElementById("author");

function Total() {
  function qo() {
    fetch(`https://animechan.vercel.app/api/random`)
      .then((response) => response.json())
      .then((quote) => (x.innerHTML = quote.quote));
  }
  qo();
  function qo1() {
    fetch(`https://animechan.vercel.app/api/random`)
      .then((response) => response.json())
      .then((quote) => (x2.innerHTML = quote.character));
  }
  qo1();
}

t.addEventListener("click", Total);
