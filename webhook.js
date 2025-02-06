document.getElementById("orderForm").addEventListener("submit", function(event) {
    event.preventDefault();

    const name = document.getElementById("name").value;
    const address = document.getElementById("address").value;
    const product = document.getElementById("product").value;

    const webhookURL = "YOUR_DISCORD_WEBHOOK_URL"; // Replace with your actual Discord webhook

    const payload = {
        content: `New Order Received:\n\n**Name:** ${name}\n**Address:** ${address}\n**Product:** ${product}`
    };

    fetch(webhookURL, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(payload)
    }).then(response => {
        if (response.ok) {
            alert("Order sent successfully!");
        } else {
            alert("Error sending order.");
        }
    }).catch(error => console.error("Error:", error));
});