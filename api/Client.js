import { create } from "apisauce";

const apiClient = create({
  baseURL: "http://192.168.1.104:9000/api/v1",
});

export default apiClient;
