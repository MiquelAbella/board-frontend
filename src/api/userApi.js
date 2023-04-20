import axios from "axios";

const BASE_URL = "https://board-backend-production.up.railway.app/users";

export const create = async (user) => {
  try {
    const response = await axios.post(BASE_URL, {
      user,
    });
    return response.data;
  } catch (error) {
    console.log(error);
  }
};
export const login = async (user) => {
  try {
    const response = await axios.post(`${BASE_URL}/login`, {
      user,
    });
    return response.data;
  } catch (error) {
    console.log(error);
  }
};
