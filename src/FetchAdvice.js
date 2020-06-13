import axios from "axios";

export const fetchAdvice = async () => {
  return await axios.get("https://api.adviceslip.com/advice");
};
