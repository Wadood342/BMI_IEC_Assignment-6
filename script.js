const weight = document.querySelector("#weight");
const heightFt = document.querySelector("#height-ft");
const heightInches = document.querySelector("#height-inches");
const output = document.querySelector("#output");
const statusElement = document.querySelector("#status");
const validator = document.querySelector("#validator");

function cal() {
    // Validate inputs
    if (!weight.value || !heightFt.value || !heightInches.value) {
        validator.textContent = "Please Enter Weight, Height (in Foot and Inches)";
        output.textContent = "";
        statusElement.textContent = "";
        statusElement.style.backgroundColor = ''; // Reset the background color
        return;
    }

    // Calculate BMI
    const foot = heightFt.value * 0.3048;
    const inches = heightInches.value * 0.0254;
    const totalHeightSq = (foot + inches) * (foot + inches);
    const bmi = weight.value / totalHeightSq;

    // Check for NaN
    if (isNaN(bmi) || !isFinite(bmi)) {
        validator.textContent = "Error: Invalid input. Please check your values.";
        return;
    }

    const roundedBmi = bmi.toFixed(2);

    // BMI and status
    output.textContent = roundedBmi;

    // Remove previous status classes
    statusElement.classList.remove("underweight", "normal", "overweight", "obese", "valid");

    if (bmi < 0.1) {
        output.textContent = "BMI can not be in negative";
        statusElement.textContent = "Do not enter negative value";
        statusElement.classList.add("status-box", "obese");
    } else if (bmi >= 0 && bmi <= 18.5) {
        statusElement.textContent = "Underweight";
        statusElement.classList.add("status-box", "underweight");
    } else if (bmi >= 18.5 && bmi < 24.9) {
        statusElement.textContent = "Normal Weight";
        statusElement.classList.add("status-box", "normal");
    } else if (bmi >= 25 && bmi < 29.9) {
        statusElement.textContent = "Overweight";
        statusElement.classList.add("status-box", "overweight");
    } else {
        statusElement.textContent = "Obese";
        statusElement.classList.add("status-box", "obese");
    }

    validator.textContent = "";
}
