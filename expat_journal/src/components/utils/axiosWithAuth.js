import axios from "axios";

export const axiosWithAuth = () => {
  return axios.create({
    baseURL: "https://expat-journals.herokuapp.com",
    headers: {
      Authorization: localStorage.getItem("token")
    }
  });
};
