document.addEventListener("DOMContentLoaded", function() {
    const form = document.getElementById("login_user");
  
    form.addEventListener("submit", (e) => {
      e.preventDefault();

      const email = document.getElementById("user_email").value;
      const password = document.getElementById("user_password").value;
  
      // Temporary for testing
      console.log("Email: ", email);
      console.log("Password:", password);
      location.href='../homepage/homepage.html';
    });
  });
  