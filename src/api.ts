const api = async function fetchExchangeRateApi() {
  try {
    const apiKey = import.meta.env.VITE_API_KEY;

    const apiUrl = `https://api.exchangeratesapi.io/v1/latest?access_key=${apiKey}`;

    const response = await fetch(apiUrl);

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();
    console.log(data);
    return data;

  } catch (error) {
    console.error("Error fetching api:", error);
    throw error;
  }
}

export default api;