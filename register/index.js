document.addEventListener("DOMContentLoaded", function() { 
  const form = document.getElementById("register_user");

  form.addEventListener("submit", (e) => {
      e.preventDefault();

      const firstname = document.getElementById("user_firstname").value;
      const lastname = document.getElementById("user_lastname").value;
      const email = document.getElementById("user_email").value;
      const password = document.getElementById("user_password").value;
      const passwordredo = document.getElementById("user_password_redo").value;
      const selectedRole = document.querySelector('input[name="role"]:checked').value;

      //temporary for testing
      console.log("Name: ", firstname + ' ' + lastname);
      console.log("Email: ", email);
      console.log("Password:", password);
      console.log("Password Redo:", passwordredo);
      console.log("Selected Role:", selectedRole);

      document.getElementById('selected-role').innerText = selectedRole;

      document.querySelector('.formContainer').style.display = 'none';
      document.getElementById('notification-box').style.display = 'block';
  });
});

function returnToRegistration() {
  document.getElementById('notification-box').style.display = 'none';
  document.querySelector('.formContainer').style.display = 'block';
}

function displayView(userRole){
  if (userRole === "Client") {
    window.location.href = "../clientFunctionality/welcome_client.html";
} else if (userRole === "Contractor") {
    window.location.href = "../contractorFunctionality/welcome_contractor.html";
}}
