import axios from "axios";

const getFeeds = async (page = 1, pageSize = 10) => {
  return axios.get(`https://frontend-engineering-test-api.netlify.app/.netlify/functions/articles?page=${page}&pageSize=${pageSize}`).then(response => {
    return response.data;
  }).catch( error => {
    console.log("DATA Error", error);
    return error;
  })
}

export default {
  getFeeds
}