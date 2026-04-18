const API_URL = "https://fastapi-tutorial-05lp.onrender.com";

async function loadData() {
  const output = document.getElementById("output");
  output.textContent = "Loading...";

  try {
    const res = await fetch(`${API_URL}/`);
    const data = await res.json();

    output.textContent = JSON.stringify(data, null, 2);
  } catch (err) {
    output.textContent = "Error: " + err.message;
  }
}