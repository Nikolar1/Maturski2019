

/*function Send() {
  var email = document.getElementById("email_field").value;
  var pass = document.getElementById("password_field").value;
  var XHR = new XMLHttpRequest();
  var data = {EMAIL: email, PASS: pass};

  // Define what happens on successful data submission
  XHR.addEventListener('load', function(event) {
    alert('Yeah! Data sent and response loaded.');
  });

  // Define what happens in case of error
  XHR.addEventListener('error', function(event) {
    alert('Oops! Something goes wrong.');
  });

  // Set up our request
  XHR.open('POST', 'htttps://localhost:3000/Authentification');

  // Add the required HTTP header for form data POST requests
  //XHR.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');

  // Finally, send our data.
  XHR.send(data);
} */


function uradi() {
  var r = JSON.parse(sessionStorage.getItem("token"));

  if(r.success) {
    window.location.href = "./index.html"
  }
  else {
    alert(r.message);
  }
}

function Send() {
  var url = 'http://localhost:3000/Authentification';
  var email = document.getElementById("email_field").value;
  var pass = document.getElementById("password_field").value;
  var data = {EMAIL: email, PASS: pass};

  sessionStorage.setItem("EMAIL", email);
// Default options are marked with *
   fetch(url, {
      method: "POST", // *GET, POST, PUT, DELETE, etc.
      mode: "cors", // no-cors, cors, *same-origin
      headers: {
          "Content-Type": "application/json",
      },
      body: JSON.stringify(data) // body data type must match "Content-Type" header
  }).then(res => res.json())
    .then(res => sessionStorage.setItem("token", JSON.stringify(res)))
    .then(res => uradi());
}
