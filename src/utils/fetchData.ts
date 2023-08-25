export const fetchData = async (url = "") => {
  try {
    const response = await fetch(url);
    const data = await response.json();
    return data.data;
  } catch (error) {
    console.error("Failed to fetch players:", error);
    return [];
  }
};
