let numbersList = []; // Global array to store numbers

function updateNumbers() {
    let userInput = document.getElementById("new-bio").value; // Getting the numbers from textarea
    let userTextInput = document.getElementById("msg").value; // Getting the message text

    var lines = userInput.split(/\r|\r\n|\n/); // Splitting the input into lines
    
    lines.forEach(function(el) {
        let originalNumber = el.trim();
        let startingNum = originalNumber.substr(0, 3);

        // Handle numbers starting with 05 (Israel)
        if (startingNum.startsWith("05")) {
            if (originalNumber.startsWith("0")) {
                originalNumber = originalNumber.replace("0", ""); // Remove leading zero
                el = "972" + originalNumber; // Add Israel country code
            }
        }

        // Remove dashes from the number
        el = el.replace(/-/g, "");

        // Store the number in the global list
        numbersList.push({ number: el, message: userTextInput });

        // Optionally create a div for display
        var div = document.createElement("div");
        div.innerHTML = `
            <a id=${originalNumber} href="https://wa.me/${el}?text=${encodeURIComponent(userTextInput)}" target="_blank" rel="noopener noreferrer">${originalNumber}</a>
        `;
        document.body.appendChild(div);
    });

    console.log("Numbers updated:", numbersList);
}
function sendMessageToAll() {
    numbersList.forEach(({ number, message }) => {
        let link = `https://wa.me/${number}?text=${encodeURIComponent(message)}`;
        window.open(link, "_blank", "noopener noreferrer");
    });
    console.log("Messages sent to all numbers!");
}
