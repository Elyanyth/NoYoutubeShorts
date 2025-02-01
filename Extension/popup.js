// popup.js
const toggleShorts = document.getElementById("toggleShorts");

// Load the saved state
chrome.storage.sync.get("removeShorts", (data) => {
  toggleShorts.checked = data.removeShorts ?? true;
});

// Save the state when the toggle is clicked
toggleShorts.addEventListener("change", () => {
  chrome.storage.sync.set({ removeShorts: toggleShorts.checked });
});