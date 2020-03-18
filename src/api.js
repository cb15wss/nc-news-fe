import axios from "axios";
const apiRequest = axios.create({
  baseURL: "https://xtine-news.herokuapp.com/api"
});

export const getArticles = (topic, sortValue, filter) => {
  return apiRequest
    .get(`/articles`, {
      params: { topic: topic, sort_by: sortValue, filter: filter }
    })
    .then(({ data }) => {
      //console.log("api articles", data.articles);
      return data.articles;
    });
};

export const getArticle = article_id => {
  return apiRequest.get(`articles/${article_id}`).then(({ data }) => {
    //console.log("article in get article", data.article);
    return data.article;
  });
};

export const getTopics = () => {
  return apiRequest.get(`/topics`).then(({ data }) => {
    return data.topics;
  });
};

export const getArticleComments = article_id => {
  return apiRequest.get(`/articles/${article_id}/comments`).then(({ data }) => {
    return data.comments;
  });
};

export const insertComment = (article_id, comment) => {
  return apiRequest
    .post(`/articles/${article_id}/comments`, comment)
    .then(({ data }) => {
      return data.comment;
    });
};

export const deleteById = (id, target) => {
  return apiRequest.delete(`/${target}/${id}`).then(({ status }) => {
    return status;
  });
};

export const patchVote = (target, id, vote) => {
  return apiRequest
    .patch(`/${target}/${id}`, {
      inc_votes: vote
    })
    .then(({ status }) => {
      return status;
    });
};

export const getUsers = () => {
  return apiRequest.get(`/users`).then(({ data }) => {
    return data.users;
  });
};
