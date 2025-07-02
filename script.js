document
  .getElementById("country-code")
  .addEventListener("change", handleThemeChange);

function handleThemeChange() {
  const selectedCode = document.getElementById("country-code").value;
  const card = document.getElementById("main-card");
  const signal = document.getElementById("signal-indicator");

  if (selectedCode === "972") {
    document.body.style.backgroundColor =
      selectedCode === "972" ? "#f0f8ff" : "#fff0f0";
    card.style.backgroundColor = "#e9f5ff";
    card.style.color = "#000";
    signal.style.backgroundColor = "#007bff"; // blue
  } else if (selectedCode === "1") {
    document.body.style.backgroundColor = "#fff0f0";
    card.style.backgroundColor = "#ffe9e9";
    card.style.color = "#000";
    signal.style.backgroundColor = "#dc3545"; // red
  }
}

// initialize with default theme
handleThemeChange();
document.getElementById("theme-icon").textContent = "☀️";

document.getElementById("theme-toggle").addEventListener("click", () => {
  const body = document.body;
  const card = document.getElementById("main-card");
  const isDark = body.classList.toggle("dark-mode");

  if (isDark) {
    document.body.classList.add("dark-background");
    document.body.style.backgroundColor = "#121212";
    card.style.backgroundColor = "#1e1e1e";
    card.style.color = "#ffffff";
    document.getElementById("msg").style.backgroundColor = "#2c2c2c";
    document.getElementById("msg").style.color = "#ffffff";
    document.getElementById("new-bio").style.backgroundColor = "#2c2c2c";
    document.getElementById("new-bio").style.color = "#ffffff";
    document.getElementById("fileInput").style.backgroundColor = "#2c2c2c";
    document.getElementById("fileInput").style.color = "#ffffff";
    document.getElementById("theme-icon").textContent = "🌙";
  } else {
    document.body.classList.remove("dark-background");
    document.body.style.backgroundColor = "";
    card.style.backgroundColor = "";
    card.style.color = "";
    document.getElementById("msg").style.backgroundColor = "";
    document.getElementById("msg").style.color = "";
    document.getElementById("new-bio").style.backgroundColor = "";
    document.getElementById("new-bio").style.color = "";
    document.getElementById("fileInput").style.backgroundColor = "";
    document.getElementById("fileInput").style.color = "";
    document.getElementById("theme-icon").textContent = "☀️";
    handleThemeChange();
  }
});
let numbersList = [];
function updateNumbers() {
  const userInput = document.getElementById("new-bio").value;
  const userTextInput = document.getElementById("msg").value;
  const div2 = document.getElementById("div2");
  const selectedCode = document.getElementById("country-code").value;

  div2.innerHTML = "";
  numbersList = [];

  const lines = userInput.split(/\r|\r\n|\n/);

  lines.forEach((el) => {
    let originalNumber = el.trim();
    if (!originalNumber) return;

    // Clean number
    originalNumber = originalNumber.replace(/[^0-9]/g, "");

    // Add selected country code if not already present
    if (!originalNumber.startsWith(selectedCode)) {
      if (originalNumber.startsWith("0")) {
        originalNumber = selectedCode + originalNumber.slice(1);
      } else {
        originalNumber = selectedCode + originalNumber;
      }
    }

    const link = `https://wa.me/${originalNumber}?text=${encodeURIComponent(
      userTextInput
    )}`;

    numbersList.push({ number: originalNumber, message: userTextInput });

    const anchor = document.createElement("a");
    anchor.className = "bubble";
    anchor.href = link;
    anchor.target = "_blank";
    anchor.rel = "noopener noreferrer";
    anchor.textContent = originalNumber;
    div2.appendChild(anchor);
  });

  console.log("Numbers updated:", numbersList);
}

function sendMessageToAll() {
  if (!numbersList.length) {
    alert("No numbers to send to. Please update the list first.");
    return;
  }

  numbersList.forEach(({ number, message }) => {
    const link = `https://wa.me/${number}?text=${encodeURIComponent(message)}`;
    window.open(link, "_blank", "noopener,noreferrer");
  });

  console.log("Messages sent to all numbers!");
}

function handleFileUpload(event) {
  const file = event.target.files[0];
  if (!file) return;

  const reader = new FileReader();
  reader.onload = function (e) {
    const contents = e.target.result;
    document.getElementById("new-bio").value += "\n" + contents;
    updateNumbers();
  };
  reader.readAsText(file);
}
