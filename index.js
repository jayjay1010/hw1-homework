// Simple JavaScript for email input

// Wait until the page loads
document.addEventListener("DOMContentLoaded", function () {
  // Find the input and button
  const emailInput = document.querySelector("#email");
  const submitBtn = document.querySelector("#submitBtn");

  // When the button is clicked
  submitBtn.addEventListener("click", function () {
    const emailValue = emailInput.value;

    // Simple check if the email includes "@"
    if (emailValue.includes("@")) {
      alert("Thanks! We received your email: " + emailValue);
    } else {
      alert("Please enter a valid email address.");
    }
  });
});