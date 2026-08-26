export function saveToLocalStorage(value) {
  try {
    localStorage.setItem("channels:", JSON.stringify(value));
  } catch (error) {
    console.error("Error saving to localStorage", error);
  }
}

export function getFromLocalStorage() {
  try {
    const value = localStorage.getItem("channels:");
    return value ? JSON.parse(value) : null;
  } catch (error) {
    console.error("Error getting from localStorage", error);
    return null;
  }
}
