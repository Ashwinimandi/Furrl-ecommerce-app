export async function makeApiCall(queryParams) {
  const apiUrl = "https://api.furrl.in/api/v1/vibe/getVibeRelate";
  const headers = {
    "Content-Type": "application/json",
  };

  const requestBody = {
    vibe: "#NightFlea",
  };

  const queryString = new URLSearchParams(queryParams).toString();
  const apiUrlWithQuery = `${apiUrl}?${queryString}`;
  const requestBodyJson = JSON.stringify(requestBody);

  try {
    const response = await fetch(apiUrlWithQuery, {
      method: "POST",
      headers: headers,
      body: requestBodyJson,
    });
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error:", error);
    throw error;
  }
}

export async function getProductDetail(id) {
  const apiUrl = "https://api.furrl.in/api/v1/product/getProductDetail";
  const headers = {
    "Content-Type": "application/json",
  };

  const requestBody = {
    id: `${id}`,
  };

  const apiUrlWithQuery = `${apiUrl}`;
  const requestBodyJson = JSON.stringify(requestBody);
  try {
    const response = await fetch(apiUrlWithQuery, {
      method: "POST",
      headers: headers,
      body: requestBodyJson,
    });
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error:", error);
    throw error;
  }
}
