import emailChecker from "../../lib/email-checker";

function handler(req, res) {
  if (req.method === "POST") {
    const { email, name, message } = req.body;

    if (
      !email ||
      !emailChecker(email) ||
      !name ||
      name.trim() === "" ||
      !message ||
      message.trim() === ""
    ) {
      res.status(422).json({
        message: "Invalid Input",
      });
      return;
    }

    // Store in a DB
    const newMessage = {
      email,
      name,
      message,
    };
    console.log(newMessage);
    res.status(201).json({
      message: "Successfully stored message!",
    });
  }
}

export default handler;
