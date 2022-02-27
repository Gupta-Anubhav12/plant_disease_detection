function sendEmail() {
    const username = document.getElementById("username");
    const email = document.getElementById("email");
    const phone = document.getElementById("phone");
    const message = document.getElementById("message");
  
    console.log(username);
  
    const messageBody =
      "username: " +
      username.value +
      "\n" +
      "email: " +
      email.value +
      "\n" +
      "phone: " +
      phone.value +
      "\n" +
      "message: " +
      message.value;
  
    Email.send({
      Host: "salariahartik34#gmail.com",
      Username: "salariahartik34@gmail.com", // email to which you want to send the info stuff
      Password: "iguwkckfsshmgrfw", // don't think you can now access my email :) its just a temporary password accessible by this code
      To: "salariahartik34@gmail.com", // to get such password follow intructions at the bottom
      From: "salariahartik34@gmail.com",
      Subject: "Testing",
      Body: messageBody,
    }).then((message) => alert("mail sent successfully"));
  }
  // go to manage your account and then go to security
  // to get temporary password just enable two step verification in in the security section
  // then you will be able to see app passwords
  // select app as mail and device as windows computer and then you will get the temp password