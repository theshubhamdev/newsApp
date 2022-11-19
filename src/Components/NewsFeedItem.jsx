import { Dimensions, Image, StyleSheet, Text, View } from "react-native";

export default function NewsFeedItem({ news }) {
  return (
    <View style={styles.container}>
      <Image source={{ uri: news.urlToImage }} style={styles.image} />
      <View style={styles.newsData}>
        <Text style={styles.title}>{news.title}</Text>
        <Text style={styles.content}>{news.description}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: Dimensions.get("window").height,
    backgroundColor: "#fff",
    alignItems: "center",
  },
  newsData: {
    padding: 10,
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
    lineHeight: 25,
    marginBottom: 15,
  },
  content: {
    fontSize: 18,
    lineHeight: 30,
  },
  image: {
    width: "100%",
    aspectRatio: 1,
  },
});
