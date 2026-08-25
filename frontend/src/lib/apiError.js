export function getApiErrorMessage(error) {
  if (!error) {
    return "Something went wrong.";
  }

  if (error.code === "ERR_NETWORK") {
    return "Unable to connect to the server. Please try again.";
  }

  if (error.code === "ECONNABORTED") {
    return "The request took too long. Please try again.";
  }

  if (error.response?.status === 403) {
    return "You do not have permission to perform this action.";
  }

  if (error.response?.status === 404) {
    return "The requested resource was not found.";
  }

  if (error.response?.status === 429) {
    return "Too many requests. Please wait a moment and try again.";
  }

  if (error.response?.status >= 500) {
    return "The server encountered an error. Please try again later.";
  }

  const data = error.response?.data;

  if (!data) {
    return "Something went wrong. Please try again.";
  }

  if (typeof data.detail === "string") {
    return data.detail;
  }

  if (Array.isArray(data.detail)) {
    return (
      data.detail
        .map((item) => item?.msg)
        .filter(Boolean)
        .join(", ") ||
      "Please check your input and try again."
    );
  }

  if (typeof data.message === "string") {
    return data.message;
  }

  return "The request could not be completed. Please try again.";
}