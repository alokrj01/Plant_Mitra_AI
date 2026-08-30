import { api } from "../../../lib/api.js";

export async function predictFromImage(file) {
  const formData = new FormData();

  formData.append("file", file);

  const response = await api.post(
    "/image-prediction",
    formData,
  );

  return response.data;
}

export async function predictFromText(text) {
  const response = await api.post(
    "/text-prediction",
    { text },
  );

  return response.data;
}

export async function getPredictionHistory({
  page = 1,
  pageSize = 20,
} = {}) {
  const response = await api.get(
    "/api/v1/predictions/history",
    {
      params: {
        page,
        page_size: pageSize,
      },
    },
  );

  return response.data;
}

export async function getPrediction(predictionId) {
  const response = await api.get(
    `/api/v1/predictions/${predictionId}`,
  );

  return response.data;
}

export async function submitPredictionFeedback(
  predictionId,
  feedback,
) {
  const response = await api.post(
    `/api/v1/predictions/${predictionId}/feedback`,
    {
      feedback,
    },
  );

  return response.data;
}