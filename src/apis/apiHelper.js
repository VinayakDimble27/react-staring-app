import axios from "axios";
import { BASE_URL } from "../shared/appConstants";
const apiHelper = (method, url, data) => {
  return axios({
    method,
    url: `${BASE_URL}${url}`,
    data,
  });
};

export default apiHelper;
