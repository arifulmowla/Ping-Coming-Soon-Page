document.getElementById("submit").addEventListener("click", checkMail);

function checkMail() {
  var mail = document.getElementById("email");
  if (mail != "") {
    validateEmail(mail.value);
  } else {
    alert("Whoops! It looks like you forgot to add your email");
  }
}

function validateEmail(emailField) {
  var reg = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;

  if (reg.test(emailField) == false) {
    console.log("Please provide a valid email address");
    return false;
  }
  alert("Subscribed successfully!");
  return true;
}
