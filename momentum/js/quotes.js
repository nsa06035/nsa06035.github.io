const quotes = [
    {
        quote: "삶이 있는 한 희망은 있다.",
        author: "키케로",
    },
    {
        quote: "산다는것 그것은 치열한 전투이다.",
        author: "로망로랑",
    },
    {
        quote: "신은 용기있는자를 결코 버리지 않는다.",
        author: "켄러",
    },
    {
        quote: "절대 어제를 후회하지 마라 . 인생은 오늘의 나 안에 있고 내일은 스스로 만드는 것이다.",
        author: "L.론허바드",
    },
    {
        quote: "한번의 실패와 영원한 실패를 혼동하지 마라.",
        author: "F.스콧 핏제랄드",
    },
    {
        quote: "오랫동안 꿈을 그리는 사람은 마침내 그 꿈을 닮아 간다.",
        author: "앙드레 말로",
    },
    {
        quote: "자신감 있는 표정을 지으면 자신감이 생긴다.",
        author: "찰스다윈",
    },
    {
        quote: "언제나 현재에 집중할수 있다면 행복할것이다.",
        author: "파울로 코엘료",
    },
    {
        quote: "물러나서 조용하게 구하면 배울 수 있는 스승은 많다. 사람은 가는 곳마다 보는 것마다 모두 스승으로서 배울 것이 많은 법이다.",
        author: "맹자",
    },
    {
        quote: "고난의 시기에 동요하지 않는 것, 이것은 진정 칭찬받을 만한 뛰어난 인물의 증거다.",
        author: "베토벤",
    },
]

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");

const todaysQuote = (quotes[Math.floor(Math.random() * quotes.length)]);

quote.innerText = todaysQuote.quote;
author.innerText = todaysQuote.author;
