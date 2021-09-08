import axios from "axios";

export default axios.create({
  baseURL: "http://localhost:18000/api/v1",
});
