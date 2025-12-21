import axios from "axios";
import type { Currency } from "../types/currency";

const API_KEY = import.meta.env.VITE_API_KEY;
const API_URL = "https://api.currencybeacon.com/v1";

export const fetchCurrencies = async (): Promise<Currency[]> => {
  try {
    const { data } = await axios.get(`${API_URL}/currencies`, {
      headers: {
        Authorization: `Bearer ${API_KEY}`,
      },
    });
    return data.response;
  } catch (error) {
    console.error("Failed to fetch currencies:", error);
    throw error;
  }
};

export const convertCurrency = async (
  from: string,
  to: string,
  amount: number
): Promise<number> => {
  try {
    const { data } = await axios.get(`${API_URL}/convert`, {
      headers: {
        Authorization: `Bearer ${API_KEY}`,
      },
      params: {
        from,
        to,
        amount,
      },
    });
    return data.response.value;
  } catch (error) {
    console.error("Failed to fetch currencies:", error);
    throw error;
  }
};
