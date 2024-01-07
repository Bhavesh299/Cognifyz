function addNumbers() {
  // Get input values
  var num1 = parseFloat(document.getElementById("number1").value);
  var num2 = parseFloat(document.getElementById("number2").value);

  // Check if the input values are valid numbers
  if (isNaN(num1) || isNaN(num2)) {
    alert("Please enter valid numbers");
    return;
  }

  // Calculate the sum
  var sum = num1 + num2;

  // Display the result
  document.getElementById("total").innerHTML = sum;
}
