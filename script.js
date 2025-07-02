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
