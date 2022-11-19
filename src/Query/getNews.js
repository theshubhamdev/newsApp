const NewsAPI = require("newsapi");
const newsapi = new NewsAPI("383b16eb84b04088a2e4ad5e5c08e2aa");

function getNews(setNews) {
  const response = newsapi.v2
    .topHeadlines({
      language: "en",
      country: "in",
    })
    .then(setNews);
  console.log(response);
}

export default getNews;
