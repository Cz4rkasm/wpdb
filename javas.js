// Define the two arrays
var array1 = ["Mumbai, Maharashtra",
"Delhi",
"Kanpur, Uttar Pradesh",
"Kharagpur, West Bengal",
"Madras, Tamil Nadu",
"Pilani, Rajasthan",
"Mesra, Jharkhand",
"Vellore, Tamil Nadu",
"Chennai, Tamil Nadu",
"Manipal, Karnataka",
"Tiruchirappalli, Tamil Nadu",
"Warangal, Telangana",
"Surathkal, Karnataka",
"Calicut, Kerala",
"Allahabad, Uttar Pradesh",
"Jabalpur, Madhya Pradesh",
"Kurnool, Andhra Pradesh",
"Guwahati, Assam",
"Lucknow, Uttar Pradesh",
"New Delhi",
"Kolkata, West Bengal",
"Hyderabad, Telangana",
"Ahmedabad, Gujarat",
"Bengaluru, Karnataka",
"Kurukshetra, Haryana",
"Vijayawada, Andhra Pradesh",
"Jamshedpur, Jharkhand",
"Pune, Maharashtra",
"Mandi, Himachal Pradesh",
"Bombay, Maharashtra",
"Roorkee, Uttarakhand",
"Bhubaneswar, Odisha",
"Gandhinagar, Gujarat",
"Indore, Madhya Pradesh",
"Jodhpur, Rajasthan",
"Patna, Bihar",
"Ropar, Punjab",
"Tirupati, Andhra Pradesh",
"Palakkad, Kerala",
"Bhilai, Chhattisgarh",
"Goa",
"Jammu, Jammu and Kashmir",
"Dharwad, Karnataka",
"Rourkela, Odisha",
"Durgapur, West Bengal",
"Silchar, Assam",
"Agartala, Tripura",
"Srinagar, Jammu and Kashmir",
"Hamirpur, Himachal Pradesh",
"Karnataka",
"Bangalore, Karnataka",
"Assam",
"Bhopal, Madhya Pradesh",
"Patiala, Punjab",
"Ranchi, Jharkhand",
"Sonipat, Haryana",
"Mohali, Punjab",
"Thiruvananthapuram, Kerala"];
var array2 = ["Computer Science, Electrical Engineering, Physics",  "Mechanical Engineering, Civil Engineering",  "Aerospace Engineering, Materials Science",  "Mining Engineering, Chemical Engineering",  "Biotechnology, Chemical Engineering",  "Computer Science, Electronics and Communication",  "Information Technology, Mechanical Engineering",  "Information Technology, Electronics and Communication",  "Computer Science, Electrical Engineering",  "Fashion Design, Textile Design",  "Accessory Design, Knitwear Design",  "Fashion Communication, Leather Design",  "Fashion Technology, Fashion Management",  "Product Design, Graphic Design",  "Animation Film Design, Furniture Design",  "Exhibition Design, Film and Video Communication",  "Textile Design, Ceramic and Glass Design",  "Business Administration",  "Business Administration, Management",  "Journalism, Public Relations",  "Advertising, Film and Television",  "Film and Television",  "Journalism, Media Studies",  "Journalism and Mass Communication, Advertising and Public Relations",  "Dramatics, Theatre Arts",  "Cinematography, Screenwriting",  "Engineering Physics, Mathematics and Computing",  "Aerospace Engineering, Biotechnology",  "Chemical Engineering, Civil Engineering",  "Mechanical Engineering, Ocean Engineering",  "Biomedical Engineering, Chemical Engineering",  "Civil Engineering, Mechanical Engineering",  "Biological Engineering, Materials Science and Engineering",  "Electrical Engineering, Mechanical Engineering",  "Civil Engineering, Electrical Engineering",  "Mechanical Engineering, Computer Science",  "Chemical Engineering, Information Technology",  "Electrical and Electronics Engineering, Computer Science",  "Computer Engineering, Electronics and Communication Engineering",  "Metallurgical and Materials Engineering, Mining Engineering",  "Civil Engineering, Computer Science",  "Electronics and Communication Engineering, Mechanical Engineering",  "Civil Engineering, Electronics and Communication Engineering",  "International Relations, Political Science",  "Computer Engineering, Information Technology",  "Computer Science, Electronics and Communication Engineering",  "Law",  "Computer Science, Mechanical Engineering",  "Mathematics, Physics",  "Chemistry, Mathematics",  "Biological Sciences, Chemical Sciences",  "Chemical Engineering, Mathematics",  "Chemistry, Physics"];

