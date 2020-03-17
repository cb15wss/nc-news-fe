import axios from "axios";
const apiRequest = axios.create({
  baseURL: "https://xtine-news.herokuapp.com/api"
});

export const getArticles = topic => {
  return apiRequest
    .get(`/articles`, {
      params: { topic: topic }
    })
    .then(({ data }) => {
      //console.log("api articles", data.articles);
      return data.articles;
    });
};

export const getArticle = article_id => {
  return apiRequest.get(`articles/${article_id}`).then(({ data }) => {
    console.log("article in get article", data.article);
    return data.article;
  });
};

export const getTopics = () => {
  return apiRequest.get(`/topics`).then(({ data }) => {
    console.log("topics in get topics ", data.topics);
    return data.topics;
  });
};
