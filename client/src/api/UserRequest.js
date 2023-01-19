import axios from "axios";

const API = axios.create({ baseURL: "http://localhost:5000" });

export const getUser = (userId) => API.get(`/user/${userId}`);

export const updateUser = (userId, formData) =>
  API.put(`/user/${userId}`, formData);

export const getAllUser = () => API.get("/user");
export const followUser = (id,data) => {return API.put(`/user/${id}/follow`,data)};
export const unFollowUser = (id,data) => {return API.put(`/user/${id}/unfollow`,data)};
