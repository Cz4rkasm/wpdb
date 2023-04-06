window.addEventListener('DOMContentLoaded', function() {
	// Retrieve query string parameters from URL
	const queryString = window.location.search;
	const urlParams = new URLSearchParams(queryString);

	// Get input values from query string parameters and display them
	const input1Value = urlParams.get('input1');
	const input2Value = urlParams.get('input2');
	const resultDiv = document.getElementById('result');
	resultDiv.innerHTML = `Input 1: ${input1Value}<br>Input 2: ${input2Value}`;
});