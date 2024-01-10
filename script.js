
    function convert() {
      var amount = parseFloat(document.getElementById("amount").value);
      var fromCurrency = document.getElementById("fromCurrency").value;
      var toCurrency = document.getElementById("toCurrency").value;
      var resultElement = document.getElementById("result");
      var errorMessageElement = document.getElementById("error-message");

      // Validate the input
      if (isNaN(amount) || amount <= 0) {
        errorMessageElement.innerText = "Please enter a valid positive number.";
        resultElement.innerText = "";
        return;
      }

      // Clear any previous error messages
      errorMessageElement.innerText = "";

      // Conversion rates (replace with actual rates)
      var conversionRates = {
        USD: 0.012,  // 1 INR = 0.014 USD
        EUR: 0.012,  // 1 INR = 0.012 EUR
        GBP: 0.011,  // 1 INR = 0.011 GBP
        INR: 1       // 1 INR = 1 INR
      };

      // Check if the selected currencies are valid
      if (!(fromCurrency in conversionRates) || !(toCurrency in conversionRates)) {
        errorMessageElement.innerText = "Invalid currency selection.";
        resultElement.innerText = "";
        return;
      }

      // Display loading message
      resultElement.innerText = "Converting...";

      // Simulate an asynchronous operation (replace with actual API call)
      setTimeout(function () {
        // Perform the conversion
        var result = amount * (conversionRates[toCurrency] / conversionRates[fromCurrency]);

        // Display the result
        resultElement.innerText = result.toFixed(2) + " " + toCurrency;
      }, 1000); // Simulated 1-second delay, replace with actual API call delay
    }

    function resetConverter() {
      document.getElementById("amount").value = "";
      document.getElementById("fromCurrency").value = "USD";
      document.getElementById("toCurrency").value = "USD";
      document.getElementById("result").innerText = "";
      document.getElementById("error-message").innerText = "";
    }

    // Add event listeners
    document.getElementById("convertButton").addEventListener("click", convert);
    document.getElementById("resetButton").addEventListener("click", resetConverter);
