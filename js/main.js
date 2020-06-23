document.getElementById("submit").addEventListener("click", checkMail);

function checkMail() {
  var mail = document.getElementById("email");
  if (mail != "") {
    validateEmail(mail.value);
  } else {
    alert("Please input you mail first.");
  }
}

function validateEmail(emailField) {
  var reg = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;

  if (reg.test(emailField) == false) {
    console.log("Invalid Email Address " + emailField);
    return false;
  }
  alert("Subscribed successfully!");
  return true;
}
