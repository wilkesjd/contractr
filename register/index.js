document.addEventListener("DOMContentLoaded", function() {
    const form = document.getElementById("register_user");
  
    form.addEventListener("submit", (e) => {
      e.preventDefault();

      const firstname = document.getElementById("user_firstname").value;
      const lastname = document.getElementById("user_lastname").value;
      const email = document.getElementById("user_email").value;
      const password = document.getElementById("user_password").value;
      const passwordredo = document.getElementById("user_password_redo").value;
  
      // Temporary for testing
      console.log("Name: ", firstname + lastname);
      console.log("Email: ", email);
      console.log("Password:", password);
      console.log("Password Redo:", passwordredo);
      location.href='role_specification.html';
    });
  });
  