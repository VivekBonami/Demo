import axios from "axios";

const headers = {
  "Content-type": "application/json",
  accept: "application/json",
};

axios.defaults.headers.common.Accept = "application/json";
axios.defaults.headers.common["Content-Type"] = "application/json";
// axios.defaults.baseURL = process.env.REACT_APP_BASE_URL;
axios.interceptors.request.use((config) => {
  const token = localStorage.getItem("accessToken");
  if (token) config.headers.Authorization = `Bearer ${token}`;

  if (
    config &&
    config.data &&
    config.data.params &&
    config.data.params.form_data
  ) {
    axios.defaults.headers.common["Content-Type"] =
      "application/x-www-form-urlencoded";
  }

  return config;
});
axios.interceptors.response.use(null, (error) =>
  // Const expectedError
  //   = error.response
  //   && error.response.status >= 400
  //   && error.response.status < 500;
  // If (error && error.response.status === 401) {
  //   auth.resetTokenLogout();
  // }
  Promise.reject(error)
);

export default {
  get: axios.get,
  post: axios.post,
  put: axios.put,
  delete: axios.delete,
  headers,
};