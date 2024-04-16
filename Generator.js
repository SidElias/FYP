// qr_generator.js
document.getElementById("qr-text").addEventListener("input", generateQR);

function generateQR() {
    var text = document.getElementById("qr-text").value;
    var imgSrc = "https://laughing-space-bassoon-59669pwrqw5hrj9-5000.app.github.dev/" + encodeURIComponent(text);

    // Clear previous feedback
    document.getElementById("feedback").innerHTML = "";

    // Display loading message
    document.getElementById("qrcode").innerHTML = "Generating QR code...";

    // Load the generated QR code image
    var img = new Image();
    img.onload = function() {
        document.getElementById("qrcode").innerHTML = "";
        document.getElementById("qrcode").appendChild(img);
        document.getElementById("feedback").innerHTML = "QR code generated successfully!";
    };
    img.onerror = function() {
        document.getElementById("qrcode").innerHTML = "";
        document.getElementById("feedback").innerHTML = "Error generating QR code. Please try again.";
    };
    img.src = imgSrc;
}
