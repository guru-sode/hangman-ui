import axios from "axios";

const handleError = (error) => {
  const response = error && error.response;
  const status = response && response.status;
  const data = response && response.data;
  const message = (data && data.message);
  return { status, message, data};
}

export const GET = async (url, header) => {
  try {
    const result = await axios.request({
      method: "GET",
      url,
      timeout: 1000 * 5 , // wait for 5 seconds
      headers: header
    });
    return result;
  } catch (error) {
    handleError(error);
  }
}

export const DELETE = async (url, data, header) => {
  try {
    const result = await axios.request({
      method: "DELETE",
      data,
      url,
      headers: header,
      timeout: 1000 * 5 , // wait for 5 seconds
    });
    return result;
  } catch (error) {
    handleError(error);
  }
}

export const POST = async (url, data, header) => {
  try {
    const result = await axios.request({
      method: "POST",
      data,
      url,
      headers: header,
      timeout: 1000 * 5 , // wait for 5 seconds
    });
    return result;
  } catch (error) {
    handleError(error);
  }
}

export const PUT = async (url, data, header) => {
  try {
    const result = await axios.request({
      method: "PUT",
      data,
      url,
      headers: header,
      timeout: 1000 * 5 , // wait for 5 seconds
    });
    return result;
  } catch (error) {
    handleError(error);
  }
}