import axios from "axios";

axios.defaults.baseURL = "https://opentdb.com"; // API url
axios.defaults.timeout = 10000; // 10 sec timeout. After that, there will be an error.
axios.interceptors.response.use(
  async res => {
    // Could Check for codes coming from API and handle it better.

    //  codes = {
    //   0: "Success",
    //   1: "NoResultOrNotEnough",
    //   2: "InvalidParameter",
    //   3: "SessionExpired",
    //   4: "TokenShouldReset"
    // };

    if (res.data.response_code === null) return res;

    if (res.data.response_code === 1)
      return Promise.reject(res.data.response_message);
    else if (res.data.response_code === 2)
      return Promise.reject(res.data.response_message);
    else if (res.data.response_code === 3)
      return Promise.reject(res.data.response_message);
    else if (res.data.response_code === 4)
      return Promise.reject(res.data.response_message);

    return res;
  },
  err => {
    // Can redirect or push
    return Promise.reject(err);
  }
);

export const getQuestions = async ({ category, token, amount, difficulty }) => {
  let url = `/api.php?amount=${amount}&type=multiple`;
  if (category && category !== 0) url = url.concat(`&category=${category}`);
  if (difficulty) url = url.concat(`&difficulty=${difficulty}`);
  if (token) url = url.concat(`&token=${token}`);
  const response = await axios.get(url);
  return response.data.results;
};

export const getCategories = async () => {
  const response = await axios.get("/api_category.php");
  return response.data.trivia_categories;
};

// Not implemented
export const getNewSession = async () => {
  const response = await axios.get("/api_token.php?command=request");
  console.log(response.data.token);
  return response.data.token;
};

// Not implemented
export const resetSession = async ({ token }) => {
  await axios.get(`api_token.php?command=reset&token=${token}`);
  return;
};
