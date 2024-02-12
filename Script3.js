  function validateForm() {
    let x = document.forms["Form"]["name"]["password"]["name"].value;
    if (x == "") {
      alert("Name must be filled out");
      return false;
    }
  }
  document.getElementById('form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevents the form from submitting in the traditional way

    // Perform any additional form validation here if needed

    // Assuming the form is valid, show the success alert
    alert("Form submitted successfully!");
});