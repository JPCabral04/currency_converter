const api = async function fetchExchangeRateApi() {
  try {
    const response = await fetch('https://api.exchangeratesapi.io/v1/latest?access_key=12d5bc5b5f200083ffd404bead310587&format=1');
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