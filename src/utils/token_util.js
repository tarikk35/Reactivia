

// Not implemented
export const getToken = () => {
  return localStorage.getItem("token");
};
export const writeToken = token => {
  return localStorage.setItem("token", token);
};