// Define the filterResults function
function filterResults(event, inputNumber) {
  // Get the input element and the results list element corresponding to the input number
  var inputElement = document.getElementById(`input${inputNumber}`);
  var resultsListElement = document.getElementById(`results${inputNumber}`);
  
  // Get the input value and clear any previous results
  var inputValue = inputElement.value.toLowerCase();
  resultsListElement.innerHTML = "";
  
  // Loop through the array corresponding to the input number
  var array = (inputNumber === 1) ? array1 : array2;
  for (var i = 0; i < array.length; i++) {
    // If the current array element contains the input value
    if (array[i].toLowerCase().indexOf(inputValue) !== -1) {
      // Create a result item element and add it to the results list element
      var resultItemElement = document.createElement("LI");
      resultItemElement.innerHTML = array[i];
      resultItemElement.onclick = function() {
        inputElement.value = this.innerHTML;
        resultsListElement.innerHTML = "";
      };
      resultsListElement.appendChild(resultItemElement);
    }
  }
}

// Define the showResults function
function showResults(inputNumber) {
  // Get the results list element corresponding to the input number
  var resultsListElement = document.getElementById(`results${inputNumber}`);
  
  // Clear any previous results and loop through the array corresponding to the input number
  resultsListElement.innerHTML = "";
  var array = (inputNumber === 1) ? array1 : array2;
  for (var i = 0; i < array.length; i++) {
    // Create a result item element and add it to the results list element
    var resultItemElement = document.createElement("LI");
    resultItemElement.innerHTML = array[i];
    resultItemElement.onclick = function() {
      document.getElementById(`input${inputNumber}`).value = this.innerHTML;
      resultsListElement.innerHTML = "";
    };
    resultsListElement.appendChild(resultItemElement);
  }
}

// Define the submitForm function
// function submitForm() {
//   // Get the values of the two inputs and display them
//   var input1Value = document.getElementById("input1").value;
//   var input2Value = document.getElementById("input2").value;
//   document.getElementById("output").innerHTML = `Input 1: ${input1Value}<br>Input 2: ${input2Value}`;

  
// }


// function submitForm() {
//     // Get the values of the two dropdown menus and display them
//     var dropdown1Value = document.getElementById("dropdown1").value;
//     var dropdown2Value = document.getElementById("dropdown2").value;
//     var outputElement = document.getElementById("output");
    
//     if (dropdown1Value && dropdown2Value) {
//       outputElement.innerHTML = `Dropdown 1: ${dropdown1Value}<br>Dropdown 2: ${dropdown2Value}`;
//     } else {
//       outputElement.innerHTML = "Please select options for both dropdown menus.";
//     }
//     var input1Value = document.getElementById("input1").value;
//     var input2Value = document.getElementById("input2").value;
//     document.getElementById("output").innerHTML = `Input 1: ${input1Value}<br>Input 2: ${input2Value}`;
    // Add your existing submitForm code here
    // ...
//  }

function submitForm() {
    // Get the values of the input fields and the selected values of the two dropdown menus and display them
    var input1Value = document.getElementById("input1").value;
    var input2Value = document.getElementById("input2").value;
    var dropdown1Value = document.getElementById("dropdown1").value;
    var dropdown2Value = document.getElementById("dropdown2").value;
    var float1Value = document.getElementById("float1").value;
    var float2Value = document.getElementById("float2").value;
    var outputElement = document.getElementById("output");
  
    if (input1Value && input2Value && dropdown1Value && dropdown2Value && float1Value && float2Value) {
      // Save the form data in a JavaScript object
      var formData = {
        input1: input1Value,
        input2: input2Value,
        dropdown1: dropdown1Value,
        dropdown2: dropdown2Value,
        float1: float1Value,
        float2: float2Value
      };
  
      // Encode the form data in a JSON string
      var formDataJSON = JSON.stringify(formData);
  
      // Redirect the user to the results page with the form data in the query string
      window.location.href = "results.html?data=" + encodeURIComponent(formDataJSON);
    } else {
      outputElement.innerHTML = "Please fill in all the fields and select options for both dropdown menus.";
    }
  
    // Add your existing submitForm code here
    // ...
  }