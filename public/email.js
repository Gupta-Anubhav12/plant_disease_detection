function sendEmail() {
  const name = document.getElementById("name");
  const email = document.getElementById("email");
  const title = document.getElementById("title");
  const message = document.getElementById("message");
  const image = document.getElementById("image");

  const messageBody =
    "name: " +
    name.value +
    "\n" +
    "email: " +
    email.value +
    "\n" +
    "title: " +
    title.value +
    "\n" +
    "message: " +
    message.value;

  Email.send({
    Host: "smtp.gmail.com",
    Username: "salariahartik34@gmail.com",
    Password: "mpjudnlgagkwxmos",
    To: "salariahartik34@gmail.com",
    From: "salariahartik34@gmail.com",
    Subject: "Testing",
    Body: messageBody,
    Attachments: [
      {
        name: "smtpjs.jpeg",
        path: image.value,
      },
    ],
  }).then((message) => alert("mail sent successfully"));
}
