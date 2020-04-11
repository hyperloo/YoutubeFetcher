import axios from "axios";

const KEY = "AIzaSyAZa2kNQc1PAuiYdNfDz0UaJ6GQSxwK4EM";

//AIzaSyBO2Ye9MqZC9enw_tZ1VkPYjAuz1dtoIMw

export const baseParams = {
  part: "snippet",
  maxResults: 15,
  key: KEY,
};
export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3",
});
