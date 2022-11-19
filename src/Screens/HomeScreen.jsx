import { useEffect, useState } from "react";
import { ActivityIndicator, Dimensions, FlatList } from "react-native";
import NewsFeedItem from "../Components/NewsFeedItem";

const NewsAPI = require("newsapi");
export default function HomeScreen() {
  const [news, setNews] = useState([]);
  useEffect(() => {
    const newsapi = new NewsAPI("383b16eb84b04088a2e4ad5e5c08e2aa");
    newsapi.v2
      .topHeadlines({
        language: "en",
        country: "in",
      })
      .then(setNews);
  }, []);

  if (!news.articles) {
    return <ActivityIndicator size={50} />;
  }

  return (
    <FlatList
      data={news.articles}
      renderItem={({ item }) => <NewsFeedItem news={item} />}
      showsVerticalScrollIndicator={false}
      snapToAlignment={"start"}
      decelerationRate={"fast"}
      snapToInterval={Dimensions.get("window").height}
    />
  );
}
