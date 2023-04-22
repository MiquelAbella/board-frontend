import axios from "axios";

const BASE_URL = "http://localhost:4000/users";

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

export const createGoogle = async (user) => {
  try {
    const response = await axios.post(`${BASE_URL}/googleregister`, {
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
export const googleLogin = async (user) => {
  try {
    const response = await axios.post(`${BASE_URL}/googlelogin`, {
      user,
    });
    return response.data;
  } catch (error) {
    console.log(error);
  }
};
