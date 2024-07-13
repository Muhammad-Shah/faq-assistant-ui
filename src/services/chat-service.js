// import { CHAT_CONSTANTS } from "../config/apiUrls";
// import axios from "../config/axios";
import axios from "axios";

export async function getPromptResponse({ query, onSuccess, onError }) {
  try {
    const response = await axios.get(
      "https://faqapi-wv8rvb8l.b4a.run/api" + "?" + query
    );
    onSuccess(response?.data?.response);
  } catch (error) {
    onError(error);
  }
}
