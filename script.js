let numbersList = [];

function updateNumbers() {
  let userInput = document.getElementById("new-bio").value;
  let userTextInput = document.getElementById("msg").value;
  let div2 = document.getElementById("div2");
  div2.innerHTML = "";
  numbersList = [];

  const lines = userInput.split(/\r|\r\n|\n/);

  lines.forEach(function (el) {
    let originalNumber = el.trim();
    if (!originalNumber) return;

    if (originalNumber.startsWith("05")) {
      originalNumber = originalNumber.replace(/^0/, "972");
    }

    let cleanNumber = originalNumber.replace(/-/g, "");
    numbersList.push({ number: cleanNumber, message: userTextInput });

    const link = `https://wa.me/${cleanNumber}?text=${encodeURIComponent(
      userTextInput
    )}`;
    const anchor = document.createElement("a");
    anchor.className = "bubble";
    anchor.href = link;
    anchor.target = "_blank";
    anchor.rel = "noopener noreferrer";
    anchor.textContent = cleanNumber;
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
