import axios from "axios";

const BASE_URL = "http://localhost:4000/todos";

export const add = async (todo, userId) => {
  try {
    const response = await axios.post(
      BASE_URL,
      {
        todo,
        userId,
      },
      {
        headers: {
          "x-token": window.localStorage.getItem("token"),
        },
      }
    );

    return response.data;
  } catch (error) {
    console.log(error);
  }
};

export const remove = async (todo, userId) => {
  try {
    const response = await axios.post(
      `${BASE_URL}/delete`,
      {
        todo,
        userId,
      },
      {
        headers: {
          "x-token": window.localStorage.getItem("token"),
        },
      }
    );

    return response.data;
  } catch (error) {
    console.log(error);
  }
};

export const updateStatus = async (todo, status, userId) => {
  try {
    const response = await axios.post(
      `${BASE_URL}/updatestatus`,
      {
        todo,
        status,
        userId,
      },
      {
        headers: {
          "x-token": window.localStorage.getItem("token"),
        },
      }
    );

    return response.data;
  } catch (error) {
    console.log(error);
  }
};

export const updateTodo = async (todo, todoId, userId) => {
  try {
    const response = await axios.post(
      `${BASE_URL}/update`,
      {
        todo,
        todoId,
        userId,
      },
      {
        headers: {
          "x-token": window.localStorage.getItem("token"),
        },
      }
    );

    return response.data;
  } catch (error) {
    console.log(error);
  }
};
